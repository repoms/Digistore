<template>
	<div class="card min-w-min p-6 shadow-xl bg-base-100">
		<!-- Title -->
		<div class="text-xl font-semibold">
			<span class="text-primary">{{ GetRole }}</span> Settings
		</div>

		<div class="divider mt-2"></div>

		<!-- Content -->
		<div class="h-full w-full pb-6">
			<div class="grid grid-cols-5 gap-6">
				<p class="justify-self-end place-self-center col-start-1">Name</p>
				<TextInput v-model="displayName" class="col-span-3" />
				<p class="justify-self-end place-self-center col-start-1">Username</p>
				<TextInput v-model="username" class="col-span-3" />

				<p class="justify-self-end place-self-center col-start-1">Saldo</p>
				<!-- <TextInput v-model="saldo" disabled class="col-span-3" /> -->
				<div class="input-group col-span-3">
					<span>Rp</span>
					<TextInput v-model="saldo" :number="true" placeholder="0" disabled class="w-full" />
                </div>
				
				<p class="justify-self-end place-self-start pt-4 col-start-1">Input Saldo</p>
				<div class="form-control col-span-3">
					<div class="input-group">
						<span>Rp</span>
						<TextInput v-model="inputSaldo" :number="true" placeholder="0" class="w-full" />
					</div>
					<label class="label">
						<div class="label-text-alt">
							<span @click="tambahSaldo" class="btn btn-xs text-white rounded-full border-transparent drop-shadow-med bg-primary mr-4">Tambah Saldo</span>
							<span @click="kurangSaldo" class="btn btn-xs text-white rounded-full border-transparent drop-shadow-med bg-primary">Kurangi Saldo</span>
						</div>
					</label>
				</div>
			</div>
			
			<button @click="updateUser" class="btn btn-wide rounded-full border-transparent drop-shadow-med bg-primary float-right">Update</button>
		</div>
	</div>

	<div class="modal" :class="checkLoading">
        <font-awesome-icon icon="fa-solid fa-spinner" class="animate-spin w-36 h-36" />
    </div>
</template>


<script>
import TextInput from '../components/TextInput.vue';
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
			role: "",
			saldo: 0,
			inputSaldo: null,
			loading: false,
        }
    },
	computed: {
		checkLoading() {
            return this.loading ? " modal-open" : ""
        },
		GetRole() {
			return this.role.charAt(0).toUpperCase() + this.role.slice(1)
		}
	},
	methods: {
		async updateUser() {
			if (!this.displayName || !this.username) {
				this.notifStore.addNotif("error", "Fill in empty field")
				return
			}
			
			this.loading = true
			const Result = await apiHandler.PRE_API.AdminUpdateUser(this.$route.params.guid, this.displayName, this.username)

			if (Result.Status == "ok") {
				this.loading = false
				this.notifStore.addNotif("success", Result.Message)
				return
			}
			
			if (Result.Status == "bad") {
				this.loading = false
                this.notifStore.addNotif("error", Result.Message)
            }
		},
		async tambahSaldo() {
			if (this.inputSaldo == null) this.inputSaldo = 0

			this.loading = true
			const Result = await apiHandler.PRE_API.AddSaldo(this.$route.params.guid, this.inputSaldo)

			if (Result.Status == "ok") {
				this.loading = false
				this.notifStore.addNotif("success", Result.Message)
				this.$router.go(0)
				return
			}
			
			if (Result.Status == "bad") {
				this.loading = false
                this.notifStore.addNotif("error", Result.Message)
            }
		},
		async kurangSaldo() {
			if (this.inputSaldo == null) this.inputSaldo = 0

			this.loading = true
			const Result = await apiHandler.PRE_API.ReduceSaldo(this.$route.params.guid, this.inputSaldo)

			if (Result.Status == "ok") {
				this.loading = false
				this.notifStore.addNotif("success", Result.Message)
				this.$router.go(0)
				return
			}
			
			if (Result.Status == "bad") {
				this.loading = false
                this.notifStore.addNotif("error", Result.Message)
            }
		}
	},
	async mounted() {
		const Result = await apiHandler.PRE_API.GetUserByGuid(this.$route.params.guid)
		console.log(Result)
		const Data = JSON.parse(Result.Data)
		this.displayName = Data.DisplayName
		this.username = Data.Username
		this.saldo = Data.Saldo
		this.role = Data.Role
	}
}
</script>

