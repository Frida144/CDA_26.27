<?php
// Exercice 2 - Super global post
function calculatrice(float $nbr1, float $nbr2, string $operateur): string {
    switch ($operateur) {
        case 'add':
            return "Résultat de l'addition : $nbr1 + $nbr2 = " . ($nbr1 + $nbr2);
        case 'sous':
            return "Résultat de la soustraction : $nbr1 - $nbr2 = " . ($nbr1 - $nbr2);
        case 'multi':
            return "Résultat de la multiplication : $nbr1 x $nbr2 = " . ($nbr1 * $nbr2);
        case 'div':
            if ($nbr2 == 0) {
                return "La division par zéro est impossible";
            }
            return "Résultat de la division : $nbr1 / $nbr2 = " . ($nbr1 / $nbr2);
        default:
            return "L'opérateur n'existe pas";
    }
}

if (isset($_POST["submit"])) {
    if (is_numeric($_POST["nbr1"]) && is_numeric($_POST["nbr2"]) && !empty($_POST["operateur"])) {
        $resultat = calculatrice($_POST["nbr1"], $_POST["nbr2"], $_POST["operateur"]);
    } else {
        $resultat = "Veuillez remplir tous les champs avec des nombres valides.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice</title>
</head>
<body>
    <h1>Calculatrice</h1>
    <form action="" method="post">
        <input type="text" name="nbr1" placeholder="Saisir un nombre">
        <input type="text" name="nbr2" placeholder="Saisir un autre nombre">
        <select name="operateur" placeholder="Saisir un opérateur : ">
            <option value="add">Addition</option>
            <option value="sous">Soustraction</option>
            <option value="multi">Multiplication</option>
            <option value="div">Division</option>
        </select> 
        <input type="submit" value="calculer" name="submit">
        <p><?= htmlspecialchars($resultat ?? "") ?></p>
    </form>
</body>
</html>
