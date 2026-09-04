import "/src/style.css";

// Librairie UUID
import { v4 as uuidv4, stringify as uuidStringify, validate as uuidValidate, version as uuidVersion } from 'uuid';

//!--------------- UUID--------------------------------------------------------
const uuidContainer = document.getElementById('uuid-container');
const uuidTextParag = document.getElementById('uuid-text');
const uuidVersionParag = document.getElementById('uuid-version');
const uuidTextValidateParag = document.getElementById('uuid-validate');
const myNewUUID = uuidv4();
console.log(myNewUUID);
uuidTextParag.textContent = 'UUID :' + myNewUUID;
uuidVersionParag.textContent = 'UUID version : ' + uuidVersion(myNewUUID);
uuidTextValidateParag.textContent = 'UUID valide ?: ' + uuidValidate(myNewUUID);

// Librairie Leaflet
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- Correctif pour les icônes par défaut (important avec Webpack/Vite) ---
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// --- Initialisation de la Map ---
const map = L.map('leaflet-container').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'LOL'
}).addTo(map);

// Éléments de base (statiques)
let marker = L.marker([51.5, -0.09]).addTo(map).bindPopup("Marqueur initial");
let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// --- Gestion du clic pour ajouter un marqueur ---

function onMapClick(e) {
    // 1. Création du nouveau marqueur aux coordonnées du clic
    const newMarker = L.marker(e.latlng).addTo(map);
    
    // 2. Ajout d'une popup pour confirmer les coordonnées
    newMarker.bindPopup(`Nouveau marqueur posé à :<br> 
        Lat: ${e.latlng.lat.toFixed(4)} <br> 
        Lng: ${e.latlng.lng.toFixed(4)}`)
    .openPopup();
}

// Activation de l'écouteur d'événement sur la map
map.on('click', onMapClick);

