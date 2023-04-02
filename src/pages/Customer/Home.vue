

<template>
    <Navbar />

    <BaseLayout>
        <div class='py-8'>
            <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <Card v-for="product in allProduct" :nama="product.nama" :isNew="product.isNew"/>
            </div>
        </div>
    </BaseLayout>
</template>

<script>
import Navbar from '../../components/Layout/Navbar.vue';
import Card from '../../components/Card.vue';

export default {
    components: {
        Navbar,
        Card
    },
    computed: {
        allProduct() {
            return [
                {nama: "Produk 1", isNew: true},
                {nama: "Produk 2"},
                {nama: "Produk 3"},
                {nama: "Produk 4", isNew: true},
            ]
        }
    }
}
</script>
