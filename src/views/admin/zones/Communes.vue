<template>
    <div class="mb-5">
        <BreadCumb hote="Communes" lien="/communes" page="Communes" :principale="true" />
    </div>
    <TableCommune @effacer="effacer" :data="communes" :columns="tablesColumn" :has-data="hasData"
        :load="load" :refresh="fetchItems"/>
</template>

<script setup>
import BreadCumb from '@/components/BreadCumb.vue';
import TableCommune from '@/components/tables/TableCommune.vue';
import api from '@/api/api'
import { ref, onMounted, computed } from "vue"

const communes = ref([])

const tablesColumn = ref([
    { key: 'nom', label: 'Communes' },
    { key: 'frais', label: 'Frais de livraison' },
    { key: 'zone', label: 'Zone' },
])
const hasData = ref(false)
const load = ref(true)

const fetchItems = async () => {
    try {
        load.value = true
        hasData.value = false
        const data = await api.get('/communes')
        if (Array.isArray(data) && data.length >= 1) {
            communes.value = data
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

const effacer = async (id) => {
    try {
        await api.delete(`/communes/${id}`)
        fetchItems()
    } catch (error) {
        console.log(error)
    }
}

onMounted(fetchItems)

</script>