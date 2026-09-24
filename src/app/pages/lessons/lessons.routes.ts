import { Route } from "@angular/router";

export const LESSONS_ROUTES : Route[] = [
  {
    path:'text-interpolation',
    loadComponent:()=> import('./text-interpolation-lesson/text-interpolation-lesson').then(m=>m.TextInterpolationLesson)
  },
  {
    path:'event-binding',
    loadComponent:()=> import('./event-binding/event-binding').then(m=>m.EventBinding)
  },
  {
    path:'setup',
    loadComponent:()=> import('./setup/setup').then(m=>m.Setup)
  },
  {
    path:'property-binding',
    loadComponent:()=> import('./property-binding/property-binding').then(m=>m.PropertyBinding)
  },
  {
    path:'conditional-rendering',
    loadComponent:()=> import('./conditional-rendering/conditional-rendering').then(m=>m.ConditionalRendering)
  },
  {
    path:'list-rendering',
    loadComponent:()=> import('./list-rendering/list-rendering').then(m=>m.ListRendering)
  },
  {
    path:'parent',
    loadComponent:()=> import('./parent/parent').then(m=>m.Parent)
  },
  {
    path:'pipes',
    loadComponent:()=> import('./pipes/pipes').then(m=>m.Pipes)
  },
  {
    path:'observables',
    loadComponent:()=> import('./observables/observables').then(m=>m.Observables)
  },
  {
    path:'observables-lesson',
    loadComponent:()=> import('./observables-lesson/observables-lesson').then(m=>m.ObservablesLesson)
  },
  {
    path:'signals',
    loadComponent:()=> import('./signals/signals').then(m=>m.Signals)
  },
  {
    path:'register',
    loadComponent:()=> import('./register/register').then(m=>m.Register)
  },
]
