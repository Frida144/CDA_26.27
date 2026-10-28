<?php
//Exercice 8 – Tableau indexé :
$fruits = [
    "Pomme",
    "Poire",
    "Banane",
    "Orange",
    "Kiwi"
];
echo "le premier fruit est : " . $fruits[1] . "\n";
echo "le dernier fruit est : " . $fruits[count($fruits) - 1] . "\n";
echo "le nombre de fruits est : " . count($fruits) . "\n";
foreach ($fruits as $fruit) {
    echo $fruit . "\n";
}

//Exercice 9 – Tableau de notes :
$notes = [12, 15, 8, 19, 17];
$somme = 0;
$moyenne = 0;
for ($i = 0; $i < count($notes); $i++) {
    $somme += $notes[$i];
}
echo "la somme des notes est : " . $somme . "\n";
for ($i = 0; $i < count($notes); $i++) {
    $moyenne += $notes[$i];
}
$moyenne /= count($notes);
echo "la moyenne des notes est : " . $moyenne . "\n";

//Exercice 10 – Tableau associatif :
$personne = [
    "firstname" => "Alice",
    "lastname" => "Martin",
    "age" => 28,
    "city" => "Bordeaux"
];

echo "Prénom : " .$personne["firstname"] . "\n";
echo "Nom : " .$personne["lastname"] . "\n";
echo "Age : " .$personne["age"] . "\n";
echo "Ville : " .$personne["city"] . "\n";

//Exercice 11 – foreach :
$fruits = [
    "Pomme",
    "Poire",
    "Banane",
    "Orange",
    "Kiwi"
];
foreach ($fruits as $fruit) {
    echo "j'aime les " . $fruit . "s" . "\n";
}
//Exercice 12 – Parcourir un tableau associatif: 
$personne = [
    "firstname" => "Alice",
    "lastname" => "Martin",
    "age" => 28,
    "city" => "Bordeaux"
];
foreach ($personne as $key => $value) {
    echo $key . " : " . $value . "\n";
}

//Exrecices
$tab = [12,3,22,6,47,89,1,187,2,26,44,22,47,1];

//Exercice 13 :
function plusGrand(array $tab): string {
    $plusGrand = $tab[0];
    for ($i = 1; $i < count($tab); $i++) {
        if ($tab[$i] > $plusGrand) {
            $plusGrand = $tab[$i];
        }
    }
    return "Le plus grand nombre est : " . $plusGrand . "\n";
}
echo plusGrand($tab);

//Exercice 14 :
function moyenne(array $tab): string {
    $moyenne = 0;
    for ($i = 0; $i < count($tab); $i++) {
    $moyenne += $tab[$i];
}
$moyenne /= count($tab);
    return "la moyenne du tableau est : " . $moyenne . "\n";
}
echo moyenne($tab);

//Exercice 15 :
function plusPetit(array $tab): string {
    $plusPetit = $tab[0];
    for ($i = 1; $i < count($tab); $i++) {
        if ($tab[$i] < $plusPetit) {
            $plusPetit = $tab[$i];
        }
    }
    return "Le plus petit nombre est : " . $plusPetit . "\n";
}
echo plusPetit($tab);

//Exercice 16 : 
$tentative = 10;
function partie(int $tentative): string {  
    $randome = 23;
    for ($i = 1; $i <= $tentative ; $i++) {
           $choix = readline("Saisissez un nombre entre 1 et 100 : ");
        if ($choix < $randome) {
            echo "Le nombre à deviner est plus grand que " . $choix . "il reste " . ($tentative - $i) . " tentatives.\n";
        } else if ($choix > $randome) {
            echo "Le nombre à deviner est plus petit que " . $choix . "il reste " . ($tentative - $i) . " tentatives.\n";
        } else {
            echo "Bravo ! Vous avez trouvé le nombre : " . $randome . "il vous reste " . ($tentative - $i) . " tentatives.\n";
        }
    }
    return "Perdu ! Le nombre était " . $randome . ". Tu es un mauvais mentaliste, change de métier.\n";
}
partie($tentative);

//Exercice 17 – Mini inventaire :
$products = [
    [
        "name" => "Clavier",
        "price" => 49.99,
        "stock" => 12
    ],
    [
        "name" => "Souris",
        "price" => 19.90,
        "stock" => 0
    ],
    [
        "name" => "Écran",
        "price" => 189.00,
        "stock" => 5
    ]
];

function displayProducts(array $products): void {
    foreach ($products as $product) {
        if ($product["stock"] > 0) {
            $dispo = "En stock";
        } else {
            $dispo = "Rupture";
        }
        echo $product["name"] . " - " . number_format($product["price"], 2) . " € - " . $dispo . "\n";
    }
}
displayProducts($products);

//Exercice 18– Panier d'achat :
function calculateStock(array $products): float {
    $total = 0;
    foreach ($products as $product) {
        if ($product["stock"] > 0) {
            $total += $product["price"] * $product["stock"];
        }
    }
    return $total;
}
echo "Valeur totale du stock : " . number_format(calculateStock($products), 2) . " €\n";

//Exercice 19 – Tableau utilisateur :
$users = [
    [
        "firstname" => "Alice",
        "lastname" => "Martin",
        "age" => 25
    ],
    [
        "firstname" => "Lucas",
        "lastname" => "Petit",
        "age" => 17
    ],
    [
        "firstname" => "Emma",
        "lastname" => "Durand",
        "age" => 32
    ]
];

function displayUser(array $users): void {
    foreach ($users as $user) {
        if ($user["age"] >= 18) {
            $dispo = "Majeur";
        } else {
            $dispo = "Mineur";
        }
        echo $user["firstname"] . " " . $user["lastname"] . " - " . $user["age"] . " ans - " . $dispo . "\n";
    }
}
displayUser($users);

//Exercice 20 :
