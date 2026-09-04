//!---------------------------------------------------------------------------
//!----------------------- EXERCICE Variables --------------------------------
//!---------------------------------------------------------------------------
//! EXO 1 VARIABLES         //TODO: On doit se débrouiller pour créer une variable,
//TODO: Lui Assigner une valeur (genre un nombre ou une chaine de caractère)
//TODO: On doit afficher cette Variable dans la console du navigateur

//Déclaration
let monNumFetiche;
// Assignation
monNumFetiche = 77;
// Déclaration + Assignation
let maVariable = 11;
let uneAutreVariable = "Steven Seagal";
let monTabloClient = ["Client1", maVariable, 109];

let uneVariableObjet = {
  // ↓ Propriétés de l'objet (auxquelles on assigne
  //des valeur mais avec les : pas le =)
  ChuckNorris: 99,
  StevenSIgal: 100,
  BruceWillis: "DieHard",
  unePropriete: "lol",
};

// Fonciton Anonyme : On ne donne pas de nom à la fonction
// On peut l'assigner à une variable
// On peut l'appeler directement
let maFonctionHello = function () {
  console.log("Coucou");
};

console.log(maVariable);
console.log("-------TYPE OF -------");
console.log(typeof maVariable);
console.log(typeof 123);
console.log(typeof "yoyoyo");
console.log(uneAutreVariable);
console.log(monTabloClient);
console.log(monTabloClient[1]);
console.log(uneVariableObjet);
console.log(uneVariableObjet.BruceWillis); //Notation en point
console.log(uneVariableObjet.unePropriete); //Notation en point
console.log(uneVariableObjet["ChuckNorris"]); //tableau associatif
console.log(uneVariableObjet["unePropriete"]); //tableau associatif
console.log("HELLO WORLD");
maFonctionHello();
console.log(maFonctionHello);
console.log(0.1 + 0.2);

//? Pas de gestion erreur donc code bloquant
// prenom;
// alert('Ce message ne s\'affichera pas');

//? Mieux avec ambiance try catch (finaly)
//? Non bloquant mais avec gestion erreur

try{
        prenom
        alert('Bonjour');
}catch(err){
        alert(`Erreur Détectée ALERTE STOPPEZ TOUT:
        -----------
        Le Nom de l'erreur
        ${err.name}
        -----------
        Le Message de l'erreur :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
        }
        finally{
                alert(`Ce message s'affiche correctement`);
        }

