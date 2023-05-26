
<template>
    <div class="flex-col">
        <!-- Menu -->
        <div class="w-full" @click="isExpanded = !isExpanded">
            <font-awesome-icon :icon="route.icon" class="w-5 h-5 mr-2" />
            {{ route.name }}
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="w-5 h-5 mt-1 float-right delay-300 duration-500 transition-all" :class="isExpanded? 'rotate-180' : ''" />
        </div>

        <!-- Submenu -->
        <div class="w-full" v-if="isExpanded">
            <ul class="menu menu-compact">
                <li v-for="submenu in route.submenu">
                    <router-link :to="{ name: submenu.path }" @click="SetRoute(submenu)">
                        <font-awesome-icon :icon="submenu.icon" class="w-5 h-5" />
                        {{ submenu.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { useStateStore } from '../../../features/stores/state'

export default {
    setup() {
        const stateStore = useStateStore()
        return { stateStore }
    },
    props: ["route"],
    data() {
        return {
            isExpanded: false,
        }
    },
    methods: {
        SetRoute(submenu) {
            this.stateStore.setSubmenu(this.route, submenu)
        }
    }
}
</script>
