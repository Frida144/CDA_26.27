import { Route } from "@angular/router";

export const LESSONS_ROUTES : Route[] = [
  {
    path:'text-interpolation',
    loadComponent:()=> import('./text-interpolation-lesson/text-interpolation-lesson').then(m=>m.TextInterpolationLesson)
  }
]
