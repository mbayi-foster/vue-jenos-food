<template>
    <nav
        class="dark:bg-gray-700 fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                        <img src="../assets/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                        <span
                            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Jenos-Food</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div>
                        <div v-if="gerant">
                            <router-link to="/notifications" title="Notifications"
                                class="flex items-center justify-center align-middle p-2 text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <i class="text-xl fa-solid fa-bell"></i>
                            </router-link>
                        </div>
                    </div>
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" src="../assets/logo.svg" alt="user photo">
                            </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown-user">
                            <div class="px-4 py-3" role="none">
                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                    {{ user['prenom'] }} {{ user['nom'] }}

                                </p>
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    {{ user['email'] }}
                                </p>
                            </div>
                            <ul class="py-1" role="none">
                                <!--  <li>
                                    <router-link to="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Profile</router-link>
                                </li> -->
                                <li>
                                    <a @click="signOut"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink to="/"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 21">
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span class="ms-3">Tableau de bord</span>
                    </RouterLink>
                </li>
                <div class="flex items-center my-4" v-if="gerant">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <span class="mx-4 text-gray-600 font-semibold">Gérants</span>
                    <div class="flex-grow border-t border-gray-300"></div>
                </div>
                <li v-if="gerant">
                    <router-link to="/commandes"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-map-pin"></i>
                        <span class="ms-3">Commandes</span>
                    </router-link>
                </li>
                <div class="flex items-center my-4" v-if="admin">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <span class="mx-4 text-gray-600 font-semibold">Administrateur</span>
                    <div class="flex-grow border-t border-gray-300"></div>
                </div>
                <li v-if="admin">
                    <router-link to="/plats"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-cookie"></i>
                        <span class="ms-3">Plats</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/menus"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-bars"></i>
                        <span class="ms-3">Menus</span>
                    </router-link>
                </li>

                <li v-if="admin">
                    <router-link to="/livreurs"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa fa-motorcycle"></i>
                        <span class="ms-3">Livreurs</span>
                    </router-link>
                </li>


                <li v-if="admin">
                    <router-link to="/users"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-users"></i>
                        <span class="ms-3">Utilisateurs</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/zones"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-map-pin"></i>
                        <span class="ms-3">Zones</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/communes"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="text-xl fa-solid fa-map-pin"></i>
                        <span class="ms-3">Commune</span>
                    </router-link>
                </li>



            </ul>
        </div>
    </aside>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/store'
import { onMounted } from 'vue'
import { ref } from 'vue';
const router = useRouter()
const admin = ref(false)
const gerant = ref(false)
const props = defineProps({
    user: {
        type: Array,
    },

})

const userStore = useUserStore()


const signOut = () => {
    userStore.logout()
}
const fetch = () => {
    const roles = props.user.roles
    admin.value = roles.some(role => role.nom === "Administrateur");
    gerant.value = roles.some(role => role.nom === "Gérant");
}
onMounted(fetch)
</script>