
<template>
    <div class="card card-compact shadow-xl border rounded-md w-full">
        <figure>
            <img :src="product.Image" alt="Produk" />
        </figure>
        <div class="card-body gap-0">
            <p class="font-semibold">{{ product.Name }}</p>
            <div class="text-orange-400 font-semibold w-full">
                {{ product.Price }}
            </div>
            <div class="font-medium flex justify-start">
                Stok <span class="font-semibold ml-2">{{ product.Stock }}</span>
            </div>
            <p class="text-xs">Penjualan {{ product.Sold }}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
            default: {
                "Name": "Charger Laptop MSI GL65",
                "Image": "https://media.discordapp.net/attachments/798846408832712766/1092028360777015337/Power-Supply-Adaptor-Charger-Laptop-MSI-GL65-9SD-9SDK-9SE-9SEK-MS-16U5-Leopard-10SCSK-10SCSR.png?width=670&height=670",
                "Price": "Rp999.999",
                "Stock": "10",
                "Sold": "100"
            }
        }
    }
}
</script>

