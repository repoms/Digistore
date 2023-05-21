<template>
	<div class="min-h-screen flex items-center">
		<div class="card mx-auto w-full max-w-md shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="text-center font-semibold" :class="errorClass" v-if="errorMessage.length">
					{{ errorMessage }}
				</div>
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
					<input v-model="password" type="text" class="text-sm input input-bordered" :class="checkPassword" />
				</div>

				<div class="form-control">
					<label class="label">
						<span class="text-base font-semibold label-text">Siapa kamu?</span>
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
					<button @click="submit" class="btn rounded-full border-transparent drop-shadow-med bg-orange-400 mt-5">
						Register
					</button>
				</div>

				<router-link :to="{name: 'Login'}" class="link text-sm text-orange-400 flex justify-center mt-5">
					Sudah punya akun?
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import apiHandler from '../features/config/api-handler';

export default {
	data() {
		return {
			username: null,
			password: null,
			role: false,
			errors: 0,
			classError: "input-error",
			errorMessage: "",
			errorClass: "",
		};
	},
	computed: {
		userDTO() {
			let role = this.role ? "kurir" : "user"
			return {
				"Username": this.username,
				"Password": this.password,
				"Role": role,
			}
		},
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

			const res = await axios.post(apiHandler.BASE_API + apiHandler.END_API.register, this.userDTO)
			const Result = await res.data
			
			this.errorMessage = Result.Message
			if (Result.Status == "bad") this.errorClass = "text-error"
			else if (Result.Status == "ok") this.errorClass = "text-success"
		},
	},
};
</script>
