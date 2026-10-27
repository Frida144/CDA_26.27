<?php
//Exercice 23 :
echo "Nous sommes le " . date("d/m/Y") . ".\n";

//Exercice 24- Calcul d'âge :
$année_naissance = readline("Saisir votre année de naissance : ");
$année_courante = date("Y");
$âge = $année_courante - $année_naissance;
echo "Vous avez environ $âge ans.\n";

//Exercice 25 - Heure actuelle :
date_default_timezone_set('Europe/Paris');
echo "Il est actuellement " . date("H:i"). "\n";

//Exercice 26 - Date d'anniversaire :
$année_naissance = readline("Saisir votre année de naissance en format   JJ/MM/AAAA : ");
echo "Vous êtes né un " . date("l", strtotime($année_naissance)) . ".\n";
