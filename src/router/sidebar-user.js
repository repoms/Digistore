
const sidebarRoutes = [
    {
        path: "Profile",
        icon: "fa-solid fa-user",
        name: "Profile",
    },
    {
        path: "Cart",
        icon: "fa-solid fa-cart-shopping",
        name: "Keranjang",
    },
    {
        path: "Invoice",
        icon: "fa-solid fa-truck-fast",
        name: "Pesanan Saya",
    },
    {
        path: "InvoiceDone",
        icon: "fa-solid fa-clipboard",
        name: "Pesanan Selesai",
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
                path: "TokoDelivery",
                icon: "fa-solid fa-parachute-box",
                name: "Pengiriman",
            },
            {
                path: "TokoInvoice",
                icon: "fa-solid fa-clipboard",
                name: "Pesanan Selesai",
            },
        ]
    },
    {
        path: "Settings",
        icon: "fa-solid fa-gear",
        name: "Pengaturan",
    },
]

export default sidebarRoutes
