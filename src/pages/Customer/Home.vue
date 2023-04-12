

<template>
    <Navbar />
    <BaseLayout>
        <div class="container mx-auto w-3/4 flex justify-center items-center flex-wrap p-6 py-10">
            <Card v-for="product in allProduct" :product="product"/>
        </div>
    </BaseLayout>
</template>

<script>
import Card from '../../components/Card.vue';

export default {
    inject: ["allProduct"],
    components: {
        Card,
    },
}
</script>
