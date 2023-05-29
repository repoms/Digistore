<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">Profile Settings</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6">
			<div class="grid grid-cols-5 gap-6">
				<p class="justify-self-end place-self-center">Nama</p>
				<TextInput v-model="displayName" class="col-span-4" />

				<p class="justify-self-end place-self-center">Username</p>
				<TextInput v-model="username" class="col-span-4" disabled />
			</div>

			<div class="mt-16">
				<button @click="updateUser" class="btn rounded-full border-transparent drop-shadow-med bg-primary float-right">Update</button>
			</div>
		</div>
	</div>

	<div class="modal" :class="checkLoading">
        <font-awesome-icon icon="fa-solid fa-parachute-box" class="animate-spin w-36 h-36" />
    </div>
</template>


<script>
import TextInput from './components/TextInput.vue';
import apiHandler from '../../features/config/api-handler';
import { useNotificationStore } from '../../features/stores/notification';

export default {
	setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
	components: {
		TextInput
	},
    data() {
        return {
            displayName: "",
            username: "",
			loading: false,
        }
    },
	computed: {
		checkLoading() {
            return this.loading ? " modal-open" : ""
        }
	},
	methods: {
		async updateUser() {
			if (!this.displayName) {
				this.notifStore.addNotif("error", "Fill in your Name", "xmark")
				return
			}
			
			this.loading = true
			const Result = await apiHandler.PRE_API.UserUpdateUser(this.displayName)

			if (Result.Status == "ok") {
				this.loading = false
				this.notifStore.addNotif("success", Result.Message, "circle-check")
				return
			}
			
			if (Result.Status == "bad") {
				this.loading = false
                this.notifStore.addNotif("error", Result.Message, "xmark")
            }
		}
	},
	async mounted() {
		const Result = await apiHandler.PRE_API.GetSelfInfo()
		console.log(Result)
		const Data = JSON.parse(Result.Data)
		this.displayName = Data.DisplayName
		this.username = Data.Username
	}
}
</script>

