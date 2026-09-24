import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
@Component({
  imports: [],
  selector: 'app-log-out-button',
  styleUrl: './log-out-button.css',
  templateUrl: './log-out-button.html',
})
export class LogOutButton {
  private auth = inject(Auth);
  private router = inject(Router);

  async onLogout(): Promise<void> {
    try {
      await signOut(this.auth);
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}