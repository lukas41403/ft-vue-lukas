<template>
    <nav class="sticky top-0 z-50 bg-bg_navbar border-b-[1px] border-[rgb(231,231,231)]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link to="/" class="flex items-start">
          <img src="../components/img/UNILED-logo.svg" class="h-8" alt="Logo" />
        </router-link>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
          <img aria-hidden="true" src="../components/img/menu.png" alt="">
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbarDefault">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center">
            <li class="flex justify-center">
              <router-link to="/" @click="closeMenu"
                class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Domov</router-link>
            </li>
            <li class="flex justify-center">
              <router-link to="/stlpove" @click="closeMenu"
                class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Stĺpové osvetlenie</router-link>
            </li>
            <li class="flex justify-center">
              <router-link to="/retaze" @click="closeMenu"
                class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Svetelné reťaze</router-link>
            </li>
            <li class="flex justify-center">
              <button @click="toggleCart(); closeMenu();"
                class="block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">
                <div class="icons">Nákupný košik</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template> 

<script>
    export default {
        methods: {
            toggleMenu() {
                const menu = document.getElementById("navbarDefault");
                menu.classList.toggle("hidden");
            },
            closeMenu() {
                const menu = document.getElementById("navbarDefault");
                menu.classList.add("hidden");
            },
            toggleCart() {
                this.$emit("toggle-cart");
            }          
        }
    };
</script>


