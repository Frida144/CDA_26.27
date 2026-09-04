import "/src/style.css";
const leTitre = document.querySelector("#main-title");
const lesButtons = document.querySelectorAll(".button-style");
console.log(lesButtons);

lesButtons[0].addEventListener("click", function () {
  leTitre.classList.add("maSuperClasseCss");
});
lesButtons[1].addEventListener("click", function () {
  leTitre.classList.remove("maSuperClasseCss");
});
lesButtons[2].addEventListener("click", function () {
  leTitre.classList.toggle("maSuperClasseCss");
});
