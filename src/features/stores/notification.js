import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', {
    state() {
        return {
            listNotif: [],
        }
    },
    actions: {
        addNotif(status, message, icon) {
            this.listNotif.push({
                status,
                message,
            })
        },
        removeNotif() {
            this.listNotif.shift()
        },
    }
})

