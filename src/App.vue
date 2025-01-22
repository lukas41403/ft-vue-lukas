<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';

import { RouterView } from 'vue-router';

export default {
  components: {
    Navbar,
    RouterView,
    Footer,
    Cart
  },
  data() {
    return {
      isCartVisible: false,
    };
  },
  methods: {
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    }
  }
}
</script>

<template>
  <Navbar @toggle-cart="toggleCart" />
  <Cart v-if="isCartVisible" @toggle-cart="toggleCart"/>
  <RouterView />
  <Footer />
</template>

