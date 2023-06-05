
<template>
    <div class="card card-compact shadow-lg border">
        <div class="card card-compact card-side rounded-b-none border w-full gap-0 h-full">
            <figure class="w-1/3 p-3">
                <img :src="GetFirstImage" alt="Produk" class="rounded-xl aspect-square" />
            </figure>
            <div class="flex flex-col flex-1 py-4 px-1 gap-1">
                <p class="font-bold text-xl">{{ GetTitle }}</p>
                <p class="badge badge-xs p-3 badge-outline">
                    <font-awesome-icon icon="fa-solid fa-shop" class="mr-2" />
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

            <div class="dropdown dropdown-end w-full text-end" v-if="GetStatus.statusCode == 4">
                <label tabindex="0" :class="GetStatus.color" class="btn btn-sm normal-case gap-3 border-0">
                    <font-awesome-icon :icon="['fas', GetStatus.icon]" :class="GetStatus.flip ? '-scale-x-100' : ''" />
                    {{ GetStatus.status }}
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </label>

                <ul tabindex="0" class="dropdown-content menu menu-compact p-2 shadow w-full text-primary-content bg-neutral rounded-lg">
                    <li :class="GetAcceptStatus.color" class="hover:bg-neutral" >
                        <a @click="changeStatus(GetAcceptStatus.statusCode)">
                            <font-awesome-icon :icon="['fas', GetAcceptStatus.icon]" :class="GetAcceptStatus.flip ? '-scale-x-100' : ''" />
                            {{ GetAcceptStatus.status }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="dropdown dropdown-end w-full text-end" v-else-if="GetStatus.statusCode == 5">
                <label tabindex="0" :class="GetStatus.color" class="btn btn-sm normal-case gap-3 border-0">
                    <font-awesome-icon :icon="['fas', GetStatus.icon]" :class="GetStatus.flip ? '-scale-x-100' : ''" />
                    {{ GetStatus.status }}
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </label>

                <ul tabindex="0" class="dropdown-content menu menu-compact p-2 shadow w-full text-primary-content bg-neutral rounded-lg">
                    <li :class="GetDoneStatus.color" class="hover:bg-neutral" >
                        <a @click="changeStatus(GetDoneStatus.statusCode)">
                            <font-awesome-icon :icon="['fas', GetDoneStatus.icon]" :class="GetDoneStatus.flip ? '-scale-x-100' : ''" />
                            {{ GetDoneStatus.status }}
                        </a>
                    </li>
                </ul>
            </div>

            <div :class="GetStatus.color" class="btn btn-sm normal-case gap-3 border-0" v-else>
                <font-awesome-icon :icon="['fas', GetStatus.icon]" :class="GetStatus.flip ? '-scale-x-100' : ''" />
                {{ GetStatus.status }}
            </div>
        </div>
    </div>
</template>


<script>
import { useNotificationStore } from '../../../features/stores/notification'
import utils from '../../../features/utils'
import apiHandler from '../../../features/config/api-handler'

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
        GetStatus() {
            return utils.CodeToStatus(this.invoice.StatusCode)
        },
        GetDate() {
            return new Date(this.invoice.CreatedAt).toLocaleDateString("id", {dateStyle: "full"} )
        },
        GetTitle() {
			if (this.invoice.Title.length > 30) return this.invoice.Title.slice(0, 27) + "..."
            return this.invoice.Title
		},
        GetAcceptStatus() {
            return utils.StatusCode[5]
        },
        GetDoneStatus() {
            return utils.StatusCode[8]
        }
    },
    methods: {
        async changeStatus(statCode) {
            const Result = await apiHandler.PRE_API.UpdateInvoiceStatus(this.invoice.Guid, statCode)
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

