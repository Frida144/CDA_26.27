<?php
include 'vendor/autoload.php';
include_once 'database.php';
include_once 'database.php';


try {
    //1 Se connecter à la BDD
    $bdd = connect_bdd();
    //2 écrire la requête SQL
    $sql = "SELECT u.id_user AS id, u.firstname AS prenom, u.lastname AS nom, u.email AS mail FROM `user` AS u
    WHERE u.email = ?
    ORDER BY u.id_user";
    //3 préparation de la requête
    $stmt = $bdd->prepare($sql);
    //4 assignation des paramètres (facultatif)
    $stmt->bindValue(1, "test1@test.com", PDO::PARAM_STR);
    //5 exécution de la requête
    $stmt->execute();
    //récupérer le resultat (fetch / fetchAll) de type SELECT
    $users = $stmt->fetch();
    dd($users);
    //récupérer l'id ajouté en BDD lastinsertId (récupére le dernier ID ajouté) INSERT
} catch (PDOException $e) {
    echo $e->getMessage();
}