<?php

include_once 'database.php';
include 'vendor/autoload.php';

//1 tester si le formulaire est soumis
if (isset($_POST["submit"])) {
    $msg = traitement();
}

//Traitement du formulaire
function traitement(): string
{
    //2 tester si les champs sont remplis
    if (
        empty($_POST["firstname"]) ||
        empty($_POST["lastname"]) ||
        empty($_POST["email"]) ||
        empty($_POST["password"])
    ) {
        return "Veuillez remplir tous les champs";
    }
    //3 nettoyer les données (trim, strip_tag)
    $_POST["firstname"] = strip_tags(trim($_POST["firstname"]));
    $_POST["lastname"] = strip_tags(trim($_POST["lastname"]));
    $_POST["email"] = strip_tags(trim($_POST["email"]));
    $_POST["password"] = strip_tags(trim($_POST["password"]));

    //4 valider le format des données
    if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        return "Le mail est invalide";
    }
    if (strlen($_POST["password"]) < 8) {
        return "Le mot de passe est trop court";
    }
    //ajout en BDD si il n'existe pas
    if (find_user_by_email($_POST["email"])) {
        return "Le compte existe déja";
    }
    if (false === add_user($_POST)) {
        return "Le compte n'a pas pu étre ajouté en BDD";
    }
    return "Le compte " . $_POST["email"] . " a été ajouté avec succés";
}

function find_user_by_email(string $email): bool
{
    try {
        //5 ecrire la requête
        $sql = "SELECT u.id FROM `user` AS u WHERE u.email = ?";
        //6 se connecter à la BDD 
        //7 préparer la requête
        $stmt = connect_bdd()->prepare($sql);
        //8 assigner les paramètres
        $stmt->bindParam(1, $email, PDO::PARAM_STR);
        //9 éxécuter la requête
        $stmt->execute();
        //10 récupérer le résultat (fetch)
        $user = $stmt->fetch();
        //10 vérifier le resultat
    } catch (PDOException $e) {
        return false;
    }
    return $user;
}
function add_user(array $user): string|int|bool
{
    try {
        //11 ecrire la requête (INSERT)
        $sql = "INSERT INTO `user`(firstname, lastname, email, hash_password)
        VALUE(?,?,?,?)";
        //12 se connecter à la BDD
        //13 préparer la requête
        $stmt = connect_bdd()->prepare($sql);
        //14 assigner les paramètres
        $stmt->bindValue(1, $user["firstname"], PDO::PARAM_STR);
        $stmt->bindValue(2, $user["lastname"], PDO::PARAM_STR);
        $stmt->bindValue(3, $user["email"], PDO::PARAM_STR);
        $stmt->bindValue(4, $user["password"], PDO::PARAM_STR);
        //15 exécution de la requête
        return $stmt->execute();
    } catch (PDOException $e) {
        return false;
    }
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
        <input type="text" name="firstname" placeholder="prénom">
        <input type="text" name="lastname" placeholder="nom">
        <input type="text" name="email" placeholder="email">
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="ajouter" name="submit">
    </form>
    <p><?= $msg ?? "" ?></p>
</body>

</html>