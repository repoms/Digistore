
<template>
    <div class="card min-w-min p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">
            Produk
        </div>

        <div class="divider"></div>

        <!-- Konten -->
        <div class="w-full h-full pb-6 grid grid-cols-6 gap-3 gap-y-5">
            <ProductCardSeller v-for="product in allProduct" :product="product" />
        </div>
    </div>
</template>


<script>
import apiHandler from '../../../features/config/api-handler';
import ProductCardSeller from '../components/ProductCardSeller.vue';

export default {
    components: {
        ProductCardSeller,
    },
    data() {
        return {
            allProduct: []
        }
    },
    async mounted() {
        const UserResult = await apiHandler.PRE_API.GetSelfInfo()
        const User = JSON.parse(UserResult.Data)
        console.log(User)
        const Result = await apiHandler.PRE_API.GetProductsByUser(User.Guid)

        console.log(Result)

        if (Result.Status == "ok") {
            console.log(Result.Message)
            let productsUser = JSON.parse(Result.Data)
            console.log(productsUser)
            this.allProduct = productsUser
            return
        }
    }
}
</script>
