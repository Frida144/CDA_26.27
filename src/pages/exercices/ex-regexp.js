import "/src/style.css";
const loginInput = document.querySelector("#login-mail");

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

// ----------------Écoutage clavier sur l'input mail ----------------

loginInput.addEventListener("keyup", () => {
  // ici Faudra faire un check de ce qu'on tape dans l'email avec notre regex du mail
  // Si c'est OK background de l'input en vert
  // Sinon background en rouge
  if (!regexMail.test(loginInput.value)) {
    loginInput.style.backgroundColor = "red";
  } else {
    loginInput.style.backgroundColor = "chartreuse";
  }
});
// ----------------Écoutage clavier sur l'input le mot de passe ----------------

const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

const passwordInput = document.querySelector("#login-password");
const textControl = document.querySelector("#control");

passwordInput.addEventListener("keyup", () => {
  textControl.innerText = "";

  if (passwordInput.value.length < 6) {
    textControl.innerText += "le mot de passe trop court";
  } else {
    if (!charDecimal.test(passwordInput.value)) {
      textControl.innerText += "le mot de passe doit contenir 1 chiffre";
    } else {
      if (!charSpecial.test(passwordInput.value)) {
        textControl.innerText += "le mot de passe doit contenir 1 caractère spécial";
      } else {
        textControl.innerText += "le mot de passe est correct";
      }
    }
  }
  }
);
