<template>
	<div class="min-h-screen flex items-center">
		<div class="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="text-center font-semibold text-error" v-if="isFailed">
					Login Failed
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
					<label class="label">
						<a href="#" class="text-s italic label-text-alt link link-hover">Forgot password?</a>
					</label>
				</div>

				<div class="form-control">
					<button @click="submit" class="btn rounded-full border-transparent drop-shadow-med bg-orange-400">
						Login
					</button>
				</div>

				<div class="form-control">
					<label class="scale-[.9] cursor-pointer label justify-center">
						<span class="label-text mr-3">Remember me</span>
						<input type="checkbox" class="checkbox checkbox-warning" />
					</label>
				</div>

				<router-link :to="{name: 'Register'}" class="link text-sm text-orange-400 flex justify-center">
					Don't have an account?
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import apiHandler from '../features/config/api-handler';

export default {
	data() {
		return {
			username: null,
			password: null,
			errors: 0,
			classError: "input-error",
			isFailed: false,
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
			
			const res = await axios.post(apiHandler.BASE_API + apiHandler.END_API.login, {
				"Username": this.username,
				"Password": this.password,
			})
			const Result = await res.data

			if (Result.Status == "bad") return this.isFailed = true

			if (Result.Status == "ok") {
				localStorage.setItem("token", Result.Data)
				return this.$router.push({ name: "Home" })
			}
		},
	},
};
</script>
