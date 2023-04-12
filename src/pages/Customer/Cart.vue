
<template>
	<Navbar :isLogin="true" />

	<BaseLayout>
		<div class="container mx-auto w-3/4 py-10">
			<div class="overflow-x-auto w-full">
				<table class="table w-full">
					<!-- head -->
					<thead>
						<tr>
							<th>Produk</th>
							<th>Stok</th>
							<th>Harga Satuan</th>
							<th>Kuantitas</th>
							<th>Total Harga</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="w-24 rounded">
											<img src="https://media.discordapp.net/attachments/798846408832712766/1092028360777015337/Power-Supply-Adaptor-Charger-Laptop-MSI-GL65-9SD-9SDK-9SE-9SEK-MS-16U5-Leopard-10SCSK-10SCSR.png?width=670&height=670"
												alt="Produk" />
										</div>
									</div>
									<div>
										<div class="font-bold">Charger Laptop MSI GL65</div>
										<div class="text-sm opacity-50">Linkurys Store</div>
									</div>
								</div>
							</td>
							<td>
								10
							</td>
							<td>
								Rp420.000
							</td>
							<td class="w-1/12">
								<button class="btn btn-xs">-</button>
								<input class="placeholder-black w-3/12 text-center" type="text" placeholder="1" />
								<button class="btn btn-xs">+</button>
							</td>
							<td>
								Rp420.000
							</td>
							<th>
								<button class="btn btn-ghost btn-xs">Hapus</button>
							</th>
						</tr>
						<!-- row 2 -->
						<tr>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="w-24 rounded">
											<img src="https://media.discordapp.net/attachments/798846408832712766/1092039421047607356/5b60230f491e6.png?width=670&height=670"
												alt="Produk" />
										</div>
									</div>
									<div>
										<div class="font-bold">Headset MSI DS502</div>
										<div class="text-sm opacity-50">Repom Store</div>
									</div>
								</div>
							</td>
							<td>
								3
							</td>
							<td>
								Rp580.000
							</td>
							<td class="w-1/12">
								<button class="btn btn-xs">-</button>
								<input class="placeholder-black w-3/12 text-center" type="text" placeholder="1" />
								<button class="btn btn-xs">+</button>
							</td>
							<td>
								Rp580.000
							</td>
							<th>
								<button class="btn btn-ghost btn-xs">Hapus</button>
							</th>
						</tr>
						<!-- row 3 -->
						<tr>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="w-24 rounded">
											<img src="https://media.discordapp.net/attachments/798846408832712766/1092040328296529920/Seagate-Hardisk-Expansion-Black-4.png?width=670&height=670"
												alt="Produk" />
										</div>
									</div>
									<div>
										<div class="font-bold">Harddisk Eksternal Seagate 1TB</div>
										<div class="text-sm opacity-50">Gerbang Laut Store</div>
									</div>
								</div>
							</td>
							<td>
								2
							</td>
							<td>
								Rp650.000
							</td>
							<td class="w-1/12">
								<button class="btn btn-xs">-</button>
								<input class="placeholder-black w-3/12 text-center" type="text" placeholder="2" />
								<button class="btn btn-xs">+</button>
							</td>
							<td>
								Rp1.300.000
							</td>
							<th>
								<button class="btn btn-ghost btn-xs">Hapus</button>
							</th>
						</tr>
						<!-- row 4 -->
						<tr>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="w-24 rounded">
											<img src="https://media.discordapp.net/attachments/798846408832712766/1092041750899593216/49f8c63d-325a-4c6f-a85a-fc8e561359b3.png?width=625&height=625"
												alt="Produk" />
										</div>
									</div>
									<div>
										<div class="font-bold">Controller PS4 Ori Pabrik</div>
										<div class="text-sm opacity-50">StasiunMain Store Unofficial</div>
									</div>
								</div>
							</td>
							<td>
								999
							</td>
							<td>
								Rp100.000
							</td>
							<td class="w-1/12">
								<button class="btn btn-xs">-</button>
								<input class="placeholder-black w-3/12 text-center" type="text" placeholder="2" />
								<button class="btn btn-xs">+</button>
							</td>
							<td>
								Rp100.000
							</td>
							<th>
								<button class="btn btn-ghost btn-xs">Hapus</button>
							</th>
						</tr>
					</tbody>
					<!-- foot -->
					<tfoot>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>
								Total : Rp2.500.000</th>
							<th>
								<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Checkout</button>
							</th>
						</tr>
					</tfoot>
		
				</table>
			</div>
		</div>
	</BaseLayout>
</template>

<script>

</script>
