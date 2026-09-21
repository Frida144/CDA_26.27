import { Component } from '@angular/core';
//Si besoin une ptite interface pour faciliter typage.
interface Student {
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
}

@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
  // 1. String & Number
  courseTitle: string = 'Exercice : Interpolation de texte';
  maxScore: number = 20;
  currentScore: number = 15;

  // 2. Objet typé
  currentStudent: Student = {
    firstName: 'Alexandre',
    lastName: 'Dupont',
    role: 'Dev',
    isActive: false,
  };

  // 3. Tableau (Array)
  skills: string[] = ['Angular 22', 'TypeScript', 'DaisyUI'];

  // 4. Méthode utilisable dans le template
  getFullName(): string {
    return `${this.currentStudent.firstName} ${this.currentStudent.lastName.toUpperCase()}`;
  }
}
