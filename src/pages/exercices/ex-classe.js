import "/src/style.css";
console.log("Exercice POO (Classes JS)");

 class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
        this._nom = nom; //! 3 attributes en In mode
        this._poids = poids;
        this._taille = taille;
        this._imc = this.calculImc(); //! attribute en OUT mode (à calculer) c'est + easy pour affichage
    }
    //* Le calcul
    calculImc() {
        //* Format simple (2 nombres après le . ou la ,)
        // return this._poids/(this._taille*this._taille);
        // return (this._poids/Math.pow(this._taille, 2)).toFixed(2);
        return (this._poids / this._taille ** 2).toFixed(2);
    }
    //* Affichage
    display() {
        console.log(`Bonjour,${this._nom} (${this._poids} kg, ${this._taille} M) a un IMC de: ${this._imc}`);
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),//{nom:blblb, taill:efsdkjfh , poid:rozieurozeiur}
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    new Imc("LOLO de la Vega", 400, 1.55)
];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((uneInstanceDeClassIMC) => uneInstanceDeClassIMC.display());






