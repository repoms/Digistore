<template>
<Layout>
	<div class="flex-1 overflow-y-auto pt-14 px-10">
		<div class="card w-full items-center bg-base-100 p-6 mt-2 shadow-xl">
			<div class="text-xl font-semibold">Profile Settings</div>
			<div class="divider mt-2"></div>
			<div class="h-full w-full pb-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="form-control w-full">
						<label class="label">
							<span class="text-base label-text">Nama</span>
						</label>
						<input v-model="nama" type="text" class="text-sm input input-bordered" />
					</div>
					<div class="form-control w-full">
						<label class="label">
							<span class="text-base label-text">Username</span>
						</label>
						<input v-model="nama" type="text" class="text-sm input input-bordered" />
					</div>
				</div>

				<div class="mt-16">
					<button class="btn rounded-full border-transparent drop-shadow-med bg-orange-400 float-right">Update</button>
				</div>
			</div>
		</div>
	</div>
</Layout>
</template>

<script>
import Layout from './Layout.vue'

export default {
	components: {
		Layout,
	},
    data() {
        return {
            nama: null,
        }
    }
}
</script>

