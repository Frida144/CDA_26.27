<?php
//Exécuteur du jeu

//importer mes ressources
include './Characters/AbstractCharacter.php';
include './Interfaces/Weapon.php';
include './Characters/Warrior.php';
include './Weapons/Sword.php';

//Instancier deux guerriers 
$guts = new Warrior(50, "Guts", 100, new Sword(30));
$griffith = new Warrior(70, "Griffith",50, new Sword(20));

//Faire que $guts attaque $griffith
$guts->attack($griffith);