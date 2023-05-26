<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">Profile Settings</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6">
			<div class="grid grid-cols-5 gap-6">
				<p class="justify-self-end place-self-center">Nama</p>
				<TextInput v-model="nama" class="col-span-4" />

				<p class="justify-self-end place-self-center">Username</p>
				<TextInput v-model="username" class="col-span-4" />
			</div>

			<div class="mt-16">
				<button class="btn rounded-full border-transparent drop-shadow-med bg-orange-400 float-right">Update</button>
			</div>
		</div>
	</div>
</template>


<script>
import TextInput from './components/TextInput.vue';
import axios from 'axios'
import apiHandler from '../../features/config/api-handler';

export default {
	components: {
		TextInput
	},
    data() {
        return {
            nama: "",
            username: "",
        }
    },
	async mounted() {
		const TOKEN = localStorage.getItem("token")
		const res = await axios.get(
			apiHandler.BASE_API + apiHandler.END_API.user,
			{ headers: { 'Authorization': 'Bearer ' + TOKEN }}
		)
		console.log(res.data.Data)

		const Result = await res.data
		const Data = JSON.parse(Result.Data)
		this.nama = Data.DisplayName
		this.username = Data.Username
	}
}
</script>

