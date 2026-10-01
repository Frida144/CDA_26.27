<template>
    <section class="container mx-auto space-y-8 p-4 md:p-8">
        <div>
            <h1 class="text-3xl font-bold text-primary">Mes voyages</h1>
            <p class="mt-2 opacity-70">Ajoutez une destination et retrouvez vos voyages ici.</p>
        </div>
        <button @click="logout" class="btn btn-primary">Deconnexion</button>

        <AddTrip
            :search-results="searchResults"
            :is-submitting="isSubmitting"
            @search="searchCities"
            @add-trip="addTrip"
        />

        <p v-if="errorMessage" class="alert alert-error">{{ errorMessage }}</p>

        <div v-if="trips.length" class="grid gap-6 md:grid-cols-2">
            <TripCard
                v-for="trip in trips"
                :key="trip.id"
                :trip="trip"
                :weather="weatherByTripId[trip.id]"
                @delete="deleteTrip"
            />
        </div>

        <p v-else class="rounded-box bg-base-200 p-6 text-center opacity-70">
            Aucun voyage ajouté pour le moment.
        </p>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase.js';
import { useRouter } from 'vue-router';
import AddTrip from '../../components/AddTrip.vue';
import TripCard from '../../components/TripCard.vue';
import TripService from '../../services/TripService.js';
import WeatherService from '../../services/WeatherService.js';

interface City {
    id?: number;
    name: string;
    latitude: number;
    longitude: number;
    country?: string;
    admin1?: string;
}

interface Trip {
    id: string;
    destination: City;
    startDate: string;
    texte?: string;
}

interface Weather {
    current: {
        temperature_2m: number;
        wind_speed_10m: number;
    };
}

const searchResults = ref<City[]>([]);
const trips = ref<Trip[]>([]);
const weatherByTripId = reactive<Record<string, Weather | null>>({});
const isSubmitting = ref(false);
const errorMessage = ref('');
const router = useRouter();
let searchRequest = 0;
let stopListeningToAuth: (() => void) | null = null;
let stopListeningToTrips: (() => void) | null = null;
let currentUserId: string | null = null;

function getStorageKey(userId: string): string {
    return `trips_${userId}`;
}

function saveTripsToLocalStorage(): void {
    if (!currentUserId) {
        return;
    }

    localStorage.setItem(getStorageKey(currentUserId), JSON.stringify(trips.value));
}

function loadTripsFromLocalStorage(userId: string): void {
    const savedTrips = localStorage.getItem(getStorageKey(userId));

    if (!savedTrips) {
        return;
    }

    try {
        trips.value = JSON.parse(savedTrips) as Trip[];
        trips.value.forEach(loadTripWeather);
    } catch {
        localStorage.removeItem(getStorageKey(userId));
    }
}

onMounted(() => {
    stopListeningToAuth = onAuthStateChanged(auth, (user) => {
        stopListeningToTrips?.();
        stopListeningToTrips = null;

        if (!user) {
            currentUserId = null;
            trips.value = [];
            return;
        }

        currentUserId = user.uid;
        errorMessage.value = '';
        loadTripsFromLocalStorage(user.uid);

        stopListeningToTrips = TripService.getUserTrips(user.uid, (snapshot: {
            val: () => Record<string, Omit<Trip, 'id'>> | null;
        }) => {
            const storedTrips = snapshot.val() ?? {};
            trips.value = Object.entries(storedTrips).map(([id, trip]) => ({
                id,
                ...trip,
            }));
            saveTripsToLocalStorage();
            trips.value.forEach(loadTripWeather);
        });
    });
});

onUnmounted(() => {
    stopListeningToTrips?.();
    stopListeningToAuth?.();
});

async function searchCities(query: string): Promise<void> {
    const requestId = ++searchRequest;

    if (!query.trim()) {
        searchResults.value = [];
        return;
    }

    try {
        const results = await WeatherService.searchCities(query);
        if (requestId === searchRequest) {
            searchResults.value = results;
        }
    } catch {
        searchResults.value = [];
    }
}

async function loadTripWeather(trip: Trip): Promise<void> {
    try {
        weatherByTripId[trip.id] = await WeatherService.getWeather(
            trip.destination.latitude,
            trip.destination.longitude,
        );
    } catch {
        weatherByTripId[trip.id] = null;
    }
}

async function addTrip(tripData: Omit<Trip, 'id'>): Promise<void> {
    isSubmitting.value = true;

    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('Utilisateur non connecté');
        }

        const tripReference = await TripService.addTrip(user.uid, tripData);
        if (!tripReference.key) {
            throw new Error('Identifiant du voyage manquant');
        }

        const trip: Trip = {
            ...tripData,
            id: tripReference.key,
        };

        searchResults.value = [];
        trips.value = [...trips.value, trip];
        saveTripsToLocalStorage();
        await loadTripWeather(trip);
        errorMessage.value = '';
    } catch {
        errorMessage.value = 'Impossible d’enregistrer ce voyage.';
    } finally {
        isSubmitting.value = false;
    }
}

async function deleteTrip(tripId: string): Promise<void> {
    const user = auth.currentUser;

    if (!user) {
        errorMessage.value = 'Vous devez être connecté pour supprimer un voyage.';
        return;
    }

    try {
        await TripService.deleteTrip(user.uid, tripId);
        trips.value = trips.value.filter((trip) => trip.id !== tripId);
        saveTripsToLocalStorage();
        delete weatherByTripId[tripId];
        errorMessage.value = '';
    } catch {
        errorMessage.value = 'Impossible de supprimer ce voyage.';
    }
}

async function logout(): Promise<void> {
    try {
        await signOut(auth);
        await router.push('/login-weather-account');
    } catch {
        errorMessage.value = 'Erreur lors de la déconnexion.';
    }
}
</script>