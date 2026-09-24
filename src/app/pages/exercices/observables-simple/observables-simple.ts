import { Component, OnDestroy, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observables-simple',
  styleUrl: './observables-simple.css',
  templateUrl: './observables-simple.html',
})
export class ObservableSimpleExercice {
  // 1. Déclaration des Signals pour l'état du composant
  numbers = signal<number[]>([]);
  paused = signal<boolean>(false);

  private subscription: Subscription | null = null;

  // 2. Définition de la méthode start() pour démarrer le générateur
  // On créer l'interval qui génère des nombres aléatoires à chaque seconde et on s'y abonne
  // On update le tableau numbers avec le nombre généré
  start(): void {
    console.log('Démarrage du générateur...');

    if (!this.subscription) {
      this.subscription = interval(1000).subscribe(() => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        console.log(`Nombre généré : ${randomNum}`);

        // 💡 .update() modifie le signal et notifie Angular IMMÉDIATEMENT
        this.numbers.update((currentNumbers) => [...currentNumbers, randomNum]);
      });
    }
  }

  // 3. Définition de la méthode pauseResume() pour mettre en pause ou en répéter le générateur() pour arrêter le générateur
  // On stoppe le générateur si il est en cours d'exécution
  // On lance le générateur si il est en pause avec start()
  pauseResume(): void {
    // Inversion de l'état du signal paused
    this.paused.update((isPaused) => !isPaused);

    if (this.paused()) {
      this.stopSubscription();
    } else {
      this.start();
    }
  }

  // 4. Définition de la méthode stop() pour arrêter le générateur
  //On utilise stopSubscription et on remet le signal paused à false et le signal numbers à une liste vide
  stop(): void {
    console.log('Arrêt du générateur.');
    this.stopSubscription();

    // 💡 .set() écrase la valeur du signal
    this.numbers.set([]);
    this.paused.set(false);
  }

  // 5. Définition de la méthode stopSubscription() pour faire le désabonnement de la souscription
  // Si la souscription existe, on la désabonne
  stopSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  //On utilise stopSubscription pour arrêter le générateur lors du détruit
  ngOnDestroy(): void {
    this.stopSubscription();
  }
}