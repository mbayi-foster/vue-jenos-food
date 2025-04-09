import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Users from '@/views/admin/users/Users.vue'
import CreatePlat from '@/views/admin/CreatePlat.vue'
import Plats from '@/views/admin/Plats.vue'
import Plat from '@/views/admin/details/Plat.vue'
import Menus from '@/views/admin/Menus.vue'
import CreateMenu from '@/views/admin/CreateMenu.vue'
import Zones from '@/views/admin/zones/Zones.vue'
import CreateZones from '@/views/admin/zones/CreateZones.vue'
import { useUserStore } from '@/stores/store.js'
import Commandes from '@/views/gerant/Commandes.vue'
import CreateUser from '@/views/admin/users/CreateUser.vue'
import Menu from "@/views/admin/details/Menu.vue"
import Livreurs from "@/views/admin/livreurs/Livreurs.vue"
import CreateLivreur from "@/views/admin/livreurs/CreateLivreur.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Utilisateurs',
      meta: { requiresAuth: true },
      component: Users
    },
    {
      path: '/plats/create',
      name: 'Nouveau plat',
      meta: { requiresAuth: true },
      component: CreatePlat
    },
    {
      path: '/menus',
      name: 'Menus',
      meta: { requiresAuth: true },
      component: Menus
    },
    {
      path: '/menus/create',
      name: 'Nouveau menu',
      meta: { requiresAuth: true },
      component: CreateMenu
    },
    {
      path: '/plats',
      name: 'Plats',
      meta: { requiresAuth: true },
      component: Plats
    },
    {
      path: '/zones',
      name: 'Zones',
      meta: { requiresAuth: true },
      component: Zones
    },
    {
      path: '/zones/create',
      name: 'Nouvelle zone',
      meta: { requiresAuth: true },
      component: CreateZones
    },
    {
      path: '/commandes',
      name: 'Liste des commandes',
      meta: { requiresAuth: true },
      component: Commandes
    },
    {
      path: '/users/create',
      name: 'Nouvel utilisateur',
      meta: { requiresAuth: true },
      component: CreateUser
    },

    //routes details

    {
      path: '/plat/:id', // :id est un paramètre dynamique
      name: 'Plat',
      component: Plat,
      props: true,
      meta: { requiresAuth: true }, // permet de passer le paramètre comme prop au composant
    },
    {
      path: '/menus/:id', // :id est un paramètre dynamique
      name: 'Menu',
      component: Menu,
      props: true,
      meta: { requiresAuth: true }, // permet de passer le paramètre comme prop au composant
    },


    /* route livreurs */
    {
      path: '/livreurs',
      name: 'Livreurs',
      meta: { requiresAuth: true },
      component: Livreurs
    },
    {
      path: '/livreurs/create',
      name: 'Nouveau livreur',
      meta: { requiresAuth: true },
      component: CreateLivreur
    },
  ],
})
router.beforeEach((to, from, next) => {
  const store = useUserStore();
  store.loadUser();

  if (to.path === '/login' && store.isAuthenticated) {
    next('/'); // Rediriger vers la page d'accueil
  }
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login'); // Rediriger vers la page de connexion
  } else {
    next(); // Autoriser l'accès
  }
});
export default router
