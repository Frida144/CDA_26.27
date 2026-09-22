import { Component,Input } from '@angular/core';
import { User } from '../user.interface/user.interface';
@Component({
  selector: 'app-active-user',
  imports: [],
  // templateUrl: './active-user.html',
  template:`
<div class="card w-full shadow-xl bg-info text-info-content-focus mb-6">
  <div class="card-body p-4">
    <h3 class="card-title justify-center text-2xl font-bold text-base-100 mb-0">
      ACTIVE USER
    </h3>

    <div class="flex justify-start items-center p-3 text-sm text-info-content-focus">
      <label class="font-medium">Affichage des donnÃ©es :</label>
    </div>

    <div class="bg-base-100 p-2 rounded-lg mb-2 shadow-inner">
      <h4 class="text-xl font-semibold text-primary text-center">
        {{ activeUser.name }}
      </h4>
    </div>

    <div class="mt-2">
      <h3 class="text-3xl font-extrabold text-base-100 text-center">
        {{ activeUser.age }} ans
      </h3>
    </div>
  </div>
</div>
  `,
  styleUrl: './active-user.css'
})
export class ActiveUser {

  @Input() activeUser!: User;
}