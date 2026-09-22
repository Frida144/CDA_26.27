import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditional-rendering',
  imports: [NgIf,FormsModule],
  templateUrl: './conditional-rendering.html',
  styleUrl: './conditional-rendering.css'
})
export class ConditionalRendering {
  constructor(){
    console.log('constructor ');

    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }
  listFriendsInputText:string="";
  listFriendsAuth:boolean=false;
  listFriendsCreationStatus:string="🥶 Aucun ami ..."

  onAddingFriends():void{
    this.listFriendsAuth = true
    // this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !"
  }

  onUpdateFriendsList(eventInput:any):void{
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !";
    console.log(eventInput);
    console.log(eventInput.target.value);
    // console.log((<HTMLInputElement>eventInput.target).value);
    this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
    //! autre syntaxe de typage avec as
    // this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }
}