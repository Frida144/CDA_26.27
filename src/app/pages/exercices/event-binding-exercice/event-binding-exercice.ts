import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-binding-exercice',
  imports: [FormsModule],
  templateUrl: './event-binding-exercice.html',
  styleUrl: './event-binding-exercice.css',
})
export class EventBindingExercice {
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
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !"
  }

  onUpdateFriendsList(eventInput:any):void{
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !";
    console.log(eventInput);
    console.log(eventInput.target.value);
    // console.log((<HTMLInputElement>eventInput.target).value);
    // this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
    //! autre syntaxe de typage avec as
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }
}
