
const sidebarRoutes = [
    {
        path: "Profile",
        icon: "fa-solid fa-user",
        name: "Profile",
    },
    {
        path: "",
        icon: "fa-solid fa-cart-shopping",
        name: "Keranjang",
    },
    {
        path: "",
        icon: "fa-solid fa-clipboard",
        name: "Pesanan Saya",
    },
    {
        path: "",
        icon: "fa-solid fa-shop",
        name: "Toko",
        submenu: [
            {
                path: "TokoProduct",
                icon: "fa-solid fa-gifts",
                name: "Produk",
            },
            {
                path: "TokoNewProduct",
                icon: "fa-solid fa-circle-plus",
                name: "Tambah Produk",
            },
            {
                path: "",
                icon: "fa-solid fa-parachute-box",
                name: "Pengiriman",
            },
            {
                path: "",
                icon: "fa-solid fa-gear",
                name: "Pengaturan",
            },
        ]
    },
]

export default sidebarRoutes
