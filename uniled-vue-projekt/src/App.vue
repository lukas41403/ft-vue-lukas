<script>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';

import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    Navbar,
    RouterView,
    Hero,
    Footer,
    Cart
  },
  data() {
    return{
      isCartVisible: false,
    };
  },
  methods: {
    toggleCart(){
      this.isCartVisible = !this.isCartVisible;
    }
  }
}
</script>

<template>
  <h1>toto je nadpis z App.vue</h1> 
  <br/> 
  <Navbar @toggle-cart="toggleCart" />
  <Cart v-if="isCartVisible" @toggle-cart="toggleCart"/>
  <RouterView />
  <Footer />
</template>

