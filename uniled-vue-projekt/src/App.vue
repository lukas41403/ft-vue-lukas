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
  }
}
</script>

<template>
  <h1>toto je nadpis z App.vue</h1> 
  <br/> 
  <Navbar />
  <Cart />
  <RouterView />
  <Footer />
</template>

