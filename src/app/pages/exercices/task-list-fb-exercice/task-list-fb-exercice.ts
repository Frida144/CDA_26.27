import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task';
import { TaskPromiseService } from '../../../services/task-promise.service';

@Component({
  selector: 'app-task-list-fb-exercice',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './task-list-fb-exercice.css',
  template: `
    <div class="p-6 mx-auto max-w-xl">
      <h2 class="text-3xl font-bold text-center text-primary mb-6">
        Liste des tâches
      </h2>

      <!-- Formulaire d'ajout -->
      <form (ngSubmit)="addTask()" class="flex gap-3 mb-8">
        <input
          [(ngModel)]="newTaskTitle"
          name="taskTitle"
          type="text"
          placeholder="Nouvelle tâche"
          class="input input-bordered w-full"
        />
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!newTaskTitle().trim()"
        >
          Ajouter
        </button>
      </form>

      <!-- Liste des tâches avec @for et @empty -->
      <ul class="space-y-3">
        @for (task of tasks(); track task.id) {
          <li class="bg-base-100 shadow-lg p-4 rounded-lg">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <span class="text-lg font-medium grow">
                {{ task.title }}
              </span>

              <!-- Remplacement de ngClass par du class binding classique -->
              <span
                class="badge badge-lg font-semibold"
                [class.badge-success]="task.status === 'completed'"
                [class.badge-warning]="task.status === 'pending'"
              >
                {{ task.status }}
              </span>

              <div class="flex gap-2">
                <button
                  class="btn btn-info btn-sm"
                  (click)="toggleStatus(task)"
                >
                  Statut
                </button>
                <button
                  class="btn btn-error btn-sm"
                  (click)="deleteTask(task.id!)"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </li>
        } @empty {
          <!-- Remplacement du *ngIf="tasks.length === 0" -->
          <div class="text-center text-neutral-content opacity-70 mt-8">
            Aucune tâche dans la liste. Ajoutez-en une !
          </div>
        }
      </ul>
    </div>
  `
})
export class TaskListFbExercice implements OnInit {
  private taskService = inject(TaskPromiseService);

  // 1. Déclaration des Signals
  tasks = signal<Task[]>([]);
  newTaskTitle = signal<string>('');

  async ngOnInit(): Promise<void> {
    await this.loadTasks();
  }

  // 2. Chargement des données
  async loadTasks(): Promise<void> {
    try {
      const data = await this.taskService.getTasks();
      this.tasks.set(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  }

  // 3. Ajout d'une tâche
  async addTask(): Promise<void> {
    const title = this.newTaskTitle().trim();
    if (!title) return;

    const newTask: Task = {
      title,
      status: 'pending',
    };

    try {
      await this.taskService.addTask(newTask);
      this.newTaskTitle.set(''); // Réinitialisation du signal
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de l’ajout de la tâche :', error);
    }
  }

  // 4. Suppression
  async deleteTask(taskId: string): Promise<void> {
    try {
      await this.taskService.deleteTask(taskId);
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }

  // 5. Modification du statut
  async toggleStatus(task: Task): Promise<void> {
    const updatedTask: Task = {
      ...task,
      status: task.status === 'pending' ? 'completed' : 'pending',
    };

    try {
      await this.taskService.updateTask(updatedTask);
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut :', error);
    }
  }
}