<template>
    <div class="mb-5">
        <BreadCumb hote="Zones" lien="/zones" page="Zones" :principale="true" />
    </div>
    <TableZones @effacer="effacer" @change-status="change" :data="zones" :columns="tablesColumn" :has-data="hasData"
        :load="load" :refresh="fetchItems" @show-zone="showZone" />
    <div v-if="show" tabindex="-1" aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full md:inset-0">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Détails de la zone
                    </h3>
                    <button type="button" @click="showZone"
                        class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div>
                    <p>
                        Nom : {{ zone['nom'] }}
                    </p>
                    <p>
                        Gérant : {{ zone['chef'] }}
                    </p>
                    <p>
                        Status : {{ (zone['status']==true) ? "Actif" : "Inactif" }}
                    </p>
                    <div>
                        <p>Communes : </p>
                        <ul v-for="commune in zone['communes']">
                            <li>{{commune["nom"]}}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import BreadCumb from '@/components/BreadCumb.vue';
import TableZones from '@/components/tables/TableZones.vue';
import api from '@/api/api'
import { ref, onMounted, computed } from "vue"

const zones = ref([])
const zone = ref()
const tablesColumn = ref([
    { key: 'nom', label: 'Zones' },
    { key: 'chef', label: 'Gérant' },
    { key: 'count_commune', label: 'Communes' },
    { key: 'status', label: 'Status' },
])
const hasData = ref(false)
const load = ref(true)
const show = ref(false)

const fetchItems = async () => {
    try {
        load.value = true
        hasData.value = false
        const data = await api.get('/zones')
        console.log("les zones", data)

        if (Array.isArray(data) && data.length >= 1) {
            zones.value = data
            load.value = false
            hasData.value = true
        } else {
            load.value = false
            hasData.value = false
        }
    } catch (error) {
        hasData.value = false
        load.value = false
        console.log(error)
    }
}

const change = async (id) => {
    try {
        await api.get(`/zones/status/change/${id}`)
        fetchItems()
    } catch (error) {
    }
}
const effacer = async (id) => {
    try {
        await api.delete(`/zones/${id}`)
        fetchItems()
    } catch (error) {
        console.log(error)
    }
}

const showZone = async (z) => {
    zone.value = z
    show.value = (show.value == true) ? false : true
}
onMounted(fetchItems)

</script>