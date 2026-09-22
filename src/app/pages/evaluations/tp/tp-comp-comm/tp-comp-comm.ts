import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
// import { OneFriend } from './one-friend/one-friend';
import { FormsModule } from '@angular/forms';
import { User } from '../user.interface/user.interface';
import { UserData } from '../user-data/user-data';
import { ActiveUser } from '../active-user/active-user';

@Component({
  selector: 'app-tp-comp-comm',
  imports: [FormsModule,UserData,ActiveUser],
  // templateUrl: './tp-comp-comm.html',
  template:`

<div class="p-6 mx-auto mt-8 max-w-xl bg-success-200 rounded-xl shadow-2xl">
  <div class="w-full">
    <h1 class="text-3xl font-bold text-center text-primary mb-6">
      TP : Component Communication
    </h1>

    <div class="card bg-base-100 shadow-lg mb-6">
      <div class="card-body">
        <h2 class="card-title text-xl text-secondary">
          Utilisateur Actif (ActiveUser)
        </h2>
        <app-active-user [activeUser]="oneUser"></app-active-user>
      </div>
    </div>

    <div class="divider">Mise à jour</div>

    <div class="card bg-base-100 shadow-lg">
      <div class="card-body">
        <h2 class="card-title text-xl text-secondary">
          Formulaire de Données (UserData)
        </h2>
        <app-user-data
          (userDataEmitUpdate)="updateUser($event)"
        ></app-user-data>
      </div>
    </div>
  </div>
</div>
      `,
  styleUrl: './tp-comp-comm.css'
})
export class TpCompComm {

  oneUser: User = {
    name: 'AZERTYUIOP',
    age: 45
  }

  updateUser(eventUser: User) {
    console.log(eventUser);
    this.oneUser.name = eventUser.name;
    this.oneUser.age = eventUser.age;
  }
}