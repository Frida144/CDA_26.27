import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-child-exercice',
  styleUrl: './child-exercice.css',
  templateUrl: './child-exercice.html',
})
export class ChildExercice {
  texte = model('');
  conteur = model(0);
}
