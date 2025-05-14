<template>
    <div class="mb-5">
        <BreadCumb hote="Plats" lien="/plats" page="Détails du plat" />
    </div>


    <div v-if="!loading && !erreur">
        <!-- corps -->
        <div class="w-full grid lg:grid-cols-2 gap-4">
            <div class="lg:order-2">
                <!-- photo -->
                <img class="lg:h-96 w-full rounded-lg" :src="plat.photo" alt="">
            </div>
            <div class="lg:order-1">
                <!-- details -->
                <div class="md:px-5 px-2">
                    <div class="grid grid-cols-2 gap-2 items-center">
                        <p class="mb-2 text-3xl font-black text-gray-900 dark:text-white">{{ plat.nom }}</p>
                        <p class="mb-2 text-xs font-black text-gray-900 dark:text-white">{{ plat.date }}</p>
                    </div>
                    <p
                        class="lg:overflow-y-auto lg:h-32 font-serif text-justify ml-5 text-base text-gray-900 dark:text-white">
                        {{ plat.details }}
                    </p>
                </div>

                <div class="mx-5 my-5">
                    <div class="sm:w-full border-2 border-orange-500 dark:border-white  p-1 rounded-xl">
                        <p class="ml-4 text-base font-serif text-gray-900 dark:text-white">Prix :</p>
                        <p class="mb-2 text-center text-gray-900 font-semibold text-2xl dark:text-white">
                            {{ plat.prix }} Fc
                        </p>
                    </div>
                </div>
                <div class="mx-5 mb-3 grid grid-cols-2 gap-3">
                    <div class="m-auto w-full  border-2 border-black  p-1 rounded-xl dark:border-white">
                        <p class="ml-4 text-xs font-serif text-gray-900 dark:text-white">Like :</p>
                        <p class="text-center text-gray-900 font-semibold text-xl dark:text-white">{{ plat.like }}
                        </p>
                    </div>
                    <div class="m-auto w-full border-2 border-red-500 p-1 rounded-xl">
                        <p class="ml-4 text-xs font-serif text-gray-900 dark:text-white">Commandes :</p>
                        <p class="text-center text-gray-900 font-semibold text-xl dark:text-white">
                            {{ plat.commandes }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto my-5 mb-8 w-full grid grid-cols-2 gap-4 text-center">
            <div class="text-center">
                <button type="button" @click="showForm"
                    class="text-center rounded-lg w-full md:w-2xs bg-orange-500 text-white font-bold py-2">Modifier</button>
            </div>
        </div>
    </div>
    <div role="status" class="flex justify-center items-center" v-if="loading">
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
    <div v-if="erreur" class="text-center">
        <p class="text-center mb-3 text-lg text-red-500 md:text-xl dark:text-gray-400">
            Une erreur s'est produite veillez actualiser la page !
        </p>
        <button @click="fetchPlat" class="rounded-lg p-5 bg-orange-500 text-white font-bold py-2">Actualiser</button>

    </div>

    <div v-if="show" tabindex="-1" aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full md:inset-0">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Mettre à jour le plat
                    </h3>
                    <button type="button" @click="showForm"
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
                <div class="p-4 md:p-5">
                    <form method="post" enctype="multipart/form-data" @submit.prevent="handleSubmit">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="sm:col-span-2">
                                <label for="nom"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom*</label>
                                <input type="text" name="nom" id="nom" v-model="updatePlat.nom"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Veillez nommer le plat" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="prix"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix*</label>
                                <input type="text" v-model="updatePlat.prix" id="prix"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Veillez nommer le plat" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="photo">Photo*</label>
                                <input name="photo" @change="handleFileUpload"
                                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="file_input_help" id="photo" type="file"
                                    accept=".png, .jpg, .jpeg">
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG
                                    ou JPEG
                                    (MAX. 800x400px).</p>

                            </div>
                            <div v-if="imagePreview">
                                <h2>Aperçu de l'image :</h2>
                                <img :src="imagePreview" alt="Aperçu" width="200" />
                            </div>
                            <div class="sm:col-span-2">

                                <label for="details"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Détails
                                    du plat*</label>
                                <textarea id="details" rows="4" v-model="updatePlat.details"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Détaillez le plat..." required></textarea>
                            </div>
                        </div>
                        <div v-if="updateLoad" class="py-5">
                            <div role="status" class="flex justify-center items-center">
                                <svg aria-hidden="true"
                                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500"
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
                            <p class="text-center mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
                                chargement...
                            </p>
                        </div>
                        <div v-else class="flex justify-center items-center">
                            <button type="submit"
                                class="text-white bg-yellow-500 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 me-4">Enregistrer</button>
                            <button type="reset"
                                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-4">Reset</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import BreadCumb from '@/components/BreadCumb.vue';
import { onMounted, ref } from 'vue';
import api from "@/api/api"
import { routerKey } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    id: {
        type: Number
    }
})
const loading = ref(false)
const erreur = ref(false)
const plat = ref({})
const updatePlat = ref({
    nom: '',
    prix: '',
    details: '',
    photo: null,
})
const show = ref(false)
const updateLoad = ref(false)
const fetchPlat = async () => {
    loading.value = true

    try {
        erreur.value = false
        plat.value = await api.get(`/plats/${props.id}`)
        updatePlat.value.nom = plat.value.nom
        updatePlat.value.details = plat.value.details
        updatePlat.value.prix = plat.value.prix
        loading.value = false
        // console.log(`la data : `, data)
    } catch (error) {
        erreur.value = true
    }
    loading.value = false
}

const showForm = async () => {
    show.value = (show.value == true) ? false : true
    imagePreview.value = null;
}


//update le plat

const imagePreview = ref(null);

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    updatePlat.value.photo = file;

    // Créer un aperçu de l'image
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const handleSubmit = async () => {
    updateLoad.value = true
    const formData = new FormData();
    formData.append('nom', updatePlat.value.nom);
    formData.append('prix', updatePlat.value.prix);
    formData.append('details', updatePlat.value.details);
    if (updatePlat.value.photo) {
        formData.append('photo', updatePlat.value.photo);
    } 

    try {
        const data = await api.post(`/plats-update/${plat.value.id}`, formData);
        updateLoad.value = false
        router.go(0);
    } catch (error) {
        updateLoad.value = false
        alert("Une erreur s'est produite veillez réessayer")
        console.error('Erreur lors du chargement des éléments:', error.response ? error.response.data : error.message);
    }
}
onMounted(fetchPlat)
</script>

<style>
.my-height {
    height: 65vh;
}
</style>