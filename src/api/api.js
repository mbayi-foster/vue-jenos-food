import axios from 'axios'
class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
    })

    this.setAuthToken();
  }

  setAuthToken() {
    const store = JSON.parse(localStorage.getItem('user'))
   const token = store.token
    if (token) {
      this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  async get(resource) {
    try {
      const response = await this.api.get(resource)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async post(resource, data) {
    try {
      const response = await this.api.post(resource, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }


  async put(resource, data) {
    try {
      const response = await this.api.put(resource, data)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async delete(resource) {
    try {
      const response = await this.api.delete(resource)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  handleError(error) {
    // Gérez les erreurs ici
    console.error('API Error:', error)
    throw error // Re-throw l'erreur pour pouvoir la gérer dans le composant
  }
}

export default new Api('http://localhost:8000/api') // Remplacez par votre URL de base
