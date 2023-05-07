

<template>
	<div class="navbar justify-center w-fulls">
		<div class="justtify-self-start">
			<img src="/img/digistore-logo.svg" alt="Logo" class="w-full">
		</div>
		<div class="form-control w-1/2">
			<div class="input-group input-group-sm">
				<span class>

					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</span>

				<input type="text" placeholder="Search…" class="input input-bordered w-full input-sm" />
			</div>
		</div>
		<div class="dropdown dropdown-end m-2">
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
		<div v-if="!isLogin">
			<router-link :to="{name: 'Login'}" class="btn btn-sm bg-white rounded-full border-orange-400 text-orange-400 font-bold">Masuk</router-link>
			<router-link :to="{name: 'Login'}" class="btn btn-sm bg-orange-400 rounded-full border-transparent font-bold  ml-2">Daftar</router-link>
		</div>
		<div v-else>
			<div class="avatar">
				<div class="w-12 rounded-full">
					<img src="https://cdn.discordapp.com/attachments/798846408832712766/1092123425419559094/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["isLogin"]
}
</script>
