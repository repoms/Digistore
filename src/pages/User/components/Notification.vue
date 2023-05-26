
<template>
    <div v-if="show">
        <div class="alert shadow shadow-gray-600 text-white duration-300 transition-all " :class="alertColor + slideClass" >
            <div>
                <!-- Icon -->
                <font-awesome-icon :icon="['fas', notif.icon]" />
                <div>
                    <h3 class="font-bold">{{ statusField }}</h3>
                    <div class="text-xs">{{ notif.message }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useNotificationStore } from '../../../features/stores/notification'

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    props: ['notif'],
    data() {
        return {
            show: true,
            trans: false,
            countdown: 5,
        }
    },
    methods: {
        countTimer() {
            if (this.countdown > 0) {
                setTimeout(() => {
                    this.countdown--
                    this.trans = true
                    this.countTimer()
                }, 1000)
            } else {
                this.trans = false
                setTimeout(() => {
                    this.show = false
                    this.notifStore.removeNotif()
                    console.log("remove notif")
                }, 1000);
            }
        },
    },
    computed: {
        statusField() {
            return this.notif.status.charAt(0).toUpperCase() + this.notif.status.slice(1)
        },
        alertColor() {
            return " alert-" + this.notif.status
        },
        slideClass() {
            return this.trans ? " translate-x-0 opacity-100 scale-100" : " translate-x-full opacity-0 scale-75"
        }
    },
    mounted() {
        this.countTimer()
    }

}
</script>
