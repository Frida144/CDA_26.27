import { Route } from "@angular/router";

export const EXERCICES_ROUTES : Route[] = [
  {
    path:'text-interpolation',
    loadComponent:()=> import('./text-interpolation-exercice/text-interpolation-exercice').then(m=>m.TextInterpolationExercice)
  },
  {
    path:'attribute-binding',
    loadComponent:()=> import('./attributes-binding-exercice/attributes-binding-exercice').then(m=>m.AttributesBindingExercice)
  }
]
