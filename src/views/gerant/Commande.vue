<template>
    <div v-if="!load && hasData" class="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center">Détails de la Commande</h1>
        <p class="mt-4"><strong>Numéro de Ticket :</strong>{{ commande.ticket }}</p>
        <p><strong>Date :</strong> {{ dateFormat(commande.created_at) }}</p>
        <p v-if="!commande.status"><strong>Statut :</strong> En attente de confirmation</p>
        <p v-else><strong>Statut :</strong> Commande confirmée</p>
        <div v-if="!commande.status" class="mt-6 text-right">
            <button @click="openOrClose" class="rounded-full px-2 bg-orange-500 text-white font-bold py-2">Valider la
                Commande</button>
        </div>
        <h2 class="mt-6 text-lg font-semibold">Livraison</h2>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4 h-7">
            <div v-if="!commande.status && commande.livraison == 'null'"
                class="bg-pink-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: 25%">
                En attente de confirmation
            </div>
            <div v-else-if="commande.status && commande.livraison == 'null'"
                class="bg-orange-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: 50%">
                En attente de livraison
            </div>
            <div v-else-if="commande.status && commande.livraison == 'progress'"
                class="bg-yellow-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: 75%">
                En cours de livraison
            </div>
            <div v-else-if="commande.status && commande.livraison == 'finish'"
                class="bg-green-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: 100%">
                En cours de livraison
            </div>
            <div v-else-if="commande.status && commande.livraison == 'field'"
                class="bg-red-600 text-lg h-7 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: 100%">
                Echec de livraison
            </div>
        </div>
        <h2 class="mt-6 text-xl font-semibold">Plats Commandés</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="item in commande.paniers" class="flex items-start mt-4 mb-4">
                <img class="w-24 h-auto mr-4" :src="item['plat']['photo']" alt="Pizza">
                <div>
                    <h3 class="text-lg font-bold">{{ item['plat']['nom'] }}</h3>
                    <p>Prix: {{ item['prix'] }} FC</p>
                    <p>Quantité: {{ item['qte'] }}</p>
                </div>
            </div>
        </div>

        <div class="mt-6 text-right">
            <p class="text-lg font-bold"><strong>Total Commande:</strong> {{ commande.prix }} FC</p>
            <p><strong>Coût de Livraison:</strong> {{ commande.delivery_coast }} FC</p>
            <p class="text-xl font-bold"><strong>Total Final:</strong> {{ commande.prix + commande.delivery_coast }} FC
            </p>
        </div>

        <div class="mt-6">
            <h2 class="text-xl font-semibold">Adresse de Livraison</h2>
            <p>Adresse: {{ commande.adresse.adresse }}</p>
            <p>Commune: {{ commande.adresse.commune }}</p>
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
                <button type="submit"
                    class="rounded-full px-2 bg-orange-500 text-white font-bold py-2">Attribuer</button>
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
    <div role="status" class="flex justify-center items-center" v-if="load">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
    </div>

    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Toggle modal
    </button>
    <!-- modal -->
    <div tabindex="-1" v-if="isActive"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full md:inset-0">
        <div class="relative p-4 w-full max-w-md">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" @click="openOrClose"
                    class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <form class="p-4 md:p-5 text-center">
                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 id="status" class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Pour valider la commande, veuillez choisir un livreur.
                    </h3>

                    <div class="sm:col-span-2 flex justify-start flex-col items-start mb-5">
                        <label for="prix"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Livreurs</label>
                        <select id="countries" v-model="commandeForm.livreur_id"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Selectionner un livreur</option>
                            <option v-for="item in livreurs" :value="item['id']"> {{ item['prenom'] }} {{ item['nom'] }}</option>
                        </select>
                    </div>

                    <button @click="valider" id="non" type="button"
                        class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Oui
                    </button>
                    <button data-modal-hide="popup-modal1" type="button" @click="openOrClose"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Annuler</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '@/api/api'
import { ref, onMounted } from 'vue'
const props = defineProps({
    id: {
        type: Number
    }
})

const livreurs = ref([])
const commande = ref({})
const commandeForm = ref({
    livreur_id: 0,
})
const load = ref(true)
const hasData = ref(false)
const isActive = ref(false)

const openOrClose = () => {
    isActive.value = !isActive.value
}

const valider = async () => {
    console.log('Valider la commande avec l\'ID:', props.id)
    try {

    } catch (error) {

    }
}
const fetchItems = async () => {
    load.value = true
    hasData.value = false
    try {
        const data = await api.get(`/commandes-gerant/${props.id}`)
        commande.value = data
        const livreursData = await api.get(`livreurs-by-zone/${commande.value.zone}`)
        load.value = false
        hasData.value = true

        livreurs.value = livreursData
    } catch (error) {
        load.value = false
        hasData.value = false
        console.error('Error fetching items:', error)

    }
}

const dateFormat = (dateString) => {
    const date = new Date(dateString);

    // Options pour formater la date
    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('fr-FR', optionsDate);

    // Récupérer l'heure
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = date.toLocaleTimeString('fr-FR', optionsTime);

    // Combiner la date et l'heure
    const result = `${formattedDate} à ${formattedTime}`;

    return result;
}

onMounted(() => {
    fetchItems()
})  
</script>

<!-- <style>
.progress {
    position: relative;
    height: 20px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #e5e7eb;
    /* gray-300 */
}

.progress-bar {
    height: 100%;
    transition: width 0.5s ease;
    background-color: #4caf50;
    /* green-500 */
    text-align: center;
    color: white;
    line-height: 20px;
    /* Align text vertically */
}
</style> -->