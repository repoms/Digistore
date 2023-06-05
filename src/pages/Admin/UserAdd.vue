<template>
	<div class="flex items-center mt-10">
		<div class="card mx-auto w-full max-w-md shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label">
						<span class="text-base font-semibold label-text">Username</span>
					</label>
					<input v-model="username" type="text" class="text-sm input input-bordered" :class="checkUsername" />
				</div>

				<div class="form-control">
					<label class="label">
						<span class="text-base font-semibold label-text">Password</span>
					</label>
					<input @keyup.enter="submit" v-model="password" type="password" class="text-sm input input-bordered" :class="checkPassword" />
				</div>

				<div class="form-control">
					<label class="label">
						<span class="text-base font-semibold label-text">Role</span>
					</label>

					<label class="swap swap-flip">
						<input type="checkbox" v-model="role" />

						<div class="swap-on flex flex-col items-center">
							<font-awesome-icon icon="fa-solid fa-people-carry-box" class="w-24 h-24" />
							<p class="text-lg font-bold mt-2">Kurir</p>
						</div>
						<div class="swap-off flex flex-col items-center">
							<font-awesome-icon icon="fa-solid fa-user" class="w-24 h-24" />
							<p class="text-lg font-bold mt-2">Pembeli atau Penjual</p>
						</div>
					</label>
				</div>

				<div class="form-control">
					<button @click="submit" class="btn rounded-full border-transparent drop-shadow-med bg-primary mt-5">
						Register
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiHandler from '../../features/config/api-handler';
import { useNotificationStore } from '../../features/stores/notification';


export default {
	setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
	data() {
		return {
			username: null,
			password: null,
			role: false,
			errors: 0,
			classError: "input-error",
		};
	},
	computed: {
		checkUsername() {
			if (this.errors == 1 || this.errors == 3) return this.classError
		},
		checkPassword() {
			if (this.errors == 2 || this.errors == 3) return this.classError
		}
	},
	methods: {
		checkForm() {
			this.errors = 0;

			if (!this.username) this.errors += 1;
			if (!this.password) this.errors += 2;
			if (this.errors >= 1) return false;
			return true;
		},
		async submit() {
			if (!this.checkForm()) return;

			let role = this.role ? "kurir" : "user"
			const Result = await apiHandler.PRE_API.Register(this.username, this.password, role)
			
			if (Result.Status == "bad") {
				this.notifStore.addNotif("error", Result.Message)
			}
			else if (Result.Status == "ok") {
				this.notifStore.addNotif("success", Result.Message)
                setTimeout(() => {
                    this.$router.push({ name: "Admin" })
                }, 1000);
			}
		},
	},
};
</script>
