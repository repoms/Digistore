
<template>
    <div class="hero rounded-full mb-5" style="background-image: url('https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0fGVufDB8fDB8fHww&w=1000&q=80');">
        <div class="hero-overlay rounded-full bg-opacity-70"></div>
        <div class="hero-content text-left text-neutral-content">
            <div class="max-w-md">
                <h1 class="text-5xl my-2 font-bold px-2 rounded">Produk Terbaru</h1>
            </div>
        </div>
    </div>

    <div class="w-full h-full pb-6 grid grid-cols-8 gap-3 gap-y-5">
        <!-- punya all -->
        <ProductCard v-for="product in allProduct" :product="product" v-if="searchStore.keyword == ''" />
        <!-- punya filter -->
        <ProductCard v-for="product in filterProduct" :product="product" v-else />
    </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import apiHandler from '../features/config/api-handler'
import { useSearchStore } from '../features/stores/search';

export default {
    setup() {
        const searchStore = useSearchStore()
        return { searchStore }
    },
    data() {
        return {
            allProduct: [],
        }
    },
    components: {
        ProductCard,
    },
    computed: {
        filterProduct() {
            return this.allProduct.filter(produk => {
                console.log(produk.Title)
                let dapat = produk.Title.toLowerCase().includes(this.searchStore.keyword.toLowerCase()) || produk.SellerName.toLowerCase().includes(this.searchStore.keyword.toLowerCase())
                return dapat
            })
        }
    },
    async beforeMount() {
        const Result = await apiHandler.PRE_API.GetLatestProduct()
        console.log(Result)

        if (Result.Status == "ok") {
            this.allProduct = JSON.parse(Result.Data)
        }
    }
}
</script>
