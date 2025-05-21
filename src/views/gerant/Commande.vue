<template>
<!--  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center">Détails de la Commande</h1>
        <p class="mt-4"><strong>Numéro de Ticket:</strong> 14-05-25-T4BVE1</p>
        <p><strong>Statut:</strong> En attente de confirmation</p>

        <h2 class="mt-6 text-lg font-semibold">Suivi de la Commande</h2>
        <div class="flex justify-between mt-2">
            <div class="flex items-center">
                <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                <span class="ml-2">Commande Confirmée</span>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span class="ml-2">En préparation</span>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span class="ml-2">En livraison</span>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span class="ml-2">Livrée</span>
            </div>
        </div>

        <h2 class="mt-6 text-xl font-semibold">Plats Commandés</h2>
        <div class="flex items-start mt-4 mb-4">
            <img class="w-24 h-auto mr-4" src="https://jenos-food.s3.amazonaws.com/plats/6824c2ffaa39b_pizza.jpeg" alt="Pizza">
            <div>
                <h3 class="text-lg font-bold">Pizza</h3>
                <p>Prix: 22,500 FC</p>
                <p>Quantité: 1</p>
            </div>
        </div>
        <div class="flex items-start mb-4">
            <img class="w-24 h-auto mr-4" src="https://jenos-food.s3.amazonaws.com/plats/6824c37450c1e_coca_cola.jpeg" alt="Coca Cola">
            <div>
                <h3 class="text-lg font-bold">Coca Cola</h3>
                <p>Prix: 5,000 FC</p>
                <p>Quantité: 1</p>
            </div>
        </div>

        <div class="mt-6 text-right">
            <p class="text-lg font-bold"><strong>Total Commande:</strong> 27,500 FC</p>
            <p><strong>Coût de Livraison:</strong> 5,000 FC</p>
            <p class="text-xl font-bold"><strong>Total Final:</strong> 32,500 FC</p>
        </div>

        <div class="mt-6">
            <h2 class="text-xl font-semibold">Adresse de Livraison</h2>
            <p>Adresse: Epolo27</p>
            <p>Commune: Barumbu</p>
        </div>

        <div class="mt-6">
            <h2 class="text-lg font-semibold">Livreur Assigné</h2>
            <p><strong>Nom:</strong> John Doe</p>
            <p><strong>Prénom:</strong> John</p>
            <p><strong>Numéro WhatsApp:</strong> +243 123 456 789</p>
        </div>

        <div class="mt-6">
            <h2 class="text-lg font-semibold">Attribuer la Commande au Livreur</h2>
            <form class="mt-4" onsubmit="return false;">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Sélectionner un Livreur</label>
                    <select class="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option value="">Choisissez un livreur</option>
                        <option value="1">John Doe - +243 123 456 789</option>
                        <option value="2">Jane Smith - +243 987 654 321</option>
                        <option value="3">Bob Martin - +243 456 789 123</option>
                    </select>
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Attribuer</button>
            </form>
        </div>

        <div class="mt-6 text-right">
            <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Valider la Commande</button>
        </div>

        <div class="mt-6">
            <h2 class="text-lg font-semibold">Suivi de Livraison</h2>
            <div class="relative">
                <div class="flex justify-between">
                    <div class="w-1/4 text-center">Préparation</div>
                    <div class="w-1/4 text-center">En Route</div>
                    <div class="w-1/4 text-center">Livré</div>
                </div>
                <div class="flex">
                    <div class="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
                    <div class="w-1/4 text-center">
                        <div class="w-4 h-4 bg-green-500 rounded-full mx-auto"></div>
                    </div>
                    <div class="w-1/4 text-center">
                        <div class="w-4 h-4 bg-gray-400 rounded-full mx-auto"></div>
                    </div>
                    <div class="w-1/4 text-center">
                        <div class="w-4 h-4 bg-gray-400 rounded-full mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center">Détails de la Commande</h1>
        <p class="mt-4"><strong>Numéro de Ticket :</strong> 14-05-25-T4BVE1</p>
        <p><strong>Date :</strong> 14-05-25-T4BVE1</p>
        <p><strong>Statut :</strong> En attente de confirmation</p>
        <div class="mt-6 text-right">
            <button class="rounded-full px-2 bg-orange-500 text-white font-bold py-2">Valider la Commande</button>
        </div>
        <h2 class="mt-6 text-lg font-semibold">Livraison</h2>
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4 h-7">
              <div class="bg-gray-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 25%">
              En préparation
              </div>
              </div>
        <h2 class="mt-6 text-xl font-semibold">Plats Commandés</h2>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div class="flex items-start mt-4 mb-4">
            <img class="w-24 h-auto mr-4" src="https://jenos-food.s3.amazonaws.com/plats/6824c2ffaa39b_pizza.jpeg" alt="Pizza">
            <div>
                <h3 class="text-lg font-bold">Pizza</h3>
                <p>Prix: 22,500 FC</p>
                <p>Quantité: 1</p>
            </div>
        </div>
        <div class="flex items-start mb-4">
            <img class="w-24 h-auto mr-4" src="https://jenos-food.s3.amazonaws.com/plats/6824c37450c1e_coca_cola.jpeg" alt="Coca Cola">
            <div>
                <h3 class="text-lg font-bold">Coca Cola</h3>
                <p>Prix: 5,000 FC</p>
                <p>Quantité: 1</p>
            </div>
        </div>
       </div>

        <div class="mt-6 text-right">
            <p class="text-lg font-bold"><strong>Total Commande:</strong> 27,500 FC</p>
            <p><strong>Coût de Livraison:</strong> 5,000 FC</p>
            <p class="text-xl font-bold"><strong>Total Final:</strong> 32,500 FC</p>
        </div>

        <div class="mt-6">
            <h2 class="text-xl font-semibold">Adresse de Livraison</h2>
            <p>Adresse: Epolo27</p>
            <p>Commune: Barumbu</p>
        </div>

        <div class="mt-6">
            <h2 class="text-lg font-semibold">Attribuer la Commande au Livreur</h2>
            <form class="mt-4" method="get">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Sélectionner un Livreur</label>
                    <select class="mt-1 block w-full border border-gray-300 rounded-md p-2" name="deliverer">
                        <option value="">Choisissez un livreur</option>
                        <option value="1">John Doe - +243 123 456 789</option>
                        <option value="2">Jane Smith - +243 987 654 321</option>
                        <option value="3">Bob Martin - +243 456 789 123</option>
                    </select>
                </div>
                <button type="submit" class="rounded-full px-2 bg-orange-500 text-white font-bold py-2">Attribuer</button>
            </form>
        </div>

         <div class="mt-6">
            <h2 class="text-lg font-semibold">Rapports de Livraison</h2>
            <div class="bg-gray-100 p-4 rounded-md mt-2">
                <p><strong>Rapport 1:</strong> Problème de circulation sur la route principale.</p>
                <p><strong>Rapport 2:</strong> Client absent à l'adresse de livraison.</p>
                <p><strong>Rapport 3:</strong> Embouteillage important près du centre-ville.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
              id: {
                            type: Number
              }
})
</script>

   <style>
        .progress {
            position: relative;
            height: 20px;
            border-radius: 5px;
            overflow: hidden;
            background-color: #e5e7eb; /* gray-300 */
        }
        .progress-bar {
            height: 100%;
            transition: width 0.5s ease;
            background-color: #4caf50; /* green-500 */
            text-align: center;
            color: white;
            line-height: 20px; /* Align text vertically */
        }
    </style>