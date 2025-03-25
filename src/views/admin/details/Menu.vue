<template>
    <div class="mb-5">
        <BreadCumb hote="Menus" lien="/menus" page="Détails du menu" />
    </div>

    <div id="animation-carousel" class="relative w-full" data-carousel="static">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <!-- Item 1 -->
                        <div class="hidden duration-200 ease-linear" data-carousel-item>
                            <img class="lg:h-96 w-full rounded-lg" src="@/assets/img/jp.jpg" alt="">
                           <!--  <img src="@/assets/img/jp.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."> -->
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-200 ease-linear" data-carousel-item>
                            <img src="@/assets/img/jp.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="...">
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
                            <img src="@/assets/img/jp.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="...">
                        </div>
                        <!-- Item 4 -->
                        <div class="hidden duration-200 ease-linear" data-carousel-item>
                            <img src="@/assets/img/jp.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="...">
                        </div>
                        <!-- Item 5 -->
                        <div class="hidden duration-200 ease-linear" data-carousel-item>
                            <img src="@/assets/img/jp.jpg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="...">
                        </div>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
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
</script>