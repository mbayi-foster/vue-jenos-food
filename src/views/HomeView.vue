<template>
 <!--  <div class="mb-6 flex text-end justify-end items-end w-xs">
    <select id="month" class="block w-full p-2 border border-gray-300 rounded-md">
      <option value="01">Janvier</option>
      <option value="02">Février</option>
      <option value="03">Mars</option>
      <option value="04">Avril</option>
      <option value="05">Mai</option>
      <option value="06">Juin</option>
      <option value="07">Juillet</option>
      <option value="08">Août</option>
      <option value="09">Septembre</option>
      <option value="10">Octobre</option>
      <option value="11">Novembre</option>
      <option value="12">Décembre</option>
    </select>
  </div> -->

  <!-- Card des stats -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Carte Utilisateurs -->
    <RouterLink to="#" title="Nombre total d'utilisateur enregistré sur Jenos-Food" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold">Utilisateurs</h2>
      <p class="text-3xl font-bold text-gray-700">{{ stats.users }}
      </p>
    </RouterLink>
    <!-- Carte Taux de Conversion -->
    <RouterLink to="/livreurs" title="Taux de conversion des utilisateurs" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold">Livreurs</h2>
      <p class="text-3xl font-bold text-gray-700">{{ stats.livreurs }}</p>
    </RouterLink>
    <!-- Carte Plats -->
    <router-link to="/plats" title="Nombre total des plats enregistré sur Jenos-Food"
      class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold">Plats</h2>
      <p class="text-3xl font-bold text-gray-700">{{ stats.plats }}</p>
    </router-link>

    <!-- Carte Commandes -->
    <router-link to="/commandes" title="Nombre total des comamndes passées sur Jenos-Food"
      class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold">Commandes</h2>
      <p class="text-3xl font-bold text-gray-700">{{ stats.commandes }}</p>
    </router-link>


  </div>

  <!-- Chart des stats -->
  <div class="my-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Commandes par Mois</h2>
        </div>
        <canvas ref="chartCanvas"></canvas>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Commandes par Mois</h2>
        </div>
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </div>

  <!-- Liste -->
  <div class="my-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Top 10 des plats par mois</h2>
          <div class="relative inline-block text-left">
            <button @click="toggleMenu" class="flex items-center">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
              <div @click="changeYear(2023)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2023</div>
              <div @click="changeYear(2022)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2022</div>
              <div @click="changeYear(2021)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2021</div>
            </div>
          </div>
        </div>
        <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span
              class="font-semibold text-gray-900 dark:text-white">70</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with <span
              class="font-semibold text-gray-900 dark:text-white">63</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
        </ol>

      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Top 10 des visiteurs par mois</h2>
          <div class="relative inline-block text-left">
            <button @click="toggleMenu" class="flex items-center">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
              <div @click="changeYear(2023)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2023</div>
              <div @click="changeYear(2022)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2022</div>
              <div @click="changeYear(2021)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">2021</div>
            </div>
          </div>
        </div>
        <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span
              class="font-semibold text-gray-900 dark:text-white">70</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with <span
              class="font-semibold text-gray-900 dark:text-white">63</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span
              class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
        </ol>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Chart, registerables } from 'chart.js';
import api from '@/api/api'
import { RouterLink } from 'vue-router';

const stats = ref({
  users: 0,
  plats: 0,
  commandes: 0,
  livreurs: 0
})

const datasets = ref([]);
const labelsCommande = ref([]);



Chart.register(...registerables);

const chartCanvas = ref(null);
const isMenuOpen = ref(false);
let chartInstance = null;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeYear = (year) => {
  console.log(`Changer l'année à: ${year}`);
  // Ici, vous pouvez ajouter la logique pour mettre à jour les données du graphique en fonction de l'année sélectionnée.
  isMenuOpen.value = false; // Ferme le menu après sélection
};



const fetchItems = async () => {
  labelsCommande.value = []; // Réinitialiser les labels
  datasets.value = [];
  try {
    const res = await api.get(`/dashboard`);
    stats.value.users = res.users
    stats.value.livreurs = res.livreurs
    stats.value.plats = res.plats
    stats.value.commandes = res.commandes


    res.stats.forEach(item => {
      labelsCommande.value.push(`${item.month} ${item.year}`); // Format "Mois Année"
      datasets.value.push(item.count);

    });

  } catch (error) {
    console.log(error)
  }

}





/* chart commandes */
const renderChart = () => {
  const ctx = chartCanvas.value.getContext('2d');

  // Exemple de données
  const data = {
    labels: labelsCommande.value,
    datasets: [
      {
        label: 'Commandes',
        data: datasets.value,
        borderWidth: 1,

      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  chartInstance = new Chart(ctx, config);
};

onMounted(async () => {
  await fetchItems()
  renderChart();

});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});


</script>