<template>
    
    <div class="flex flex-col p-3 md:w-1/3 xl:w-1/4">
        <div class="card bg-base-100 shadow-xl w-full">
            <figure><img :src="product.Image" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ product.Name }}
                    <!-- <div class="badge badge-secondary" v-if="isNew">NEW</div> -->
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["product"]
}
</script>