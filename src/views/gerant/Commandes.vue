<template>
    <div class="mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div>
            <BreadCumb hote="Commandes" lien="#" page="Commandes" :principale="true" />
        </div>
        <div>
            <h3>Choisir une zone :</h3>
            <select id="month" @change="change" class="block w-full p-2 border border-gray-300 rounded-md">
                <option v-for="item in zones" :key="item.id" :value="item.id">{{ item.nom }}</option>
            </select>
        </div>

    </div>
    <TableCommandes @effacer="effacer" @change-status="change" :data="commandes" :columns="tablesColumn"
        :has-data="hasData" :load="load" :refresh="fetchItems" />

</template>

<script setup>
import { onMounted, ref } from 'vue';
import BreadCumb from '@/components/BreadCumb.vue';
import TableCommandes from '@/components/tables/TableCommandes.vue';
import api from '@/api/api'
import { useUserStore } from '@/stores/store'

const store = useUserStore()
const user = ref([])
const zones = ref([])
const zone = ref()
const commandes = ref([])
const tablesColumn = ref([
    { key: 'ticket', label: 'Ticket' },
    { key: 'prix', label: 'Facture' },
    { key: 'confirm', label: 'Confirmation' },
    { key: 'livraison', label: 'Livraison' },
    { key: 'livreur', label: 'Livreur' },

])
const hasData = ref(false)
const load = ref(true)

/* zones */
const zoneById = async (id) => {
    try {
        hasData.value = false
        const data = await api.get(`/zones-id/${id}`)
        zones.value = data
        if (Array.isArray(data) && data.length >= 1) {
            zones.value = data
        } else {
            load.value = false
            hasData.value = false
        }
    } catch (error) {
        console.log(error)
    }
}

const fetchItems = async () => {
    if (zone.value == null) {
        alert("Vous n'avez aucune zone")
    }
    try {
        load.value = true
        hasData.value = false
        const data = await api.get(`/commandes/${zone.value.id}`)
        if (Array.isArray(data) && data.length >= 1) {
            commandes.value = data
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
const change = async (event) => {
    const id = event.target.value;
    zone.value = zones.value.find(zone => zone.id == id)
    fetchItems()
    /*   try {
          await api.get(`/plats/status/change/${id}`)
          fetchItems()
      } catch (error) {
          console.log(error)
      } */
}
const effacer = async (id) => {
    try {
        await api.delete(`/plats/${id}`)
        fetchItems()
    } catch (error) {
        console.log(error)
    }
}



onMounted(
    async () => {
        try {
            user.value = store.user
            if (user != null) {
                await zoneById(user.value.id)
            }
            zone.value = zones.value[0]
            await fetchItems()
        } catch (error) {

        }
    }

)
</script>