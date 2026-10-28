<?php
//Exercice 1 boucle :
$nbr = 0;
while ($nbr < 10) {
    echo ++$nbr;
}

//Exercice 2 boucles– Compte à rebours:
$nbr = 20;
while ($nbr >= 0) {
    echo $nbr . "\n";
    $nbr--;
} echo "Décollage !\n";

//Exercice 3 boucle – Boucle do...while: 
do {
    $password = readline("Entrez le mot de passe : ");
    if ($password !== "php2026") {
        echo "Mot de passe incorrect.\n";
    }

} while ($password !== "php2026");
echo "Connexion réussie.\n";

//Exercice 4 boucle– Première boucle for
$nbr = 7;
for ($i = 0;  $i <= 10; $i++) {
    echo $nbr. "*" . $i ." = " . $nbr * $i . "\n";
} echo "Décollage !\n";

//Exercice 5 boucle – Somme des nombres:
$somme = 0;
for ($i = 1; $i <= 100; $i++) {
    $somme += $i;
}
echo "La somme est : " . $somme . "\n";

//Exercice 6 boucle – Nombres pairs:
$paire = 0;
for ($i = 1; $i <= 50; $i++) {
    if ($i % 2 == 0) {
        echo $i . "\n";
        $paire++;
    }
}

//Exercice 7 boucle – Triangle d'étoiles :
$etoiles = 5;
$etoile = "*";
for ($i = 1; $i <=5; $i++) {
    echo $etoile . "*";
    $etoiles .= "*";
}  
