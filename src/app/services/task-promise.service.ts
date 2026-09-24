import { Injectable } from '@angular/core';
import { Database, ref, set, push, update, remove, get } from '@angular/fire/database';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskPromiseService {
  private tasksRef: ReturnType<typeof ref>;

  constructor(private db: Database) {
    // Ref pour viser la BDD puis plus précisément dans la """"table"""" tasks
    this.tasksRef = ref(this.db, 'tasks');
  }

  // Récupérer une fois la liste des tâches
  async getTasks(): Promise<Task[]> {
    const snapshot = await get(this.tasksRef); // Récupération unique des données
    const data = snapshot.val();
    // On peut faire un map sur les clés de l'objet
    return data ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
    // Ou alors passer par un map sur les clés et les valeurs de l'objet avec .entries( )
    // return data ? Object.entries(data).map(([id, task]) => ({ id, ...task as Task })) : [];
  }

  // Ajouter une tâche
  async addTask(task: Task): Promise<void> {
    const newTaskRef = push(this.tasksRef);
    await set(newTaskRef, task); // Ajout de la tâche
  }

  // Mettre à jour une tâche
  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('La tâche doit avoir un ID pour être mise à jour.');
    }
    // Une ref pour viser dans la """table"""" des tasks, sur un ID particulier
    const taskRef = ref(this.db, `tasks/${task.id}`);
    const { id: _id, ...taskData } = task;
    await update(taskRef, taskData); // Mise à jour de la tâche
  }

  // Supprimer une tâche
  async deleteTask(taskId: string): Promise<void> {
    //! On pourra rajouter un if si on a pas d'iD (c'est grave)
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await remove(taskRef); // Suppression de la tâche
  }
}