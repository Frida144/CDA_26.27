<template>
    <div class="min-h-[80vh] flex items-center justify-center p-4">
        <div class="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold text-center justify-center mb-2">
                    Créer un compte
                </h2>
                <p class="text-sm text-center opacity-70 mb-4">
                    Rejoignez-nous en remplissant le formulaire ci-dessous.
                </p>

                <!-- Message d'erreur -->
                <div v-if="errorMessage" class="alert alert-error text-sm py-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ errorMessage }}</span>
                </div>
                
                <form @submit.prevent="handleRegister" class="space-y-4">
                    <!-- Champ Email -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold">Adresse Email</span>
                        </label>
                        <input v-model="email" type="email" placeholder="exemple@email.com"
                            class="input input-bordered w-full" required />
                    </div>

                    <!-- Champ Mot de passe -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold">Mot de passe</span>
                        </label>
                        <input v-model="password" type="password" placeholder="••••••••"
                            class="input input-bordered w-full" required />
                    </div>

                    <!-- Champ Confirmation du Mot de passe -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-semibold">Confirmer le mot de passe</span>
                        </label>
                        <input v-model="confirmPassword" type="password" placeholder="••••••••"
                            class="input input-bordered w-full" required />
                    </div>

                    <!-- Bouton de validation -->
                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary w-full" :disabled="isLoading">
                            <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
                            <span v-else>S'inscrire</span>
                            
                        </button>
                    </div>
                </form>

                <div class="divider">OU</div>

                <p class="text-center text-sm">
                    Vous avez déjà un compte ?
                    <RouterLink to="/login-weather-account" class="link link-primary font-semibold">
                        Se connecter
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useRouter } from 'vue-router';
import { auth } from '../../../firebase.js';

const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
const errorMessage = ref<string>('');
const isLoading = ref<boolean>(false);

async function handleRegister(): Promise<void> {
    errorMessage.value = '';

    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Les mots de passe ne correspondent pas.';
        return;
    }

    if (password.value.length < 6) {
        errorMessage.value = 'Le mot de passe doit contenir au moins 6 caractères.';
        return;
    }

    isLoading.value = true;

    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
    } catch (error: unknown) {
        if (error instanceof FirebaseError || (error && typeof error === 'object' && 'code' in error)) {
            const errorCode = error instanceof FirebaseError ? error.code : error.code;

            switch (errorCode) {
                case 'auth/email-already-in-use':
                    errorMessage.value = 'Cette adresse email est déjà utilisée.';
                    break;
                case 'auth/invalid-email':
                    errorMessage.value = 'Adresse email invalide.';
                    break;
                case 'auth/weak-password':
                    errorMessage.value = 'Le mot de passe est trop faible.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage.value = 'La création de compte par email n’est pas activée dans Firebase.';
                    break;
                default:
                    errorMessage.value = 'Une erreur est survenue lors de l\'inscription.';
            }
        } else {
            errorMessage.value = 'Une erreur inattendue est survenue.';
        }
        return;
    } finally {
        isLoading.value = false;
    }

    try {
        await router.push({ name: 'dashboardTrips' });
    } catch {
        errorMessage.value = 'Compte créé, mais la page de destination est indisponible.';
    }
}
</script>
