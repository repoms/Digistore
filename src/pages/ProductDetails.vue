<template>

<div class="card min-w-min mx-7 p-6 shadow-xl bg-base-100">
    <div class="w-full flex justify-around items-start gap-7">
        <div class="w-1/4 h-full">
            <div class="carousel drop-shadow-xl hover:scale-110 transition-all">
                <div v-for="(image, index) in GetImages" :id="'image-' + index" class="carousel-item w-full h-full self-center justify-center">
                    <img :src="image" :alt="image.substring(image.lastIndexOf('/') + 1)" class="aspect-auto" />
                </div>
            </div>
            <div class="flex justify-center w-full gap-2 mt-2">
                <a :href="'#image-' + index" v-for="(image, index) in GetImages" class="w-1/4 h-full border hover:border-primary hover:scale-110 transition-all">
                    <img :src="image" :alt="image.substring(image.lastIndexOf('/') + 1)" class="aspect-square">
                </a>
            </div>
            <div class="flex justify-center mt-5">
                <div class="badge badge-primary rounded-md text-xl font-bold p-3">
                    {{ product.SellerName }}
                </div>
            </div>
        </div>

        <div class="flex flex-col h-full w-1/2">
            <p class="text-xl font-semibold">{{ product.Title }}</p>
            <h1 class="text-4xl font-bold text-primary">{{ GetPrice }}</h1>
            <div class="overflow-y-auto h-80">
                <p class="mt-2 whitespace-pre-wrap text-justify">{{ product.Description }}</p>
            </div>
        </div>

        <div class="card card-compact bg-primary text-white w-1/4 self-center">
            <div class="card-body items-center justify-center">
                <h2 class="card-title">Atur Jumlah</h2>
                <div class="font-semibold">Stok {{ product.Stock == 0 ? "Kosong" : product.Stock }}</div>
                <div class="input-group justify-center mb-4">
                    <button @click="amount--" class="btn btn-sm">
                        <font-awesome-icon icon="fa-solid fa-minus" />
                    </button>
                    <TextInput v-model="amount" :number="true" placeholder="1" class="w-1/4 text-center text-black font-semibold btn-sm" />
                    <button @click="amount++" class="btn btn-sm">
                        <font-awesome-icon icon="fa-solid fa-plus" />
                    </button>
                </div>
                <button @click="addToCart" class="btn btn-wide text-">+ Keranjang</button>
                <!-- <button class="btn btn-wide text-">Beli</button> -->
            </div>
        </div>
    </div>
</div>

</template>

<script>
import apiHandler from '../features/config/api-handler';
import { useNotificationStore } from '../features/stores/notification';
import utils from '../features/utils'
import TextInput from './components/TextInput.vue';


export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    components: {
        TextInput,
    },
    data() {
        return {
            product: Object,
            images: [],
            amount: 1,
        }
    },
    computed: {
        GetPrice() {
            return utils.FormatCurrency(this.product.Price)
        },
        GetImages() {
            if (this.images.length > 0) return this.images
            return ["https://ik.imagekit.io/reforms/user/default-image.png"]
        }
    },
    methods: {
        async addToCart() {
            const Result = await apiHandler.PRE_API.AddToCart(this.product.Guid, this.amount)
            console.log(Result)

            if (Result.Status == "ok") {
                this.notifStore.addNotif("success", Result.Message)
                return
            }

            if (Result.Status == "bad") {
                this.notifStore.addNotif("error", Result.Message)
            }
        }
    },
    async mounted() {
        const Result = await apiHandler.PRE_API.GetProductByGuid(this.$route.params.guid)
        console.log(Result)
        
        this.product = JSON.parse(Result.Data)
        this.images = JSON.parse(this.product.Image)
    },
    watch: {
        amount(value, oldValue) {
            let amount = parseInt(value)
            if (amount > this.product.Stock) {
                this.amount = this.product.Stock
            }
            else if (amount <= 0) {
                this.amount = 1
            }
        }
    }
}
</script>
