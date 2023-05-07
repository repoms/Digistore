
<template>
    <div class="drawer drawer-mobile">
        <!-- for toggle visibility -->
        <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content flex flex-col">
            <!-- Content here -->
            <div class="flex-1 overflow-y-auto pt-14 px-10">
                <div class="card w-full items-center bg-base-100 p-6 mt-2 shadow-xl">
                    Form Produk
                </div>
            </div>
        </div>

        <div class="drawer-side">
            <label for="left-sidebar-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-base-100">
                <!-- Sidebar content here -->
                <li><a>Home</a></li>
                <li><a>Product</a></li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {

}
</script>
