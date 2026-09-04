import "/src/style.css";

const teamMembers = [
  {
    id: 1,
    name: "Alice Dupont",
    role: "Développeuse Frontend",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Passionnée par React et les interfaces utilisateur modernes.",
    skills: ["React", "TypeScript", "CSS3", "Vite"],
    experience: "5 ans d'expérience",
    location: "Paris, France",
    email: "alice@example.com"
  },
  {
    id: 2,
    name: "Marc Lefevre",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "Architecture backend et supervision technique des projets.",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    experience: "8 ans d'expérience",
    location: "Lyon, France",
    email: "marc@example.com"
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "UX/UI Designer",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Création d'expériences utilisateur intuitives et esthétiques.",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    experience: "6 ans d'expérience",
    location: "Marseille, France",
    email: "sophie@example.com"
  },
  {
    id: 4,
    name: "Julien Bernard",
    role: "Développeur Full Stack",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Expert en développement web et mobile, passionné par les nouvelles technologies.",
    skills: ["JavaScript", "Vue.js", "Node.js", "MongoDB"],
    experience: "7 ans d'expérience",
    location: "Toulouse, France",
    email: "julien@example.com"
  },
  {
    id: 5,
    name: "Camille Dubois",
    role: "Data Scientist",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Analyse de données et création de modèles prédictifs pour l'optimisation des processus.",
    skills: ["Python", "R", "Machine Learning", "Data Visualization"],
    experience: "4 ans d'expérience",
    location: "Bordeaux, France",
    email: "camille@example.com"
  },
  {
    id: 6,
    name: "Thomas Girard",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "Automatisation des déploiements et gestion des infrastructures cloud.",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    experience: "5 ans d'expérience",
    location: "Nantes, France",
    email: "thomas@example.com"
  }
];

function renderTeam(members) {
  const container = document.getElementById("team-grid");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.className = "card bg-base-200 shadow-xl";

    card.innerHTML = `
      <div class="card-body items-center text-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="${member.avatar}" alt="${member.name}" />
          </div>
        </div>

        <h2 class="card-title mt-2">${member.name}</h2>
        <div class="badge badge-primary">${member.role}</div>

        <p class="text-sm mt-2">${member.bio}</p>

        <div class="flex flex-wrap gap-1 justify-center mt-2">
          ${member.skills.map(skill => `<span class="badge badge-outline">${skill}</span>`).join("")}
        </div>

        <div class="text-xs text-gray-500 mt-2">
          <p>${member.experience}</p>
          <p>${member.location}</p>
        </div>

        <div class="card-actions mt-4">
          <a href="mailto:${member.email}" class="btn btn-sm btn-primary">Contact</a>
          <button class="btn btn-sm btn-outline">Profil</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderTeam(teamMembers);



