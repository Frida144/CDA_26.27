//import './style.css'

import { fetchQuotes } from "./services/welcomeHomeService.js";
fetchQuotes('#daily-quote');

// ? Classe User (Le moule à gateau)
class User {
    constructor(paramName, paramAge, paramCity) {
        this.name = paramName;
        this.age = paramAge;
        this.city = paramCity;
    }
}
// Une instance de la classe user (un exemplaire)
let nouvoUser = new User('John', 30, 'New York');
console.log('nouvoUser',nouvoUser);

