<?php
//Exercice 1
echo "Bonjour le monde ! ". PHP_EOL .
"Bienvenue dans le cours PHP.";

//Exercice 2 - Les variables

$prenom = "Mathieu";
$nom = "Mithridate";
$âge = 35;
$ville = "Limoges";

echo "Je m'appelle $prenom $nom.";
echo "J'ai $âge.";
echo "J'habite à $ville.";

// Exercie 3

const PI = 3.14159;
const TVA = 20;

echo "Valeur de PI : " . PI;
echo "TVA : " . TVA;

//Exercice 4 

$prix_HT = 100;
$nb_articles = 5;
$taux_TVA = 0.2;

echo "Le prix hors taxes est de : " . $prix_HT . "€";
echo "Le nombre d'articles est de : " . $nb_articles;
echo "Le taux de TVA est de : " . $taux_TVA;     

$prix_TTC = $prix_HT * (1 + $taux_TVA) * $nb_articles;
echo "Le prix TTC est de : " . $prix_TTC . "€";

//Exercice 5 - Lecture clavier

echo "Quel est votre prénom ?";
$prenom = readline();

echo "Bonjour $prenom !";

//Exercice 6 - Calcul de l'âge
echo "Quel âge avez-vous ?";
$age = readline("saisissez votre âge : ");
    echo "Vous avez $age ans.";
    echo "L'année prochaine vous aurez " . ($age +1) . "ans";

//Exercice 7 - Pair ou impair (condition if else)
echo "Saisissez un nombre : ";
$nombre = readline();
if ($nombre % 2 == 0){
    echo "Le nombre est pair.";
} else {
    echo "Le nombre est impair.";   
}

//Exercice 8 - Majeur ou mineur

echo "Quel âge avez-vous ?";
$age = readline();
if ($age >= 18){
    echo "Vous êtes majeur.";
} else {
    echo "Vous êtes mineur.";
}

//Exercice 9 - Comparaison
echo "Saisissez un nombre : ";
$nombre1 = readline();
echo "Saisissez un autre nombre : ";
$nombre2 = readline();
if ($nombre1 > $nombre2){
    echo "$nombre1 est plus grand que $nombre2.";
} elseif ($nombre1 < $nombre2){
    echo "$nombre1 est plus petit que $nombre2.";
} else {
    echo "$nombre1 est égal à $nombre2.";
}

//Exercice 10 - Température 
echo "Saisissez la température en degrés Celsius : ";
$temperature = readline();
if ($temperature < 0){
    echo " Il gèle";
} elseif ($temperature >= 0 && $temperature < 15){
    echo " Il fait froid";
} elseif ($temperature >= 16 && $temperature < 25){
    echo " Il fait bon";
} else {
    echo " Il fait chaud";
}

//Exercice 11 - Mini questionnaire 
$prenom = readline("saisissez votre prénom : ");
$nom = readline("saisissez votre nom : ");
$age = readline("saisissez votre âge : ");
$ville = readline("saisissez votre ville : ");

echo "-------------------------
Fiche utilisateur
-------------------------";
echo "Prénom : " . $prenom;
echo "Nom : " . $nom;
echo "Âge : " . $age;
echo "Ville : " . $ville;

//Exercice 12 - Deviner le nombre :
$secret = 8;
$essai = readline("Devinez le nombre secret : ");
if ($essai == $secret){
    echo "Bravo !";
} else {
    echo "Perdu !";
}

//Exercice 13 - Calculatrice : 
$nombre1 = readline("Saisissez le premier nombre : ");
$operateur = readline("Saisissez l'opérateur (add, sous, div, multi) : ");
$nombre2 = readline("Saisissez le deuxième nombre : ");
 if ($operateur == "add"){
    $resultat = $nombre1 + $nombre2;
    echo "resultat de l'addition " . $nombre1 . " + " . $nombre2 . " = " . $resultat;
 } elseif ($operateur == "sous"){
    $resultat = $nombre1 - $nombre2;
    echo "resultat de la soustraction " . $nombre1 . " - " . $nombre2 . " = " . $resultat;
 } elseif ($operateur == "div"){
    $resultat = $nombre1 / $nombre2;
    echo "resultat de la division " . $nombre1 . " / " . $nombre2 . " = " . $resultat;
 } elseif ($operateur == "multi"){
    $resultat = $nombre1 * $nombre2;
    echo "resultat de la multiplication " . $nombre1 . " * " . $nombre2 . " = " . $resultat;
 }


 //Exercice 14 - Bulletin de notes :
function resultat(int|float $note): string {
    if ($note < 10) {
        return "Echec";
    } else if ($note < 12) {
        return "Admis : Passable";
    } else if ($note < 14) {
        return "Admis : Assez Bien";
    } else if ($note < 16) {
        return "Admis : Bien";
    } else {
        return "Admis : Très Bien";
    }
}

$note1 = (float) readline("Saisir la premiere note \t");
$note2 = (float) readline("Saisir la deuxieme note \t");
$note3 = (float) readline("Saisir la troisieme note \t");

echo "Note 1 (" . $note1 . ") : " . resultat($note1) . "\n";
echo "Note 2 (" . $note2 . ") : " . resultat($note2) . "\n";
echo "Note 3 (" . $note3 . ") : " . resultat($note3) . "\n";

$moyenne = ($note1 + $note2 + $note3) / 3;
echo "La moyenne est de : " . round($moyenne, 2) . "\n";


//Exercice 15 - plus grand :
$nbr1 = (float) readline("Saisir un premier nombre \t"); echo $nbr1;
$nbr2 = (float) readline("Saisir un deuxieme nombre \t"); echo $nbr2;
$nbr3 = (float) readline("Saisir un troisieme nombre \t"); echo $nbr3;
$nbr4 = (float) readline("Saisir un quatrieme nombre \t"); echo $nbr4;
$nbr5 = (float) readline("Saisir un cinquieme nombre \t"); echo $nbr5;

function plusGrand(int|float $nbr1, int|float $nbr2, int|float $nbr3, int|float $nbr4, int|float $nbr5): string {
    $plusGrand = $nbr1;

    if ($nbr2 > $plusGrand) {
        $plusGrand = $nbr2;
    }
    if ($nbr3 > $plusGrand) {
        $plusGrand = $nbr3;
    }
    if ($nbr4 > $plusGrand) {
        $plusGrand = $nbr4;
    }
    if ($nbr5 > $plusGrand) {
        $plusGrand = $nbr5;
    }

    return $plusGrand;
}
echo "Le plus grand nombre est : " . plusGrand($nbr1, $nbr2, $nbr3, $nbr4, $nbr5);

//Exercice 16 - plus petit :
$nbr1 = (float) readline("Saisir un premier nombre \t"); echo $nbr1;
$nbr2 = (float) readline("Saisir un deuxieme nombre \t"); echo $nbr2;
$nbr3 = (float) readline("Saisir un troisieme nombre \t"); echo $nbr3;
$nbr4 = (float) readline("Saisir un quatrieme nombre \t"); echo $nbr4;
$nbr5 = (float) readline("Saisir un cinquieme nombre \t"); echo $nbr5;

function plusPetit(int|float $nbr1, int|float $nbr2, int|float $nbr3, int|float $nbr4, int|float $nbr5): string {
    $plusPetit = $nbr1;

    if ($nbr2 < $plusPetit) {
        $plusPetit = $nbr2;
    }
    if ($nbr3 < $plusPetit) {
        $plusPetit = $nbr3;
    }
    if ($nbr4 < $plusPetit) {
        $plusPetit = $nbr4;
    }
    if ($nbr5 < $plusPetit) {
        $plusPetit = $nbr5;
    }

    return $plusPetit;
}
echo "Le plus petit nombre est : " . plusPetit($nbr1, $nbr2, $nbr3, $nbr4, $nbr5);

// Exercice 17 - Longueur d'un prénom :
$prenom = readline("Saisissez votre prénom : ");
echo "Votre prénom contient " . strlen($prenom) . " caractères.";

//Exercice 18 - Nom en majuscules :
$nom = readline("Saisissez votre nom : ");
$prenom = readline("Saisissez votre prénom : ");

echo  $prenom . " " . strtoupper($nom) . "\n";

//Exercice 19 - Adresse mail :
$email = readline("Saisir une adresse mail \t"); echo $email;
str_contains($email, '@') ? print("Adresse valide") : print("Adresse invalide");

// Exercice 20 - Mot de passe:
const PASSWORD = "php2026";

$mot_de_passe = readline("Veuillez saisir le mot de passe : ");
if ($mot_de_passe === PASSWORD) {
    echo "  Connexion réussie !\n";
} else {
    echo "Connexion refusée !\n";
}

// Exercice 21 - Nettoyage d'une saisie :
$prenom = readline("Saisir un prénom : ");
$prenomNettoye = trim($prenom);

echo "Bonjour " . $prenomNettoye . "\n";

// Exercice 22 - Initiales :
$prenom = readline("Saisir votre prénom : \t");
$nom = readline("Saisir votre nom : \t");
function initiales(string $prenom, string $nom): string {
    $initiales = strtoupper(substr($prenom, 0, 1)) . strtoupper(substr($nom, 0, 1));
    return $initiales;
}
echo "Vos initiales sont : " . initiales($prenom, $nom) . "\n";
?>
