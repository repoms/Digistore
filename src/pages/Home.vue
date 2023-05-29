
<template>
    <div class="w-full h-full pb-6 grid grid-cols-8 gap-3 gap-y-5">
        <ProductCard v-for="product in allProduct" :product="product"/>
    </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import apiHandler from '../features/config/api-handler'

export default {
    inject: ["allProduct"],
    data() {
        return {
            allProduct: []
        }
    },
    components: {
        ProductCard,
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
