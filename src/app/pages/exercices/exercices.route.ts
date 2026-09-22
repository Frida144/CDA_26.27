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
  }
]
