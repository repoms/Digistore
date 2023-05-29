<template>
    <div class="drawer-side">
        <label for="left-sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
            <!-- Sidebar content here -->
            <li class="mb-2 font-semibold text-xl">
                <router-link :to="{name: 'Home'}">
                    <!-- logo -->
                    <img src="/img/digistore-logo.svg" class="w-48 ml-6">
                </router-link>
            </li>

            <li v-for="route in sidebarRoutes">
                <!-- Menu Sidebar -->
                <SidebarSubmenu :route="route" v-if="route.submenu" />

                <!-- Default -->
                <router-link :to="{ name: route.path }" @click="SetRoute(route)" v-else>
                    <font-awesome-icon :icon="route.icon" class="w-5 h-5" />
                    {{ route.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import sidebarRoutes from '../../../router/sidebar-user';
import SidebarSubmenu from './SidebarSubmenu.vue';
import { useStateStore } from '../../../features/stores/state'

export default {
    setup() {
        const stateStore = useStateStore()
        return { stateStore }
    },
    components: {
        SidebarSubmenu,
    },
    data() {
        return {
            sidebarRoutes,
        }
    },
    methods: {
        SetRoute(route) {
            this.stateStore.setRoute(route)
        }
    }
}
</script>
