<?php
//Exercice 1 Les quatre opérations
function addition(int $a, int $b): int {
    $result = $a + $b;
    echo "Le résultat de l'addition est : " . $result . "\n";
    return $result;
}

function soustraction(int $a, int $b): int {
    $result = $a - $b;
    echo "Le résultat de la soustraction est : " . $result . "\n";
    return $result;
}

function multiplication(int $a, int $b): int {
    $result = $a * $b;
    echo "Le résultat de la multiplication est : " . $result . "\n";
    return $result;
}

function division(int $a, int $b): float {
    if ($b == 0) {
try {
  throw new InvalidArgumentException("la division par zéro n'est pas autorisée.");
} catch(InvalidArgumentException $e) {
  echo $e->getMessage();
}    }
    $result = $a / $b;
    echo "Le résultat de la division est : " . $result . "\n";
    return $result;
}
$a = readline("Entrez le premier nombre\t");
$b = readline("Entrez le deuxième nombre\t");
addition($a, $b);
soustraction($a, $b);
multiplication($a, $b);
division($a, $b);


//Exercice 2 - Calcul de TVA :

const TVA = 20;
function calculTTC(float $prixHT): float{
    $prixTTC = $prixHT * (1 + TVA / 100);
    echo "Le prix TTC est : " . $prixTTC . "\n";
    return $prixTTC;
};
$prixHT = readline("Entrez le prix HT\t");
calculTTC($prixHT);
//Exercice 3 - Être majeur :

function estMajeur(int $age): bool {
 if ($age >= 18) {
    return true;
    } else {
        return false;
    }
}
$age = readline("Entrez votre âge\t");
if (estMajeur($age)) {
    echo "Vous êtes majeur.\n";
} else {
    echo "Vous êtes mineur.\n";
}

// Exercice 4 - Initiales :
function initiales(string $prenom, string $nom): string {
    $initiales = strtoupper(substr($prenom, 0, 1) . substr($nom, 0, 1));
    echo "Vos initiales sont : " . $initiales . "\n";
    return $initiales;
}
$prenom = readline("Entrez votre prénom\t");
$nom = readline("Entrez votre nom\t"); 
initiales($prenom, $nom);

// Exercice 5 - Nom formaté :
function formatterNom(string $prenom, string $nom): string
{
    $nomFormatte = ucfirst(strtolower($prenom)) . " " . strtoupper($nom);
    echo "Nom formaté : " . $nomFormatte . "\n";
    return $nomFormatte;
}
$prenom = readline("Entrez votre prénom\t");
$nom = readline("Entrez votre nom\t");
formatterNom($prenom, $nom);