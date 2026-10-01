<template>
  <header class="header relative z-50 bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
    <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />

    <!-- overlay de fermeture -->
    <label
      for="navbar-1-toggle"
      class="fixed inset-0 z-40 hidden bg-black/40 max-lg:peer-checked:block"
    ></label>

    <div class="collapse-title navbar">
      <div class="navbar-start">
        <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
          <svg
            aria-label="Menu"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <button class="btn btn-ghost text-xl">Frida.vue</button>
      </div>

      <!-- menu desktop -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/lessonIntroduction" class="btn btn-ghost justify-start">Accueil</router-link></li>
          <li>
            <details>
              <summary>Leçons</summary>
              <ul class="card z-50 w-fit bg-base-100 shadow-xl">
                <li><router-link to="/lessonSetup" class="btn btn-ghost justify-start">Configuration</router-link></li>
                <li><router-link to="/lessonSyntax" class="btn btn-ghost justify-start">Syntaxe</router-link></li>
                <li><router-link to="/lessonTextInterpolation" class="btn btn-ghost justify-start">Interpolation de texte</router-link></li>
                <li><router-link to="/lessonAttributeBinding" class="btn btn-ghost justify-start">Liaison d'attributs</router-link></li>
                <li><router-link to="/lessonEventBinding" class="btn btn-ghost justify-start">Liaison d'événements</router-link></li>
                <li><router-link to="/lessonTwoWayBinding" class="btn btn-ghost justify-start">Liaison bidirectionnelle</router-link></li>
                <li><router-link to="/lessonDynamicStyling" class="btn btn-ghost justify-start">Style dynamique</router-link></li>
                <li><router-link to="/lessonConditionalRendering" class="btn btn-ghost justify-start">Rendu conditionnel</router-link></li>
                <li><router-link to="/lessonLifecycle" class="btn btn-ghost justify-start">Cycle de vie</router-link></li>
                <li><router-link to="/lessonListRendering" class="btn btn-ghost justify-start">Rendu de listes</router-link></li>
                <li><router-link to="/lessonComputedProperties" class="btn btn-ghost justify-start">Propriétés calculées</router-link></li>
                <li><router-link to="/lessonWatchers" class="btn btn-ghost justify-start">Observateurs</router-link></li>
                <li><router-link to="/lessonProps" class="btn btn-ghost justify-start">Props</router-link></li>
                <li><router-link to="/lessonEmit" class="btn btn-ghost justify-start">Emit</router-link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Tp</summary>
              <ul class="card z-50 w-fit bg-base-100 shadow-xl">
                <li><router-link to="/about" class="btn btn-ghost justify-start">À propos</router-link></li>
                <li><router-link to="/dataBinding" class="btn btn-ghost justify-start">Liaison de données</router-link></li>
                <li><router-link to="/reactivite" class="btn btn-ghost justify-start">Réactivité</router-link></li>
                <li><router-link to="/productCatalog" class="btn btn-ghost justify-start">Catalogue de produits</router-link></li>
                <li><router-link to="/taskManager" class="btn btn-ghost justify-start">Gestionnaire de tâches</router-link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Exercices</summary>
              <ul class="card z-50 w-fit bg-base-100 shadow-xl">
                <li><router-link to="/exInterpolation" class="btn btn-ghost justify-start">Interpolation</router-link></li>
                <li><router-link to="/exEventBinding" class="btn btn-ghost justify-start">Liaison d'événements</router-link></li>
                <li><router-link to="/exDynamicStyling" class="btn btn-ghost justify-start">Style dynamique</router-link></li>
                <li><router-link to="/exConditionalRendering" class="btn btn-ghost justify-start">Rendu conditionnel</router-link></li>
                <li><router-link to="/exCrashTestComputer" class="btn btn-ghost justify-start">Test de crash</router-link></li>
                <li><router-link to="/exListRendering" class="btn btn-ghost justify-start">Rendu de listes</router-link></li>
                <li><router-link to="/exLifecycle" class="btn btn-ghost justify-start">Cycle de vie</router-link></li>
                <li><router-link to="/exProps" class="btn btn-ghost justify-start">Props</router-link></li>
                <li><router-link to="/exEmit" class="btn btn-ghost justify-start">Emit</router-link></li>
                <li><router-link to="/firebaseArticlesManager" class="btn btn-ghost justify-start">Articles Manager (Firebase)</router-link></li>
                <li><router-link to="/projetYesevent" class="btn btn-ghost justify-start">Projet YesEvent</router-link></li>
                <li><router-link to="/exPiniaCounter" class="btn btn-ghost justify-start">Compteur Pinia</router-link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Authentification</summary>
              <ul class="card z-50 w-fit bg-base-100 shadow-xl">
                <li><router-link to="/register" class="btn btn-ghost justify-start">Inscription</router-link></li>
                <li><router-link to="/profiles" class="btn btn-ghost justify-start">Profils</router-link></li>
                <li><router-link to="/messagecard" class="btn btn-ghost justify-start">Message Card</router-link></li>

              </ul>
            </details>
          </li>
          <li>
          <details>
            <summary>Weather Travel App</summary>
            <ul>
              <li><router-link to="/weather-services">Recherche de services météo</router-link></li>
              <li><router-link to="/create-weather-account">Tableau de bord</router-link></li>
            </ul>
          </details>
        </li>
        </ul>
      </div>

      <div class="navbar-end">
        <input type="text" placeholder="Search" class="input w-64 lg:w-auto" />
      </div>
    </div>

    <!-- panneau mobile -->
    <nav
      class="fixed top-0 left-0 z-50 h-full w-72 max-w-[80%] -translate-x-full
             overflow-y-auto bg-base-100 shadow-xl transition-transform duration-300
             peer-checked:translate-x-0 lg:hidden"
    >
      <ul class="menu p-4">
        <li><router-link to="/lessonIntroduction" class="justify-start">Accueil</router-link></li>

        <li>
          <details>
            <summary>Leçons</summary>
            <ul>
              <li><router-link to="/lessonSetup">Configuration</router-link></li>
              <li><router-link to="/lessonSyntax">Syntaxe</router-link></li>
              <li><router-link to="/lessonTextInterpolation">Interpolation de texte</router-link></li>
              <li><router-link to="/lessonAttributeBinding">Liaison d'attributs</router-link></li>
              <li><router-link to="/lessonEventBinding">Liaison d'événements</router-link></li>
              <li><router-link to="/lessonTwoWayBinding">Liaison bidirectionnelle</router-link></li>
              <li><router-link to="/lessonDynamicStyling">Style dynamique</router-link></li>
              <li><router-link to="/lessonConditionalRendering">Rendu conditionnel</router-link></li>
              <li><router-link to="/lessonLifecycle">Cycle de vie</router-link></li>
              <li><router-link to="/lessonListRendering">Rendu de listes</router-link></li>
              <li><router-link to="/lessonComputedProperties">Propriétés calculées</router-link></li>
              <li><router-link to="/lessonWatchers">Observateurs</router-link></li>
              <li><router-link to="/lessonProps">Props</router-link></li>
              <li><router-link to="/lessonEmit">Emit</router-link></li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Tp</summary>
            <ul>
              <li><router-link to="/about">À propos</router-link></li>
              <li><router-link to="/dataBinding">Liaison de données</router-link></li>
              <li><router-link to="/reactivite">Réactivité</router-link></li>
              <li><router-link to="/productCatalog">Catalogue de produits</router-link></li>
              <li><router-link to="/taskManager">Gestionnaire de tâches</router-link></li>

            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Exercices</summary>
            <ul>
              <li><router-link to="/exInterpolation">Interpolation</router-link></li>
              <li><router-link to="/exEventBinding">Liaison d'événements</router-link></li>
              <li><router-link to="/exDynamicStyling">Style dynamique</router-link></li>
              <li><router-link to="/exConditionalRendering">Rendu conditionnel</router-link></li>
              <li><router-link to="/exCrashTestComputer">Test de crash</router-link></li>
              <li><router-link to="/exListRendering">Rendu de listes</router-link></li>
              <li><router-link to="/exLifecycle">Cycle de vie</router-link></li>
              <li><router-link to="/exProps">Props</router-link></li>
              <li><router-link to="/exEmit">Emit</router-link></li>
              <li><router-link to="/firebaseArticlesManager">Articles Manager (Firebase)</router-link></li>
              <li><router-link to="/projetYesevent" class="btn btn-ghost justify-start">Projet YesEvent</router-link></li>
              <li><router-link to="/exPiniaCounter" class="btn btn-ghost justify-start">Compteur Pinia</router-link></li>

            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Authentification</summary>
            <ul>
              <li><router-link to="/register">Inscription</router-link></li>
              <li><router-link to="/profiles">Profils</router-link></li>
              <li><router-link to="/messagecard">Message Card</router-link></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Weather Travel App</summary>
            <ul>
              <li><router-link to="/weather-services">Recherche de services météo</router-link></li>
              <li><router-link to="/create-weather-account">Tableau de bord</router-link></li>

            </ul>
          </details>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="css"></style>