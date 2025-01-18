import { defineStore } from 'pinia'   

export const useCartStore = defineStore('cartStore', {    // inicializuje cartStore
  state: () => {    
    return {
      products: [],   // na zaciatok su products iba prazdny array
      cart: [],       // cart zacina takisto iba ako prazdny array
      isPopupVisible: false   // popup default je not visible
    }
  },
  getters: {
    cartTotal: (state) => {      // metoda na spocitacnie celkovej ceny v kosiku
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
    cartQuantity: (state) => {    // spocita celkovy pocet poloziek
      return state.cart.reduce((total, product) => {
        return total + product.quantity
      }, 0)
    }
  },
  actions: {
    loadProducts(file) {    
      import(`@/data/${file}.json`).then((module) => { // nacitanie produktov z json suboru
        this.products = module.default
      })
    },
    addToCart(product) {    
      const existingProduct = this.cart.find((p) => {
        return p.name === product.name
      })
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.isPopupVisible = true
      setTimeout(() => (this.isPopupVisible = false), 2000)
    },
    removeFromCart(product) { 
      const existingProduct = this.cart.find((p) => p.name === product.name)
      if (existingProduct.quantity === 1) {
        this.cart = this.cart.filter((p) => p.name !== product.name)
      } else {
        existingProduct.quantity--
      }
    },
    clearCart() {   
      this.cart = []
    }
  },
  persist: {    // persist umoznuje uchovanie dat z kosika v session storage aj po refreshe okna
    enabled: true,
    strategies: [
      {
        key: 'cartStore',
        storage: window.localStorage
      }
    ]
  }
})
