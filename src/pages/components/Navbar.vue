

<template>
	<!-- logo -->
	<div class="justify-end w-1/4">
		<img src="/img/digistore-logo.svg" alt="Logo" class="w-52 hover:cursor-pointer" @click="$router.push({name: 'Home'})" >
	</div>

	<!-- search -->
	<div class="w-1/2">
		<div class="form-control w-full">
			<div class="input-group">
				<span>
					<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
				</span>
				<input type="text" placeholder="Search…" class="input input-bordered w-full input-sm" />
			</div>
		</div>
	</div>

	<!-- menu -->
	<div class="justify-start w-1/4 ">
		<div class="dropdown dropdown-end mr-5">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<!-- <span class="badge badge-sm indicator-item">8</span> -->
				</div>
			</label>
			<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
				<div class="card-body">
					<span class="font-bold text-lg">8 Items</span>
					<span class="text-info">Subtotal: $999</span>
					<div class="card-actions">
						<button class="btn btn-primary btn-block">View cart</button>
					</div>
				</div>
			</div>
		</div>

		<div v-if="!isAuth">
			<router-link :to="{name: 'Login'}" class="btn btn-sm btn-outline rounded-full border-primary text-primary font-bold">Masuk</router-link>
			<router-link :to="{name: 'Register'}" class="btn btn-sm bg-primary rounded-full border-transparent font-bold ml-3">Daftar</router-link>
		</div>
		<div v-else>
			<div class="avatar placeholder">
				<router-link :to="{name: 'Profile'}" class="btn btn-ghost btn-circle ring ring-primary">
					<span class="text-xl font-bold">{{ displayName[0].toUpperCase() }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import apiHandler from '../../features/config/api-handler'

export default {
	data() {
		return {
			displayName: "",
			isAuth: false,
		}
	},
	async mounted() {
		const Result = await apiHandler.PRE_API.GetSelfInfo()

		if (Result.Status == "ok") {
			this.isAuth = true
			this.displayName = JSON.parse(Result.Data).DisplayName
		}
	}
}
</script>
