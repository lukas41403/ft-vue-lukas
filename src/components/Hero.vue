<template>
<div>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative"></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

      <div class="text-center">
        <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">LED osvetlenie na vaše prianie</h1>
        <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Vyberte si z našej ponuky existujúcich motívov. Ak ste nenašli čo hľadáte, dajte nám vedieť a my vám pripravíme špecifickú ponuku.</p> 
        <!-- TODO eventualne pridanie priameho linku na kontakt na nas sem -->
        <nav class="mt-10 flex">
                <router-link to="/stlpove" class="">
                    <img class="px-6 rounded" src="../../product_images/stlpove-kategoria.jpeg"/>
                    <h2 class="pt-4 font-semibold text-lg">Stĺpové osvetlenie</h2>
                </router-link>
                <router-link to="/retaze" class="">
                    <img class="px-6 rounded" src="../../product_images/retaze-kategoria.jpeg"/>
                    <h2 class="pt-4 font-semibold text-lg">LED reťaze</h2>
                </router-link>
        </nav>
      </div>
    </div>

  </div>
</div>
</template>