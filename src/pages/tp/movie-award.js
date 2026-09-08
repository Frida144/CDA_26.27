import "/src/style.css";

const defauldMovies = [
    {
        id: 1,
        title: "Inception",
        vote: 0,
    },
     {
        id: 2,
        title: "The Dark Knight",
        vote: 0,
    },
     {
        id: 3,
        title: "Interstellar",
        vote: 0,
    },
     {
        id: 4,
        title: "Pulp Fiction",
        vote: 0,
    },
     {
        id: 5,
        title: "Parasite",
        vote: 0,
    },
     {
        id: 6,
        title: "Gladiator",
        vote: 0,
    }]


function renderMovieList() {
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = "";
    
    defauldMovies.forEach(movie => {
        const movieElement = document.createElement("article");
        movieElement.className = "card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const movieNumber = document.createElement("p");
        movieNumber.className = "text-sm font-bold uppercase tracking-widest text-primary";
        movieNumber.textContent = ``;

        const movieTitle = document.createElement("h3");
        movieTitle.className = "card-title text-2xl";
        movieTitle.textContent = movie.title;

        const voteCount = document.createElement("p");
        voteCount.className = "text-base-content/70";
        voteCount.textContent = `${movie.vote} vote${movie.vote > 1 ? "s" : ""}`;

        const cardActions = document.createElement("div");
        cardActions.className = "card-actions mt-4 justify-end";

        const voteButton = document.createElement("button");
        voteButton.className = "btn btn-primary w-full sm:w-auto";
        voteButton.type = "button";
        voteButton.textContent = "👍 Vote";
        voteButton.addEventListener("click", () =>{ 
            voteForMovie(movie.id);
            localStorage.setItem("movies", JSON.stringify(defauldMovies));
        });

        cardActions.appendChild(voteButton);
        cardBody.append(movieNumber, movieTitle, voteCount, cardActions);
        movieElement.appendChild(cardBody);
        movieListContainer.appendChild(movieElement);
    });
}
renderMovieList();
function voteForMovie(movieId) {
    const movie = defauldMovies.find(m => m.id === movieId);
    if (movie) {
        movie.vote++;
        renderMovieList();
    }
}

JSON.parse(localStorage.getItem("movies"))?.forEach((movie, index) => {
    defauldMovies[index].vote = movie.vote;
});
renderMovieList();