<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">Pesanan Menunggu Di Jemput</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6 grid sm:grid-cols-1 lg:grid-cols-3 gap-3 gap-y-5">
			<OpenOrderCard v-for="invoice in invoices" :invoice="invoice" />
		</div>
	</div>
</template>


<script>
import apiHandler from '../../features/config/api-handler'
import OpenOrderCard from './components/OpenOrderCard.vue'

export default {
	components: {
		OpenOrderCard,
	},
	data() {
		return {
			invoices: []
		}
	},
	async mounted() {
		const Result = await apiHandler.PRE_API.CourierGetOpenOrder()
		console.log(Result)
		
		if (Result.Status == "ok") {
			const Data = JSON.parse(Result.Data)
			console.log(Data)

			this.invoices = Data
		}
	}
}
</script>

