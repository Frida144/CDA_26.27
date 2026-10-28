<?php

include_once 'database.php';

//1 tester si le formulaire est soumis
if (isset($_POST["submit"])) {
    $msg = inscription();
}
//2 tester si les champs sont remplis
function inscription(): string
{
    if (
        empty($_POST["prenom"]) ||
        empty($_POST["nom"]) ||
        empty($_POST["email"]) ||
        empty($_POST["password"])
    ) {
        return "Veuillez remplir tous les champs";
    }

    //3 nettoyer les données (trim, strip_tag)
    $prenom = trim(strip_tags($_POST["prenom"]));
    $nom = trim(strip_tags($_POST["nom"]));
    $email = trim(strip_tags($_POST["email"]));
    $password = $_POST["password"];

    //4 valider le format des données
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "L'email n'est pas valide";
    }
    if (
        strlen($password) < 8 ||
        !preg_match("/[A-Z]/", $password) ||
        !preg_match("/[a-z]/", $password) ||
        !preg_match("/[0-9]/", $password)
    ) {
        return "Le mot de passe doit contenir 8 caractères minimum, une majuscule, une minuscule et un chiffre";
    }

    try {
        //vérifier si le compte existe déjà
        if (findUserByEmail($email) !== false) {
            return "Le compte existe déjà";
        }
        //ajout en BDD si il n'existe pas
        $userId = addUser($prenom, $nom, $email, $password);
        return "L'utilisateur $prenom $nom a été ajouté en BDD (id : $userId)";
    } catch (PDOException $e) {
        return "Erreur BDD : " . $e->getMessage();
    }
}
//requête de consultation (si le compte existe déja)
//retourne un tableau si le compte existe, false sinon
function findUserByEmail(string $email): array|false
{
    //5 ecrire la requête
    $sql = "SELECT u.id_user AS id, u.firstname AS prenom, u.lastname AS nom, u.email AS mail FROM `user` AS u
        WHERE u.email = ?";
    //6 se connecter à la BDD
    $bdd = connect_bdd();
    //7 préparer la requête
    $stmt = $bdd->prepare($sql);
    //8 assigner les paramètres
    $stmt->bindValue(1, $email, PDO::PARAM_STR);
    //9 éxécuter la requête
    $stmt->execute();
    //10 récupérer le résultat (fetch)
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

//ajout en BDD, retourne l'ID de l'enregistrement
function addUser(string $prenom, string $nom, string $email, string $password): int
{
    //11 ecrire la requête (INSERT)
    $sql = "INSERT INTO `user` (firstname, lastname, email, hash_password) VALUES (?, ?, ?, ?)";
    //12 se connecter à la BDD
    $bdd = connect_bdd();
    //13 préparer la requête
    $stmt = $bdd->prepare($sql);
    //14 assigner les paramètres
    $stmt->bindValue(1, $prenom, PDO::PARAM_STR);
    $stmt->bindValue(2, $nom, PDO::PARAM_STR);
    $stmt->bindValue(3, $email, PDO::PARAM_STR);
    $stmt->bindValue(4, password_hash($password, PASSWORD_DEFAULT), PDO::PARAM_STR);
    //15 exécution de la requête
    $stmt->execute();
    //16 récupérer l'ID de l'enregistrement
    return (int) $bdd->lastInsertId();
}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="" method="post">
        <input type="text" name="prenom" placeholder="prénom">
        <input type="text" name="nom" placeholder="nom">
        <input type="email" name="email" placeholder="email">
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="ajouter" name="submit">
    </form>
    <p><?= htmlspecialchars($msg ?? "") ?></p>
</body>
</html>
