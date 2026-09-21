import { Routes } from '@angular/router';

export const routes: Routes = [
  //Route par défaut si on va juste sur / alors on redirige vers HOME
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    // Lazy Loading du composant
        loadComponent : ()=> import('./pages/home/home').then(m=>m.Home)
  },
  {
    path:'about',
    loadComponent : ()=> import('./pages/about/about').then(m=>m.About)
  },
  {
    path:'contact',
    loadComponent : ()=> import('./pages/contact/contact').then(m=>m.Contact)
  },
  //! Ici on va importer toutes les routes LESSONS
  {
    path:'lessons',
    loadChildren:()=>import('./pages/lessons/lessons.routes').then(m=>m.LESSONS_ROUTES)
  },
    //! Ici on va importer toutes les routes EXERCICES
  {
    path:'exercices',
    loadChildren:()=>import('./pages/exercices/exercices.route').then(m=>m.EXERCICES_ROUTES)
  },
    //! Ici on va importer toutes les routes EVALUATIONS
  {
    path:'evaluations',
    loadChildren:()=>import('./pages/evaluations/evaluations.route').then(m=>m.EVALUATIONS_ROUTES)
  },

  {
    path:'ex-interpolation',
    loadComponent : ()=>import('./pages/exercices/text-interpolation-exercice/text-interpolation-exercice').then(m=>m.TextInterpolationExercice)
  },
  {
    path:'ex-attribute-binding',
    loadComponent : ()=>import('./pages/exercices/attributes-binding-exercice/attributes-binding-exercice').then(m=>m.AttributesBindingExercice)
  },
  // Gestion des pages non trouvées si on va sur une route non listé dans précédentes alors on va sur un composant notFound
  {
    path:'**',
        loadComponent : ()=> import('./pages/not-found/not-found').then(m=>m.NotFound)
  },

];
