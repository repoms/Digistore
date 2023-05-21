
<template>
    <Navbar />
    <div class="min-h-screen">
        <div class="container mx-auto w-5/6 flex justify-center items-center flex-wrap p-6 py-10">
            <Card v-for="product in allProduct" :product="product"/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue';

export default {
    inject: ["allProduct"],
    components: {
        Navbar,
        Card,
    },
}
</script>
