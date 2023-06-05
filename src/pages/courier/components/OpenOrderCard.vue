
<template>
    <div class="indicator w-full">
        <span class="indicator-item indicator-bottom indicator-center badge badge-primary p-3">
            <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
            {{ invoice.BuyerName }}
        </span>
        <div class="card card-compact shadow-lg border">
            <div class="card card-compact card-side rounded-b-none border w-full gap-0 h-full">
                <figure class="w-1/3 p-3">
                    <img :src="GetFirstImage" alt="Produk" class="rounded-xl aspect-square" />
                </figure>
                <div class="flex flex-col flex-1 py-4 px-1 gap-1">
                    <p class="font-bold text-xl">{{ GetTitle }}</p>
                    <p class="badge badge-xs p-3 badge-outline gap-3">
                        <font-awesome-icon icon="fa-solid fa-shop" />
                        {{ invoice.SellerName }}
                    </p>
    
                    <div class="h-full flex flex-col justify-end">
                        <div class="grid grid-cols-3 font-semibold text-xs">
                            <div class="col-start-1">Jumlah</div>
                            <div class="col-span-2">: <span class="ml-1">{{ invoice.Qty }}</span></div>
                            <div class="col-start-1">Tanggal</div>
                            <div class="col-span-2 w-full">: <span class="ml-1">{{ GetDate }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card-body flex-row justify-between">
                <div class="flex flex-col font-bold p-0">
                    <p class="text-xs">Total Harga</p>
                    <h1 class="text-lg -mt-1 truncate">{{ GetPrice }}</h1>
                </div>

                <div @click="changeStatus(3)" class="btn btn-sm normal-case gap-3 border-0 bg-success">
                    <font-awesome-icon icon="fa-solid fa-truck-ramp-box" />
                    Ambil Pesanan
                </div>
            </div>
        </div>
    </div>
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
        invoice: {
            type: Object,
            required: true,
            default: {
                "Guid": "1234",
                "Title": "Charger Laptop MSI GL65",
                "Image": "https://media.discordapp.net/attachments/798846408832712766/1092028360777015337/Power-Supply-Adaptor-Charger-Laptop-MSI-GL65-9SD-9SDK-9SE-9SEK-MS-16U5-Leopard-10SCSK-10SCSR.png?width=670&height=670",
                "Price": "Rp 999.999",
                "Qty": "10",
                "StatusCode": 0,
                "SellerName": "Repoms",
                "BuyerName": "Repoms",
            }
        }
    },
    computed: {
        GetFirstImage() {
            let image = JSON.parse(this.invoice.Image)
            if (image.length > 0) return image[0]
            return "https://ik.imagekit.io/reforms/user/default-image.png"
        },
        GetPrice() {
            let price = this.invoice.Price
            if (price < 0) price = -price
            return utils.FormatCurrency(price)
        },
        GetDate() {
            return new Date(this.invoice.CreatedAt).toLocaleDateString("id", {dateStyle: "full"} )
        },
        GetTitle() {
			if (this.invoice.Title.length > 30) return this.invoice.Title.slice(0, 27) + "..."
            return this.invoice.Title
		},
    },
    methods: {
        async changeStatus(statCode) {
            const Result = await apiHandler.PRE_API.CourierTakeOrder(this.invoice.Guid, statCode)
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
    }
}
</script>

