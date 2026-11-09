<?php
// Exécuteur du jeu

// Importer les ressources
require_once './Interfaces/Weapon.php';
require_once './Characters/AbstractCharacter.php';
require_once './Characters/Warrior.php';
require_once './Characters/Thief.php';
require_once './Weapons/Sword.php';
require_once './Weapons/Bow.php';

// Créer un Warrior et un Thief avec leurs armes
$warrior = new Warrior(50, 'Guts', 100, new Sword(30));
$thief = new Thief(10, 'Robin', 100, new Bow(20, 20));


// Faire combattre les deux personnages jusqu'à la victoire de l'un d'eux
$attacker = $warrior;
$target = $thief;

while ($warrior->getHealth() > 0 && $thief->getHealth() > 0) {
    echo $attacker->getName() . " attaque " . $target->getName() . PHP_EOL;
    $attacker->attack($target);
    echo PHP_EOL;

    [$attacker, $target] = [$target, $attacker];

}
// Afficher le vainqueur
$winner = $warrior->getHealth() > 0 ? $warrior : $thief;
echo $winner->getName() . " remporte le combat avec " . $winner->getHealth() . " PV restants !" . PHP_EOL;
