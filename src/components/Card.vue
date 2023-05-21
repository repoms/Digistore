<template>
	<div class="p-1.5 md:w-1/3 xl:w-1/6">
		<div class="card card-compact bg-base-100 shadow-xl w-full">
			<figure><img :src="product.Image" alt="Shoes" /></figure>
			<div class="card-body gap-0">
				<h2 class="card-title text-sm font-semibold">
					{{ product.Name }}
				</h2>
				<p class="font-bold text-base">Rp {{ product.Price }}</p>
				<!-- <div class="badge bg-orange-400 border-none font-semibold">
					<span class="text-xs">Rp</span>
					{{ product.Price }}
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["product"]
}
</script>