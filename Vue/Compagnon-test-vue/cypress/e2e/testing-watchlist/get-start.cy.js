describe("Tests de l'application Counter", () => {
  // Afficher la page WatchList
  it("devrait afficher la page WatchList correctement", () => {
    cy.visit("http://localhost:5173/exListRendering");
    cy.contains("h2", "WatchList").should("be.visible");
    cy.title().should("eq", "compagnon-test-vue");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').should(
      "be.visible",
    );
    cy.get("button").contains("Ajouter").should("be.visible");
    cy.get("ul").should("be.visible");
  });

  //Ajouter un film
  it("devrait permettre de saisir un film dans le champ de saisie", () => {
    cy.visit("http://localhost:5173/exListRendering");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').type("Digger");
    cy.get("button").contains("Ajouter").click();
    cy.get("ul").should("be.visible");
  });

  //Ajouter plusieurs films
  it("devrait permettre d'ajouter plusieurs films à la liste", () => {
    cy.visit("http://localhost:5173/exListRendering");
    const films = ["Digger", "Inception", "Interstellar"];
    films.forEach((film) => {
      cy.get('input[placeholder="Entrez le nom d\'un film"]').type(film);
      cy.get("button").contains("Ajouter").click();
    });
    cy.get("li.badge").should("have.length", films.length);
    films.forEach((film) => {
      cy.contains("li.badge", film).should("be.visible");
    });
  });

  //Supprimer un film
  it("devrait permettre de supprimer un film de la liste", () => {
    cy.visit("http://localhost:5173/exListRendering");
    const films = ["Digger", "Inception", "Interstellar"];
    films.forEach((film) => {
      cy.get('input[placeholder="Entrez le nom d\'un film"]').type(film);
      cy.get("button").contains("Ajouter").click();
    });
    cy.contains("li.badge", "Inception").click();
    cy.contains("li.badge", "Inception").should("not.exist");
    cy.get("li.badge").should("have.length", films.length - 1);
  });

  // Refuser un film vide
  it("ne devrait pas ajouter un film avec un champ vide", () => {
    cy.visit("http://localhost:5173/exListRendering");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').clear();
    cy.get("button").contains("Ajouter").click();
    cy.get("li.badge").should("not.exist");
    cy.contains("h2", "Aucun Films à Voir ?").should("be.visible");
  });

  // Refuser un film composé uniquement d'espaces
  it("ne devrait pas ajouter un film composé uniquement d'espaces", () => {
    cy.visit("http://localhost:5173/exListRendering");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').type("   ");
    cy.get("button").contains("Ajouter").click();
    cy.get("li.badge").should("not.exist");
    cy.contains("h2", "Aucun Films à Voir ?").should("be.visible");
  });

  // Accepter les caractères spéciaux
  it("devrait ajouter un film avec des caractères spéciaux", () => {
    const film = "L'été à Paris !";
    cy.visit("http://localhost:5173/exListRendering");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').type(film);
    cy.get("button").contains("Ajouter").click();
    cy.contains("li.badge", film).should("be.visible");
  });

  // Conserver la liste après actualisation
  it("devrait conserver un film après actualisation", () => {
    const film = "Dune";
    cy.visit("http://localhost:5173/exListRendering");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').type(film);
    cy.get("button").contains("Ajouter").click();
    cy.reload();
    cy.contains("li.badge", film).should("be.visible");
  });

  // Affichage responsive sur mobile
  it("devrait afficher la WatchList sur mobile", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:5173/exListRendering");
    cy.contains("h2", "WatchList").should("be.visible");
    cy.get('input[placeholder="Entrez le nom d\'un film"]').should("be.visible");
    cy.get("button").contains("Ajouter").should("be.visible");
  });
});
