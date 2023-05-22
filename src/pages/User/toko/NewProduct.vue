
<template>
    <div class="card min-w-min p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">Produk Baru</div>

        <div class="divider"></div>

        <!-- Content -->
        <div class="w-full h-full pb-6">
            <div class="grid grid-cols-2 gap-6">
                <TextInput v-model="title" title="Title" />
                <div class="form-control w-full">
                    <label class="label">
                        <span class="text-base label-text">Image</span>
                    </label>
                    <input type="file" @change="previewFiles" multiple class="file-input file-input-bordered" />
                </div>
                <TextInput v-model="price" title="Price" :number="true" />
                <TextInput v-model="stock" title="Stok" :number="true" />

                <div class="form-control w-full col-span-2">
                    <label class="label">
                        <span class="text-base label-text">Description</span>
                    </label>
                    <textarea v-model="description" rows="5" class="textarea textarea-bordered"></textarea>
                </div>
			</div>
        </div>
    </div>
</template>


<script>
import ProductCardSeller from '../components/ProductCardSeller.vue';
import TextInput from '../components/TextInput.vue';

export default {
    components: {
        ProductCardSeller,
        TextInput,
    },
    data() {
        return {
            title: "",
            price: "",
            stock: "",
            description: "",
            files: null,
        }
    },
    methods: {
        previewFiles(event) {
            this.files = event.target.files
            console.log(this.files)
        }
    }
}
</script>
