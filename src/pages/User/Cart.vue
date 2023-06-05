
<template>
	<div class="overflow-x-auto w-full">
		<table class="table table-zebra w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Produk</th>
					<th>Stok</th>
					<th>Harga Satuan</th>
					<th>Kuantitas</th>
					<th>Total Harga</th>
					<th>Aksi</th>
				</tr>
			</thead>

			<!-- body -->
			<tbody>
				<!-- row -->
				<tr v-for="cartData in allCart">
					<!-- Produk -->
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="w-24 rounded">
									<img :src="cartData.Image" alt="Produk" />
								</div>
							</div>
							<div>
								<div class="font-bold">
									<span class="hover:cursor-pointer" @click="toProduct(cartData.ProductId)">
										{{ GetTitle(cartData.Title) }}
									</span>
								</div>
								<div class="text-sm opacity-50">{{ cartData.SellerName }}</div>
							</div>
						</div>
					</td>
					<!-- Stok -->
					<td>
						{{ cartData.Stock }}
					</td>
					<!-- Harga Satuan -->
					<td>
						{{ GetPrice(cartData.Price) }}
					</td>
					<!-- Kuantitas -->
					<td class="w-1/12">
						<input :value="cartData.Qty" class="placeholder-black w-3/12 text-center" type="text" disabled />
					</td>
					<!-- Total Harga -->
					<td>
						{{ GetPrice(cartData.TotalPrice) }}
					</td>
					<!-- Tombol -->
					<th>
						<button @click="DeleteCart(cartData.Guid)" class="btn bg-error border-0">Hapus</button>
					</th>
				</tr>
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<!-- Total Semua Harga -->
					<th class="text-lg ">{{ GetPrice(totalPrice) }}</th>
					<th>
						<button @click="Checkout" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary border-0">Checkout</button>
					</th>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
import apiHandler from '../../features/config/api-handler';
import { useNotificationStore } from '../../features/stores/notification';
import utils from '../../features/utils';

export default {
	setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
	data() {
		return {
			allCart: [],
			totalPrice: 0,
		}
	},
	methods: {
		GetTitle(title) {
			if (title.length > 30) return title.slice(0, 27) + "..."
            return title
		},
		GetPrice(price) {
            if (price < 0) price = -price
			return utils.FormatCurrency(price)
		},
		toProduct(guid) {
			this.$router.push({
				name: "ProductDetails",
				params: { guid: guid }
			})
		},
		async DeleteCart(guid) {
			const Result = await apiHandler.PRE_API.DeleteCart(guid)
			console.log(Result)
			
			if (Result.Status == "ok") {
				this.notifStore.addNotif("success", Result.Message)
				this.$router.go(0)
			}
			else if (Result.Status == "bad") {
                this.notifStore.addNotif("error", Result.Message)
            }
		},
		async Checkout() {
			const Result = await apiHandler.PRE_API.Checkout()
			console.log(Result)
			
			if (Result.Status == "ok") {
				this.notifStore.addNotif("success", Result.Message)
				setTimeout(() => {
					this.$router.go(0)
				}, 3000);
			}
			else if (Result.Status == "bad") {
				this.notifStore.addNotif("error", Result.Message)
			}
		}
	},
	async beforeMount() {
		const Result = await apiHandler.PRE_API.GetCart()
		console.log(Result)

		if (Result.Status == "ok") {
			let cartDTO = JSON.parse(Result.Data)
			console.log(cartDTO)
			cartDTO.forEach(async (cartUser) => {
				// ambil produk detail
				let ResultProduk = await apiHandler.PRE_API.GetProductByGuid(cartUser.ProductId)
				// console.log(ResultProduk)
				let produk = JSON.parse(ResultProduk.Data)
				
				let image = JSON.parse(produk.Image)
				if (image.length > 0) image = image[0]
				else image = "https://ik.imagekit.io/reforms/user/default-image.png"

				this.allCart.push({
					"Guid": cartUser.Guid,
					"ProductId": produk.Guid,
					"Title": produk.Title,
					"SellerName": produk.SellerName,
					"Image": image,
					"Stock": produk.Stock,
					"Price": produk.Price,
					"Qty": cartUser.Qty,
					"TotalPrice": cartUser.Price,
				})
				this.totalPrice += cartUser.Price
			});
		}
	}
}
</script>

