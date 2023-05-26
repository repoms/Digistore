
<template>
    <div class="card min-w-min mx-7 p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">
            Produk Baru
        </div>

        <div class="divider"></div>

        <!-- Content -->
        <div class="w-full h-full pb-6">
            <div class="grid grid-cols-6 gap-6">
                <p class="justify-self-end place-self-center col-start-1">Title</p>
                <TextInput v-model="title" class="col-span-4" placeholder="Masukkan nama produk" />

                <p class="justify-self-end place-self-center col-start-1">Image</p>
                <div class="col-span-4 flex flex-wrap gap-2">
                    <ButtonFileInput @addFile="addFile" @removeFile="removeFile" />
                    <div class="divider divider-horizontal m-2"></div>
                    <ButtonFileInput @addFile="addFile" @removeFile="removeFile" />
                    <div class="divider divider-horizontal m-2"></div>
                    <ButtonFileInput @addFile="addFile" @removeFile="removeFile" />
                    <div class="divider divider-horizontal m-2"></div>
                    <ButtonFileInput @addFile="addFile" @removeFile="removeFile" />
                    <div class="divider divider-horizontal m-2"></div>
                    <ButtonFileInput @addFile="addFile" @removeFile="removeFile" />
                </div>

                <p class="justify-self-end place-self-center col-start-1">Price</p>
                <div class="input-group col-span-4">
                    <span>Rp</span>
                    <TextInput v-model="price" class="w-full" :number="true" placeholder="0" />
                </div>

                <p class="justify-self-end place-self-center col-start-1">Stok</p>
                <TextInput v-model="stock" class="col-span-4" :number="true" placeholder="0" />
                
                <p class="justify-self-end place-self-center col-start-1">Description</p>
                <textarea v-model="description" rows="5" class="textarea textarea-bordered col-span-4"></textarea>
			</div>
            
            <div class="mt-16">
                <button @click="submitProduct" class="btn rounded-full border-transparent drop-shadow-med bg-primary float-right transition ease-in-out hover:scale-110">Tambah Produk</button>
            </div>
        </div>
    </div>

</template>


<script>
import ProductCardSeller from '../components/ProductCardSeller.vue';
import TextInput from '../components/TextInput.vue';
import ButtonFileInput from '../components/ButtonFileInput.vue';
import axios, { toFormData } from 'axios';
import apiHandler from '../../../features/config/api-handler';
import { useNotificationStore } from '../../../features/stores/notification';

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    components: {
        ProductCardSeller,
        TextInput,
        ButtonFileInput,
    },
    data() {
        return {
            title: "",
            price: "",
            stock: "",
            description: "",
            files: [],
        }
    },
    methods: {
        addFile(fileObj) {
            console.log(fileObj)
            this.files.push(fileObj)
            console.log(this.files)
        },
        removeFile(fileObj) {
            this.files = this.files.filter((val) => !(val.guid == fileObj.guid))
        },
        async submitProduct() {
            try {
                console.log(this.files)
                const TOKEN = localStorage.getItem("token")

                let formData = toFormData({
                    "Title": this.title,
                    "Description": this.description,
                    "Price": this.price,
                    "Stock": this.stock,
                })
                this.files.forEach(file => {
                    formData.append(file.guid, file.image)
                });

                console.log(formData)
                const res = await axios.post(
                    apiHandler.BASE_API + apiHandler.END_API.product,
                    formData,
                    { headers: { 'Authorization': 'Bearer ' + TOKEN }}
                )

                const Status = await res.data
                console.log(Status)

                if (Status.Status == "ok") {
                    this.notifStore.addNotif("success", Status.Message, "circle-check")
                } else if (Status.Status == "bad") {
                    this.notifStore.addNotif("error", Status.Message, "xmark")
                }
            } catch (error) {
                console.log(error)
                this.notifStore.addNotif("error", "Something wrong", "xmark")
            }
        }
    }
}
</script>
