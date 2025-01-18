<template>
    <transition name="fade">
        <div v-if="cartStore.isPopupVisible" class="popup">
            Položka bola pridaná do košíka
        </div>
    </transition>
    <div class="flex justify-center">
        <div class="w-full max-w-screen-xl mx-auto p-4">
            <h1 class="text-2xl font-bold mb-2 mt-4 px-8">Stĺpové osvetlenie</h1>
            <div class="flex flex-wrap justify-between">
                <div v-for="(item, index) in cartStore.products" :key="index"
                    class="product-item flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 p-8">   
                    <div class="image-container rounded-lg overflow-hidden">
                        <img class="product-image" :src="'/product_images/' + item.picture_2" :alt="item.name">
                        <!-- <img class="product-image" :src="'/product_images/stlpovky/' + item.picture_2" :alt="item.name"> -->
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                        <h4 class="text-md">{{ item.price }} €</h4>
                    </div>
                    <div>
                        <h6 class="text-sm">Rozmer: {{ item.size }}</h6>

                    </div>
                    <div class="flex items-start">
                        <button
                            class="px-4 py-1 bg-transparent text-bg_stats border border-bg_stats rounded hover:bg-yellow-600 mt-2 expandable-button"
                            @click="cartStore.addToCart(item)">Pridať
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore.js"   
export default {
    data() {
        const cartStore = useCartStore();   
        return {
            cartStore,
        }
    },
    created() {
        this.cartStore.loadProducts('stlpovky')
    }
}
</script>