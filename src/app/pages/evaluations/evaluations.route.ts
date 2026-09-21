import { Route } from "@angular/router";

export const EVALUATIONS_ROUTES : Route[] = [
  {
    path:'cool-eval',
    loadComponent:()=> import('./cool-eval/cool-eval').then(m=>m.CoolEval)
  }
]
