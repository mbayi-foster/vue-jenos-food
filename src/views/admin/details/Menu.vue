<template>
    <div class="mb-5">
        <BreadCumb hote="Menus" lien="/menus" page="Détails du menu" />
    </div>




    <div class="carousel relative w-xs">
        <div class="carousel-inner flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-item min-w-full">
                <img src="@/assets/logo.svg" alt="Image 1" class="w-auto h-15">
            </div>
            <div class="carousel-item min-w-full">
                <img src="@/assets/logo.svg" alt="Image 2" class="w-auto h-15">
            </div>
            <div class="carousel-item min-w-full">
                <img src="@/assets/logo.svg" alt="Image 3" class="w-auto h-15">
            </div>
        </div>
        <button @click="prevSlide"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-l shadow">❮</button>
        <button @click="nextSlide"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-r shadow">❯</button>
    </div>
            <div v-if="!loading && !erreur">
            <!-- corps -->
            <div class="w-full grid lg:grid-cols-2 gap-4">
                <div class="lg:order-2">
                    <!-- photo -->



                </div>
                <div class="lg:order-1">
                    <!-- details -->
                    <div class="md:px-5 px-2">
                        <div class="grid grid-cols-2 gap-2 items-center">
                            <p class="mb-2 text-3xl font-black text-gray-900 dark:text-white">{{ menu.nom }}</p>
                            <p class="mb-2 text-xs font-black text-gray-900 dark:text-white">{{ menu.date }}</p>
                        </div>
                        <p
                            class="lg:overflow-y-auto lg:h-32 font-serif text-justify ml-5 text-base text-gray-900 dark:text-white">
                            {{ menu.details }}
                        </p>
                    </div>

                    <div class="mx-5 my-5">
                        <div class="sm:w-full border-2 border-orange-500 dark:border-white  p-1 rounded-xl">
                            <p class="ml-4 text-base font-serif text-gray-900 dark:text-white">Prix :</p>
                            <p class="mb-2 text-center text-gray-900 font-semibold text-2xl dark:text-white">
                                {{ menu.prix }} Fc
                            </p>
                        </div>
                    </div>
                    <div class="mx-5 mb-3 grid grid-cols-2 gap-3">
                        <div class="m-auto w-full  border-2 border-black  p-1 rounded-xl dark:border-white">
                            <p class="ml-4 text-xs font-serif text-gray-900 dark:text-white">Like :</p>
                            <p class="text-center text-gray-900 font-semibold text-xl dark:text-white">{{ menu.like }}
                            </p>
                        </div>
                        <div class="m-auto w-full border-2 border-red-500 p-1 rounded-xl">
                            <p class="ml-4 text-xs font-serif text-gray-900 dark:text-white">Commandes :</p>
                            <p class="text-center text-gray-900 font-semibold text-xl dark:text-white">
                                {{ menu.commandes }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto my-5 mb-8 w-full grid grid-cols-2 gap-4 text-center">
                <div class="text-center"> <button type="submit"
                        class="text-center rounded-lg w-full md:w-2xs bg-orange-500 text-white font-bold py-2">Modifier</button>
                </div>
                <div>
                    <button v-if="!menu.status" type="submit"
                        class="rounded-lg w-full md:w-2xs  bg-green-500 text-white font-bold py-2">Publier</button>
                    <button v-else type="submit"
                        class="rounded-lg w-full md:w-2xs bg-red-500 text-white font-bold py-2">Restreindre</button>
                </div>

            </div>
        </div>

</template>
<script setup>
import BreadCumb from '@/components/BreadCumb.vue';
import { onMounted, ref } from 'vue';
import api from "@/api/api"

const loading = ref(false)
const erreur = ref(false)
const menu = ref({})


const currentIndex = ref(0);
const totalSlides = 3; // Nombre total d'images

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
};
</script>

<style>
.carousel {
    position: relative;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    min-width: 100%;
}
</style>