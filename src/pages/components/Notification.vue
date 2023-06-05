
<template>
    <div v-if="show">
        <div class="alert shadow shadow-gray-600 text-white duration-300 transition-all " :class="alertColor + slideClass" >
            <div>
                <!-- Icon -->
                <font-awesome-icon :icon="['fas', iconClass]" />
                <div>
                    <h3 class="font-bold">{{ statusField }}</h3>
                    <div class="text-xs">{{ notif.message }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useNotificationStore } from '../../features/stores/notification'

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
            if (this.notif.status == "success") return "alert-success"
            else if (this.notif.status == "error") return "alert-error"
        },
        slideClass() {
            return this.trans ? " translate-x-0 opacity-100 scale-100" : " translate-x-full opacity-0 scale-75"
        },
        iconClass() {
            if (this.notif.status == "success") return "circle-check"
            else if (this.notif.status == "error") return "xmark"
        }
    },
    mounted() {
        setTimeout(() => {
            this.trans = true
        }, 300);
        
        this.countTimer()
    }

}
</script>
