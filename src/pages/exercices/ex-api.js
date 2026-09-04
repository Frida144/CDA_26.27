import "/src/style.css";
// de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// async function pokemonApiContact(){
const pokemonApiContact = async () => {
    const pokemonListe = document.getElementById('pokeList');
    // console.log(pokemonListe);
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    // console.log('pokemonDataTransformed',pokemonDataTransformed);
    // console.log('pokemonDataTransformed',pokemonDataTransformed.results);
    // console.log('pokemonDataTransformed',pokemonDataTransformed.results[0]);
    // console.log(pokemonDataTransformed.results[0].name);
    // OU stntaxe en mode tableau associatif 
    console.log(pokemonDataTransformed.results[0]['name']);
    // Boucle pour parcourir le tableau results dans la réponse
    pokemonDataTransformed.results.forEach(unPokemon => {
        let listElement = document.createElement('h3');
        listElement.innerText = unPokemon.name;
        pokemonListe.append(listElement);
    });
};
pokemonApiContact();


