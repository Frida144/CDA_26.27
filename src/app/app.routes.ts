import { Routes } from '@angular/router';

export const routes: Routes = [
  //Route par défaut si on va juste sur / alors on redirige vers HOME
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'about',
    loadComponent : ()=> import('./pages/about/about').then(m=>m.About)
  },
  {
    path:'home',
        loadComponent : ()=> import('./pages/home/home').then(m=>m.Home)
  },
  {
    path:'contact',
    loadComponent : ()=> import('./pages/contact/contact').then(m=>m.Contact)
  },
  {
    path:'**',
        loadComponent : ()=> import('./pages/not-found/not-found').then(m=>m.NotFound)
  },

];
