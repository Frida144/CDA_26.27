import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildExercice } from '../child-exercice/child-exercice';

@Component({
  imports: [FormsModule, ChildExercice],
  selector: 'app-parent-exercice',
  styleUrl: './parent-exercice.css',
  templateUrl: './parent-exercice.html',
})
export class ParentExercice {
  texteParent = '';
  conteurParent = 0;
}
