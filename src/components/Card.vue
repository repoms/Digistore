<template>
    <div class="flex flex-col p-3 w-full">
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ nama }}
                    <div class="badge badge-secondary" v-if="isNew">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["nama", "isNew"]
}
</script>