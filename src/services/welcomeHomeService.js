export function fetchQuotes(domElementSelector) {
    let mainTitle = document.querySelector(domElementSelector);

    // Vérifie si l'URL est celle de la page d'accueil
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // Data va récupérer la promesse de l'appel API
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => {
                console.log(response);
                console.log(response.ok);
                console.log(response.status);

                // Vérifie si la réponse est OK (statut 200-299)
                if (!response.ok) {
                    // Lance une erreur pour être capturée par le .catch()
                    throw new Error(`Erreur HTTP: Statut ${response.status}`);
                }

                // Transforme la réponse en objet JS (retourne une nouvelle promesse)
                return response.json();
            })
            .then(dataTransformed => {
                console.log(dataTransformed);
                // Affiche la blague dans l'élément DOM
                mainTitle.innerText = dataTransformed.value;
            })
            .catch(error => {
                // Gère toutes les erreurs (réseau, réponse non-OK, erreur de parsing JSON)
                console.error("Erreur lors de la récupération ou du traitement de la blague :", error);
                // Optionnel : afficher un message d'erreur dans le DOM
                // if (mainTitle) {
                //     mainTitle.innerText = "Désolé, impossible de charger la blague de Chuck Norris. 😔";
                // }
            });
    }
}