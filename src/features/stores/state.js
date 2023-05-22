import { defineStore } from "pinia";

export const useStateStore = defineStore('state', {
    state() {
        return {
            route: {},
            submenu: {},
        }
    },
    actions: {
        setRoute(new_route) {
            this.route = new_route
            this.submenu = null
        },
        setSubmenu(new_route, new_submenu) {
            this.route = new_route
            this.submenu = new_submenu
        }
    }
})

