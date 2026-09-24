import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserApiService } from '../../../services/user-api.service';
@Component({
  selector: 'app-user-profile-api',
  imports: [NgIf],
  templateUrl: './user-profile-api.html',
  styleUrl: './user-profile-api.css'
})
export class UserProfileApi {
  user: any = null; // Pour stocker les données de l'utilisateur
  isLoading = true; // Pour gérer l'état de chargement
  constructor(private userApiService: UserApiService) {}

  async ngOnInit() {
    try {
      this.user = await this.userApiService.getRandomUser();
    } catch (error) {
      console.error('Erreur :', error);
    } finally {
      this.isLoading = false; // Désactiver le chargement une fois terminé
    }
  }
}