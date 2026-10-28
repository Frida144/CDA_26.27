// Exercice 1 Super global post
<?php
if (isset($_POST["submit"])) {
    if (!empty($_POST["price"]) && !empty($_POST["number"]) && !empty($_POST["tva"])) {
        $msg = htmlspecialchars("Le prix TTC est égal à : " .$_POST["price"] * $_POST["number"] * (1 + $_POST["tva"] / 100) . "€");
    }else {
        $msg = "Veuillez remplir tous les champs.";
    }
}
?>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prix des articles</title>
</head>
<body>
    <h1>Prix des articles</h1>
    <form action="" method="post">
        <input type="text" name="price" placeholder="Prix HT de l'article">
        <input type="text" name="number" placeholder="le nombre d'articles">
        <input type="text" name="tva" placeholder="Taux de TVA">


        <input type="submit" value="envoyer" name="submit">
        <p><?= $msg ?? "" ?></p>
    </form>
</body>
</html>