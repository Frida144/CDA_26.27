import "/src/style.css";

//Récupération de fetchUser() 
const btn = document.getElementById("btnRandom");

async function fetchUser() {
  btn.disabled = true;
  const originalText = btn.innerHTML;
  btn.innerHTML = `<span class="loading loading-spinner"></span>`;

  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];

    renderUser(user);

  } catch (error) {
    console.error(error);
    document.getElementById("userName").textContent = "Erreur de chargement";
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

//Injection des données dans le DOM
function renderUser(user) {
  document.getElementById("userPhoto").src = user.picture.large;

  document.getElementById("userName").textContent =
    `${user.name.title} ${user.name.first} ${user.name.last}`;

  document.getElementById("userEmail").textContent = user.email;

  document.getElementById("userAddress").textContent =
    `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;

  document.getElementById("userPhone").textContent = user.phone;
}
btn.addEventListener("click", fetchUser);

fetchUser();