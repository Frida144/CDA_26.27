import "/src/style.css";

    const body = document.querySelector("body");
    const timeoutID = setTimeout(() => {
    body.style.backgroundColor = "lightpink";
    body.style.transition = "background-color 1s ease";
}, 2000);