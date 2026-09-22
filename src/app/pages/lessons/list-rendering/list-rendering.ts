import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyBinding } from '../property-binding/property-binding';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-rendering',
  imports: [PropertyBinding,NgFor,FormsModule],
  templateUrl: './list-rendering.html',
  styleUrl: './list-rendering.css'
})
export class ListRendering {

  inputNameFriend:string=''

   userProfiles  = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },

  ];

  addAFriend(){
    this.userProfiles.push(
      {
      id:Math.random(),
      firstName:this.inputNameFriend,
      lastName:'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    }
  )
  }
}