import { Route } from "@angular/router";

export const EXERCICES_ROUTES : Route[] = [
  {
    path:'text-interpolation',
    loadComponent:()=> import('./text-interpolation-exercice/text-interpolation-exercice').then(m=>m.TextInterpolationExercice)
  },
  {
    path:'attribute-binding',
    loadComponent:()=> import('./attributes-binding-exercice/attributes-binding-exercice').then(m=>m.AttributesBindingExercice)
  },
  {
    path:'event-binding',
    loadComponent:()=> import('./event-binding-exercice/event-binding-exercice').then(m=>m.EventBindingExercice)
  },
  {
    path:'tp-directives',
    loadComponent:()=> import('./tp-directives/tp-directives').then(m=>m.TpDirectives)
  },
  {
    path:'parent-exercice',
    loadComponent:()=> import('./parent-exercice/parent-exercice').then(m=>m.ParentExercice)
  },
  {
    path:'user-profile-api',
    loadComponent:()=> import('./user-profile-api/user-profile-api').then(m=>m.UserProfileApi)
  },
  {
    path:'observables-exercice',
    loadComponent:()=> import('./observables-simple/observables-simple').then(m=>m.ObservableSimpleExercice)
  },
  {
    path:'signals-exercice',
    loadComponent:()=> import('./signals/signals').then(m=>m.Signals)
  },
  {
    path:'signals-formulaire',
    loadComponent:()=> import('./signals-formulaire/signals-formulaire').then(m=>m.SignalsFormulaire)
  },
  {
    path:'task-list-fb-exercice',
    loadComponent:()=> import('./task-list-fb-exercice/task-list-fb-exercice').then(m=>m.TaskListFbExercice)
  }
]
