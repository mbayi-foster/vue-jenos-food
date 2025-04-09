<template>
  <div id="map" style="height: 400px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';

let map;
const markers = ref([]); // Stocker les marqueurs
const bounds = ref({
  lat_max: null,
  lon_max: null,
  lat_min: null,
  lon_min: null,
});

// Fonction pour initialiser la carte
const initMap = () => {
  map = L.map('map').setView([-4.322447, 15.307045], 13); // Coordonnées initiales

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map);

  // Écouteur d'événement pour ajouter un marqueur au clic
  map.on('click', (e) => {
    addMarker(e.latlng);
  });
};

// Méthode pour ajouter un marqueur
const addMarker = (latlng) => {
  if (markers.value.length < 4) {
    L.marker(latlng).addTo(map)
      .bindPopup(`Marqueur ajouté à: ${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}`)
      .openPopup();

    markers.value.push(latlng); // Ajouter les coordonnées à la liste
    updateBounds(latlng); // Mettre à jour les limites

    if (markers.value.length === 4) {
      drawPolygon(); // Dessiner le polygone après 4 marqueurs
    }
  } else {
    console.log("Vous avez déjà ajouté 4 marqueurs !");
  }
};

// Méthode pour mettre à jour les limites
const updateBounds = (latlng) => {
  if (bounds.value.lat_max === null || latlng.lat > bounds.value.lat_max) {
    bounds.value.lat_max = latlng.lat;
  }
  if (bounds.value.lon_max === null || latlng.lng > bounds.value.lon_max) {
    bounds.value.lon_max = latlng.lng;
  }
  if (bounds.value.lat_min === null || latlng.lat < bounds.value.lat_min) {
    bounds.value.lat_min = latlng.lat;
  }
  if (bounds.value.lon_min === null || latlng.lng < bounds.value.lon_min) {
    bounds.value.lon_min = latlng.lng;
  }
};

// Méthode pour dessiner un polygone et afficher les données dans la console
const drawPolygon = () => {
  L.polygon(markers.value).addTo(map)
    .bindPopup('Zone dessinée !')
    .openPopup();

  // Afficher les coordonnées et les limites dans la console
  const coords = markers.value.map(latlng => `(${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)})`);
  console.log(`Coordonnées des marqueurs:\n${coords.join('\n')}`);
  console.log(`Limites:\nLat Max: ${bounds.value.lat_max}\nLon Max: ${bounds.value.lon_max}\nLat Min: ${bounds.value.lat_min}\nLon Min: ${bounds.value.lon_min}`);
};

onMounted(() => {
  initMap();
});
</script>

<style>
@import "leaflet/dist/leaflet.css";
</style>