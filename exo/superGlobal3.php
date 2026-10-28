<?php
// Exercice 3 - Super global post
const EMAIL = "admin@test.com";
const PASSWORD = "php2026";

$message = "";

if (isset($_POST["submit"])) {
    if (empty($_POST["email"]) || empty($_POST["password"])) {
        $message = "Veuillez remplir tous les champs.";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $message = "L'email n'est pas valide.";
    } elseif ($_POST["email"] !== EMAIL) {
        $message = "Email incorrect.";
    } elseif ($_POST["password"] !== PASSWORD) {
        $message = "Mot de passe incorrect.";
    } else {
        $message = "Connecté.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    <form action="" method="post">
        <input type="email" name="email" placeholder="Saisir un email">
        <input type="password" name="password" placeholder="Saisir un mot de passe">
        <input type="submit" value="connexion" name="submit">
        <p><?= htmlspecialchars($message) ?></p>
    </form>
</body>
</html>