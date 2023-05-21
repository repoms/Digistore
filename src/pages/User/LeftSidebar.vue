<template>
    <div class="drawer-side">
        <label for="left-sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
            <!-- Sidebar content here -->
            <li class="mb-2 font-semibold text-xl">
                <router-link :to="{name: 'Home'}">
                    <!-- logo -->
                    <img src="" class="w-10 mask mask-squircle">
                    Digistore
                </router-link>
            </li>
            <li><router-link :to="{name: 'Profile'}">Profile</router-link></li>
            <li><router-link :to="{name: 'Cart'}">Keranjang</router-link></li>
            <li><router-link :to="{name: 'Profile'}">Pesanan Saya</router-link></li>
            <li><router-link :to="{name: 'Profile'}">Toko</router-link></li>
        </ul>
    </div>
</template>

