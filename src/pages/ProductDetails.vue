<template>

<div class="card min-w-min mx-7 p-6 shadow-xl bg-base-100">
    <div class="w-full h-full">
        <div class="grid grid-cols-2">
            <div class="carousel place-self-center justify-center">
                <div v-for="(image, index) in images" :id="'image-' + index" class="carousel-item aspect-auto w-4/6 justify-center">
                    <img :src="image" :alt="image.substring(image.lastIndexOf('/') + 1)" class="w-full" />
                </div>
            </div>

            <div class="justify-self-start">
                <h1 class="text-xl font-semibold">{{ product.Title }}</h1>
            </div>

            <div class="flex justify-center w-full col-start-1">
                Test
            </div>
        </div>
    </div>
</div>

</template>

<script>
import apiHandler from '../features/config/api-handler';

export default {
    data() {
        return {
            product: Object,
            images: [],
        }
    },
    async mounted() {
        const Result = await apiHandler.PRE_API.GetProductByGuid(this.$route.params.guid)
        console.log(Result)
        
        this.product = JSON.parse(Result.Data)
        this.images = JSON.parse(this.product.Image)
    },
}
</script>
