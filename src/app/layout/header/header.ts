import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogOutButton } from '../../composants/log-out-button/log-out-button';
import { toSignal } from '@angular/core/rxjs-interop';
import { Auth, authState } from '@angular/fire/auth';
@Component({
  imports: [RouterLink,LogOutButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private auth = inject(Auth);

  // user() contiendra l'objet Firebase User si connecté, ou null/undefined si déconnecté
  user = toSignal(authState(this.auth));
}