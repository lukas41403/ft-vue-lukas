<template>
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

        <div class="bg-bg_form rounded-lg flex flex-col mx-auto max-w-2xl md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-2xl mb-1 font-medium title-font">Kontaktujte Nás</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Napíšte nám aký tovar hľadáte.</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Meno</label>
            <input type="text" id="name" name="name"
              class="w-full bg-bg_form rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email"
              class="w-full bg-bg_form rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Správa</label>
            <textarea id="message" name="message"
              class="w-full bg-bg_form rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button
            class="text-white bg-bg_button_form border-0 py-2 px-6 focus:outline-none bg-yellow-600 rounded text-lg">Odoslať</button>
          <p class="text-xs text-gray-500 mt-3">Ďakujeme za váš záujem. Na vaše otázky odpovieme čo najskôr.</p>
        </div>
      </div>
    </section>
  </template>
  
