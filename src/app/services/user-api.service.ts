import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible dans toute l'application
})
export class UserApiService {
  private apiUrl = 'https://randomuser.me/api/'; // URL de l'API pour récupérer un utilisateur aléatoire

  // Méthode pour récupérer un utilisateur aléatoire
  async getRandomUser(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      return data.results[0]; // Retourne le premier utilisateur du tableau results
    } catch (error) {
      console.error('Erreur API :', error);
      throw error;
    }
  }
}