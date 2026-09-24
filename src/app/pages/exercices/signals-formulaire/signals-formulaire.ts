import { Component, signal, computed, effect } from '@angular/core';
// Expressions régulières de validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!\%*?&]{8,}$/;
const PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/;

@Component({
  imports: [],
  selector: 'app-signals-formulaire',
  styleUrl: './signals-formulaire.css',
  templateUrl: './signals-formulaire.html',
})
export class SignalsFormulaire {
  // 1. SIGNALS D'ÉTAT
  email = signal<string>('');
  password = signal<string>('');
  phone = signal<string>('');
  showPassword = signal<boolean>(false);

  // Tracking de l'interaction utilisateur
  // Des booléen qui permettront de gérer les classes CSS rouge ou vert (success ou error)
  emailTouched = signal<boolean>(false);
  passwordTouched = signal<boolean>(false);
  phoneTouched = signal<boolean>(false);

  // State de soumission
  isSubmitted = signal<boolean>(false);

  // 2. VALIDATIONS DÉRIVÉES (COMPUTED)
  isEmailValid = computed(() => EMAIL_REGEX.test(this.email().trim()));
  isPasswordValid = computed(() => PASSWORD_REGEX.test(this.password()));
  isPhoneValid = computed(() => PHONE_REGEX.test(this.phone().trim()));

  isFormValid = computed(() =>
    this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid()
  );

  // Calcul dynamique de la force du mot de passe
  passwordScore = computed(() => {
    const pwd = this.password();
    if (!pwd) return 0;

    // A chaque passage dasn les IF ca augmente le score
    let score = 0;
    // Test sur longueur
    if (pwd.length >= 8) score++;
    // Test ca contient une lettre (min ou maj)
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    // Test si chiffre
    if (/\d/.test(pwd)) score++;
    // Test du caractère spécial
    if (/[@$!%*?&]/.test(pwd)) score++;

    return score;
  });

  passwordStrengthLabel = computed(() => {
    switch (this.passwordScore()) {
      case 1: return { text: 'Très faible', class: 'progress-error' };
      case 2: return { text: 'Moyen', class: 'progress-warning' };
      case 3: return { text: 'Fort', class: 'progress-info' };
      case 4: return { text: 'Très fort', class: 'progress-success' };
      default: return { text: 'Invalide', class: 'progress-error' };
    }
  });

  constructor() {
    // 3. EFFECT : Journalisation de l'état de validité
    effect(() => {
      console.log(`[FORM LOG] Formulaire valide : ${this.isFormValid()}`);
    });
  }

  // 4. MÉTHODES D'ACTION
  onInput(targetSignal: ReturnType<typeof signal<string>>, touchedSignal: ReturnType<typeof signal<boolean>>, event: Event): void {
    const input = event.target as HTMLInputElement;
    targetSignal.set(input.value);
    touchedSignal.set(true);
  }

  toggleShowPassword(): void {
    this.showPassword.update((show) => !show);
  }

  submitForm(event: Event): void {
    event.preventDefault();
    this.emailTouched.set(true);
    this.passwordTouched.set(true);
    this.phoneTouched.set(true);

    if (this.isFormValid()) {
      this.isSubmitted.set(true);
      console.log('Données soumises :', {
        email: this.email(),
        phone: this.phone(),
      });
    }
  }

  resetForm(): void {
    this.email.set('');
    this.password.set('');
    this.phone.set('');
    this.emailTouched.set(false);
    this.passwordTouched.set(false);
    this.phoneTouched.set(false);
    this.isSubmitted.set(false);
  }
}