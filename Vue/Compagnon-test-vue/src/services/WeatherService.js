// services/WeatherService.js
const CITY_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

class WeatherService {
    async searchCities(query) {
        const cityQuery = query.trim();

        if (!cityQuery) {
            return [];
        }

        const params = new URLSearchParams({
            name: cityQuery,
            count: "5",
            language: "fr",
            format: "json",
        });
        const response = await fetch(`${CITY_API_URL}?${params}`);

        if (!response.ok) {
            throw new Error("Erreur lors de la recherche des villes");
        }

        const data = await response.json();
        return data.results ?? [];
    }

    async getWeather(latitude, longitude) {
        const params = new URLSearchParams({
            latitude: String(latitude),
            longitude: String(longitude),
            current: "temperature_2m,wind_speed_10m",
            wind_speed_unit: "kmh",
        });
        const response = await fetch(`${WEATHER_API_URL}?${params}`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la météo");
        }

        return response.json();
    }
}

export default new WeatherService();
