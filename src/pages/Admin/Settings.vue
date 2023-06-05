<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">Pengaturan</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6 flex justify-center">
			<button @click="logout" class="btn rounded-full border-transparent drop-shadow-med bg-primary ">Logout</button>
		</div>
	</div>
</template>


<script>
export default {
	methods: {
		logout() {
			localStorage.setItem("token", "")
			this.$router.push({ name: "Home" })
		}
	},
}
</script>

