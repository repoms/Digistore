<template>
    <div class="drawer drawer-mobile">
        <!-- for toggle visibility -->
        <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />

        <!-- Content -->
        <div class="drawer-content flex flex-col">
            <div class="navbar flex justify-between bg-base-100 z-10 shadow-md">
                <Navbar />
            </div>
            <div class="flex-1 overflow-y-auto pt-7 px-7">
                <router-view></router-view>
            </div>
        </div>

        <!-- Left Sidebar -->
        <LeftSidebar></LeftSidebar>
    </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue';
import Navbar from './Navbar.vue';

export default {
    components: {
        LeftSidebar,
        Navbar
    }
}
</script>
