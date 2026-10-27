<?php
//importer l'autoload
require 'vendor/autoload.php';

$variable = "Texte";
$tab = [10,52,86,332];

//dumper une variable 
var_dump($tab);

//dumper de symfony
dump($variable, $tab);

//dumper de symfony + die
dd($tab);

