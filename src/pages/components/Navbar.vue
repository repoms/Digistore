

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
		<router-link :to="{name: 'Cart'}" class="btn btn-ghost btn-circle mr-5" v-if="IsUser">
			<font-awesome-icon icon="fa-solid fa-cart-shopping" />
		</router-link>

		<div class="font-semibold text-primary mr-8" v-if="isAuth && role != 'admin'" >
			{{ GetSaldo }}
		</div>

		<div v-if="!isAuth">
			<router-link :to="{name: 'Login'}" class="btn btn-sm btn-outline rounded-full border-primary text-primary font-bold">Masuk</router-link>
			<router-link :to="{name: 'Register'}" class="btn btn-sm bg-primary rounded-full border-transparent font-bold ml-3">Daftar</router-link>
		</div>
		<div v-else>
			<div class="avatar placeholder">
				<router-link :to="RoleDashboard" class="btn btn-ghost btn-circle ring ring-primary">
					<span class="text-xl font-bold">{{ displayName[0].toUpperCase() }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import apiHandler from '../../features/config/api-handler'
import utils from '../../features/utils'

export default {
	data() {
		return {
			displayName: "",
			isAuth: false,
			role: "",
			saldo: 0,
		}
	},
	computed: {
		RoleDashboard() {
			if (this.role == "user") return { name: 'Profile' }
			if (this.role == "admin") return { name: 'Admin' }
			if (this.role == "kurir") return { name: 'Kurir' }
		},
		GetSaldo() {
            return utils.FormatCurrency(this.saldo)
        },
		IsUser() {
			return this.role == "user"
		}
	},
	async mounted() {
		const Result = await apiHandler.PRE_API.GetSelfInfo()
		const ResultSaldo = await apiHandler.PRE_API.GetSaldo()
		console.log(ResultSaldo)

        if (ResultSaldo.Status == "ok") {
            this.saldo = parseInt(ResultSaldo.Data)
        }

		if (Result.Status == "ok") {
			this.isAuth = true
			const Data = JSON.parse(Result.Data)
			this.displayName = Data.DisplayName
			this.role = Data.Role
		}
	}
}
</script>
