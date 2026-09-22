import { Route } from "@angular/router";

export const EVALUATIONS_ROUTES : Route[] = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'tp-comp-comm'
  },
  {
    path:'active-user',
    loadComponent:()=> import('./active-user/active-user').then(m=>m.ActiveUser)
  },
  {
    path:'tp-comp-comm',
    loadComponent:()=> import('./tp-comp-comm/tp-comp-comm').then(m=>m.TpCompComm)
  },
  {
    path:'user-data',
    loadComponent:()=> import('./user-data/user-data').then(m=>m.UserData)
  }
];
