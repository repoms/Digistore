<template>
    <div class="min-h-screen flex flex-col">
        <div class="navbar p-4 flex justify-center z-10 shadow-md gap-10">
            <Navbar />
        </div>
        
        <!-- Content -->
        <div class="flex-1 overflow-y-auto pt-7 px-24">
            <router-view></router-view>
        </div>
    </div>

    <!-- Notification -->
    <div class="toast toast-end toast-top w-1/5 mr-3">
        <Notification v-for="notif in notifStore.listNotif" :notif="notif" />
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Notification from './Notification.vue';
import { useNotificationStore } from '../../features/stores/notification';

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    components: {
        Navbar,
        Notification,
    }
}
</script>
