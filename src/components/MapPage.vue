<template>
    <div id="map" style="height: 400px;"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import L from 'leaflet';
  
  // Fonction pour initialiser la carte
  const initMap = () => {
    const map = L.map('map').setView([51.505, -0.09], 13); // Coordonnées initiales
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);
  
    L.marker([51.505, -0.09]).addTo(map) // Ajoute un marqueur
      .bindPopup('Un marqueur sur OpenStreetMap!')
      .openPopup();
  };
  
  // Appeler initMap lorsque le composant est monté
  onMounted(() => {
    initMap();
  });
  </script>
  
  <style>
  @import "leaflet/dist/leaflet.css";
  </style>