
<template>
    <div class="card min-w-min p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">
            Produk
            <div class="float-right">
                <button class="btn btn-primary normal-case btn-sm rounded-full bg-orange-400 border-0">Tambah Produk Baru</button>
            </div>
        </div>

        <div class="divider"></div>

        <!-- Konten -->
        <div class="w-full h-full pb-6 grid grid-cols-6 gap-3 gap-y-5">
            <ProductCardSeller />
            <ProductCardSeller />
            <ProductCardSeller />
            <ProductCardSeller />
            <ProductCardSeller />
            <ProductCardSeller />
            <ProductCardSeller />
        </div>
    </div>
</template>


<script>
import ProductCardSeller from '../components/ProductCardSeller.vue';

export default {
    components: {
        ProductCardSeller,
    },
}
</script>
