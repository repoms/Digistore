<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">Profile Settings</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<TextInput title="Nama" v-model="nama" />
				<TextInput title="Username" v-model="username" />
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

