<?php
// Exercice 4 - Super global post
$message = "";
$recapitulatif = "";

if (isset($_POST["submit"])) {
    if (empty($_POST["lastname"]) || empty($_POST["firstname"]) || empty($_POST["email"]) || empty($_POST["password"]) || empty($_POST["confirm_password"]) || empty($_POST["birthDate"])) {
        $message = "Veuillez remplir tous les champs.";
    } elseif (strlen($_POST["lastname"]) <= 2 || strlen($_POST["firstname"]) <= 2) {
        $message = "Le Nom et prenom doivent contenir au moins 2 caractères.";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $message = "L'email n'est pas valide.";
    } elseif (strlen($_POST["password"]) <= 8) {
        $message = "Le mot de passe doit contenir au moins 8 caractères.";
    } elseif (!preg_match('/[A-Z]/', $_POST["password"])) {
        $message = "Le mot de passe doit contenir au moins une majuscule";
    } elseif (!preg_match('/[a-z]/', $_POST["password"])) {
         $message = "Le mot de passe doit contenir au moins une minuscule";
    } elseif (!preg_match('/[0-9]/', $_POST["password"])) {
         $message = "Le mot de passe doit contenir au moins un chiffre.";
    } elseif ($_POST["password"] !== $_POST["confirm_password"]) {
         $message = "Les mots de passe ne correspondent pas.";
    } elseif (strtotime($_POST["birthDate"]) > strtotime('-18 years')) {
         $message = "Vous devez avoir au moins 18 ans pour vous inscrire.";
    } else {
        $message = "Connecté";
        $recapitulatif = "Nom : " . ($_POST["lastname"] ?? "") . PHP_EOL .
            "Prénom : " . ($_POST["firstname"] ?? "") . PHP_EOL .
            "Email : " . ($_POST["email"] ?? "") . PHP_EOL .
            "Date de naissance : " . ($_POST["birthDate"] ?? "");
}}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inscription</title>
</head>

<body>
    <h1>Inscription</h1>
    <form action="" method="post">
        <input type="text" name="lastname" placeholder="Saisir un nom">
        <input type="text" name="firstname" placeholder="Saisir un prénom">
        <input type="email" name="email" placeholder="Saisir un email">
        <input type="password" name="password" placeholder="Saisir un mot de passe">
        <input type="password" name="confirm_password" placeholder="Confirmer le mot de passe">
        <input type="date" name="birthDate" placeholder="Saisir une date de naissance">
        <input type="submit" value="connexion" name="submit">
        <p><?= htmlspecialchars($message) ?></p>
        <ul>
            <li><?= htmlspecialchars($recapitulatif) ?></li>
        </ul>
    </form>
</body>

</html>