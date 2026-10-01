<template>
    <section class="mx-auto max-w-2xl p-4 md:p-8">
        <div class="mb-6 text-center">
            <h1 class="text-3xl font-bold text-primary">Quelle météo aujourd'hui ?</h1>
            <p class="mt-2 opacity-70">Recherchez une ville pour consulter sa météo actuelle.</p>
        </div>

        <div class="card border border-secondary/50 bg-base-100 shadow-2xl">
            <div class="card-body">
                <form class="space-y-4" @submit.prevent="searchCities">
                    <label class="form-control" for="city-search">
                        <span class="label-text mb-2 font-semibold">Ville</span>
                        <input id="city-search" v-model="query" class="input input-bordered w-full" type="search"
                            placeholder="Paris, Tokyo..." autocomplete="off" required @input="searchCities" />
                    </label>

                    <div v-if="errorMessage" class="alert alert-error" role="alert">{{ errorMessage }}</div>

                    <ul v-if="searchResults.length" class="menu rounded-box border border-base-300 bg-base-100 p-2">
                        <li v-for="city in searchResults" :key="city.id ?? `${city.name}-${city.latitude}-${city.longitude}`">
                            <button type="button" @click="selectCity(city)">
                                <span class="font-semibold">{{ city.name }}</span>
                                <span v-if="city.admin || city.country" class="text-sm opacity-70">
                                    {{ [city.admin, city.country].filter(Boolean).join(', ') }}
                                </span>
                            </button>
                        </li>
                    </ul>

                    <div v-if="isSearching" class="text-sm opacity-70">Recherche en cours...</div>
                </form>

                <div v-if="weather && selectedCity" class="mt-6 rounded-box bg-primary p-6 text-primary-content">
                    <h2 class="text-2xl font-bold">{{ selectedCity.name }}<span v-if="selectedCity.country">, {{ selectedCity.country }}</span></h2>
                    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p class="text-sm opacity-80">Température actuelle</p>
                            <p class="text-4xl font-bold">{{ weather.current.temperature_2m }} °C</p>
                        </div>
                        <div>
                            <p class="text-sm opacity-80">Vent</p>
                            <p class="text-4xl font-bold">{{ weather.current.wind_speed_10m }} km/h</p>
                        </div>
                    </div>
                </div>

                <div v-if="isLoadingWeather" class="mt-6 text-center opacity-70">Chargement de la météo...</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import WeatherService from '../services/WeatherService.js';

const query = ref('');
const searchResults = ref([]);
const selectedCity = ref(null);
const weather = ref(null);
const errorMessage = ref('');
const isSearching = ref(false);
const isLoadingWeather = ref(false);
let searchRequest = 0;

async function searchCities() {
    const currentRequest = ++searchRequest;
    selectedCity.value = null;
    weather.value = null;
    errorMessage.value = '';

    if (!query.value.trim()) {
        searchResults.value = [];
        return;
    }

    isSearching.value = true;
    try {
        const results = await WeatherService.searchCities(query.value);
        if (currentRequest === searchRequest) searchResults.value = results;
    } catch {
        errorMessage.value = 'Impossible de rechercher cette ville.';
    } finally {
        if (currentRequest === searchRequest) isSearching.value = false;
    }
}

async function selectCity(city) {
    selectedCity.value = city;
    query.value = city.name;
    searchResults.value = [];
    errorMessage.value = '';
    isLoadingWeather.value = true;
    try {
        weather.value = await WeatherService.getWeather(city.latitude, city.longitude);
    } catch {
        errorMessage.value = 'Impossible de récupérer la météo de cette ville.';
    } finally {
        isLoadingWeather.value = false;
    }
}
</script>