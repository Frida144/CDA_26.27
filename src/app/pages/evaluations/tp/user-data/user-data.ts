import { Component,Output,EventEmitter } from '@angular/core';
import { User } from '../user.interface/user.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  // templateUrl: './user-data.html',
  template:`
<section class="p-4 mx-auto max-w-sm">
  <form  class="card bg-warning shadow-lg p-6 text-neutral-content">
    <h3 class="card-title text-2xl font-bold mb-4">USER DATA</h3>

    <label class="label mb-2">
      <span class="label-text text-neutral-content font-medium">Formulaire d'édition :</span>
    </label>

    <div class="form-control mb-4">
      <input
        [(ngModel)]="enteredName"
        name="name"
        type="text"
        class="input input-sm input-bordered w-full text-base-content"
        placeholder="votre nom"
      />
    </div>

    <div class="form-control mb-6">
      <input
        [(ngModel)]="enteredAge"
        name="age"
        type="number"
        class="input input-sm input-bordered w-full text-base-content"
        placeholder="votre age"
      />
    </div>

    <div class="card-actions justify-end">
      <button (click)="submitData()" class="btn btn-outline btn-neutral w-full">
        MAJ des Data
      </button>
    </div>
  </form>
</section>
`,
  styleUrl: './user-data.css'
})
export class UserData {
  enteredName: string = '';
  enteredAge: number = 0;
  // !Déclaration de notre event
  @Output() userDataEmitUpdate = new EventEmitter<User>();

  submitData(){
    const userData: User = {
      name: this.enteredName,
      age: this.enteredAge || 0
    };
    //! Emmission de notre event quand on click
    this.userDataEmitUpdate.emit(userData);
  }
}