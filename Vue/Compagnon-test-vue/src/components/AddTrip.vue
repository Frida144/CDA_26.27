<template>
    <div class="mx-auto max-w-md p-4 md:p-8">
    <h1 class="text-3xl font-bold text-center mb-6 text-primary">
      Formulaire de création
    </h1>

    <div class="card bg-base-100 shadow-2xl border border-secondary/50">
      <div class="card-body">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="form-control">
            <label class="label" for="destination">
              <span class="label-text font-semibold">Destination</span>
            </label>
            <input
              id="destination"
              v-model="destinationQuery"
              type="search"
              class="input input-bordered w-full"
              placeholder="Rechercher une ville"
              autocomplete="off"
              required
              @input="handleSearch"
            />

            <ul v-if="props.searchResults.length" class="menu bg-base-100 border border-base-300 rounded-box mt-2">
              <li v-for="city in props.searchResults" :key="city.id ?? `${city.name}-${city.latitude}-${city.longitude}`">
                <button type="button" @click="selectCity(city)">
                  {{ city.name }}<span v-if="city.country">, {{ city.country }}</span>
                </button>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="form-control">
              <label class="label" for="start-date">
                <span class="label-text font-semibold">Date de départ</span>
              </label>
              <input id="start-date" v-model="startDate" type="date" class="input input-bordered w-full" required />
            </div>
          </div>
            <div class="form-control">
              <label class="label" for="end-date">
                <span class="label-text font-semibold">Note</span>
              </label>
              <input id="end-date" v-model="texte" type="text" class="input input-bordered w-full"/>
            </div>

          <button type="submit" class="btn btn-primary w-full" :disabled="props.isSubmitting">
            <span v-if="props.isSubmitting" class="loading loading-spinner loading-sm"></span>
            <span v-else>Ajouter le voyage</span>
          </button>
        </form>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface City {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
}

interface Trip {
  destination: City;
  startDate: string;
texte?: string;
}

const props = defineProps<{
  searchResults: City[];
  isSubmitting: boolean;
}>();

const emit = defineEmits<{
  search: [query: string];
  addTrip: [trip: Trip];
}>();

const destinationQuery = ref('');
const selectedCity = ref<City | null>(null);
const startDate = ref('');
const texte = ref('');

function handleSearch(): void {
  selectedCity.value = null;
  emit('search', destinationQuery.value);
}

function selectCity(city: City): void {
  selectedCity.value = city;
  destinationQuery.value = city.name;
}

function handleSubmit(): void {
  if (!selectedCity.value) {
    return;
    
  }

  emit('addTrip', {
    destination: selectedCity.value,
    startDate: startDate.value,
    texte: texte.value,
  });
}
</script>