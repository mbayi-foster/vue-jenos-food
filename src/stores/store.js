import { defineStore } from 'pinia'
import api from '../api/api'
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(userData) {
      this.user = userData
      this.isAuthenticated = true

      localStorage.setItem('user', JSON.stringify(userData))
    },
    async logout() {
      try {
        const data = await api.post('/logout/users');
        this.user = null
        this.isAuthenticated = false
        localStorage.removeItem('user')
      } catch (error) {

      }



    },
    loadUser() {
      const userData = JSON.parse(localStorage.getItem('user'))
      if (userData) {
        this.user = userData
        this.isAuthenticated = true
      }
    },
  },
})