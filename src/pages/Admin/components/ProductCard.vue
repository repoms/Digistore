
<template>
    <div class="card card-compact shadow-xl border rounded-md w-full">
        <figure>
            <img :src="GetFirstImage" alt="Produk" class="aspect-square" />
        </figure>
        <div class="card-body gap-0">
            <div class="card-actions justify-end -mt-9 mb-5 -mr-3 ">
				<div class="badge badge-primary rounded-md">
					{{ product.SellerName }}
				</div>
			</div>
            <p class="font-semibold">{{ GetTitle }}</p>
            <div class="text-orange-400 font-semibold w-full">
                {{ GetPrice }}
            </div>
            <div class="font-medium flex justify-start">
                Stok <span class="font-semibold ml-2">{{ product.Stock == 0 ? "Kosong" : product.Stock }}</span>
            </div>

            <div class="card-actions justify-center mt-2">
                <button @click="toEditProduct" class="btn btn-xs bg-primary border-0">Edit</button>
                <label :for="modalId" class="btn btn-xs bg-error border-0">Delete</label>
            </div>
        </div>
    </div>

    <input type="checkbox" :id="modalId" class="modal-toggle">
    <label :for="modalId" class="modal">
        <label class="modal-box relative">
            <h3 class="text-lg font-semibold">{{ product.Title }}</h3>
            <p class="py-2">Apakah kamu yakin ingin menghapus produk ini?</p>

            <div class="modal-action justify-evenly">
                <label :for="modalId" class="btn btn-sm bg-primary border-0">Batal</label>
                <label :for="modalId" @click="toDeleteProduct" class="btn btn-sm bg-error border-0">Iyaa</label>
            </div>
        </label>
    </label>
</template>


<script>
import apiHandler from '../../../features/config/api-handler'
import { useNotificationStore } from '../../../features/stores/notification'
import utils from '../../../features/utils'

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    props: {
        product: {
            type: Object,
            required: true,
            default: {
                "Guid": "1234",
                "Title": "Charger Laptop MSI GL65",
                "Image": "https://media.discordapp.net/attachments/798846408832712766/1092028360777015337/Power-Supply-Adaptor-Charger-Laptop-MSI-GL65-9SD-9SDK-9SE-9SEK-MS-16U5-Leopard-10SCSK-10SCSR.png?width=670&height=670",
                "Price": "Rp999.999",
                "Stock": "10",
            }
        }
    },
    data() {
        return {
            modalId: "",
        }
    },
    computed: {
        GetFirstImage() {
            let image = JSON.parse(this.product.Image)
            if (image.length > 0) return image[0]
            return "https://ik.imagekit.io/reforms/user/default-image.png"
        },
        GetPrice() {
            return utils.FormatCurrency(this.product.Price)
        },
        GetTitle() {
            if (this.product.Title.length > 30) return this.product.Title.slice(0, 27) + "..."
            return this.product.Title
        }
    },
    methods: {
        toEditProduct() {
            this.$router.push({
                name: "AdminEditProduct",
                params: { guid: this.product.Guid }
            })
        },
        async toDeleteProduct() {
            const Result = await apiHandler.PRE_API.SellerDeleteProduct(this.product.Guid)
            console.log(Result)

            if (Result.Status == "ok") {
                this.notifStore.addNotif("success", Result.Message)
                this.$router.go(0);
                return
            }
            
            if (Result.Status == "bad") {
                this.notifStore.addNotif("error", Result.Message)
            }
        }
    },
    mounted() {
        this.modalId = `modal-${this.product.Guid}`
    }
}
</script>

