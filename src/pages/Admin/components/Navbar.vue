<template>
    <div class="breadcrumbs">
        <ul v-if="stateStore.submenu">
            <li>
                <font-awesome-icon :icon="stateStore.route.icon" class="w-5 h-5 mr-2" />
                {{ stateStore.route.name }}
            </li>
            <li class="font-medium">
                <font-awesome-icon :icon="stateStore.submenu.icon" class="w-5 h-5 mr-2" />
                {{ stateStore.submenu.name }}
            </li>
        </ul>
        
        <ul v-else>
            <li class="font-medium">
                <font-awesome-icon :icon="stateStore.route.icon" class="w-5 h-5 mr-2" />
                {{ stateStore.route.name }}
            </li>
        </ul>
    </div>
</template>


<script>
import { useStateStore } from '../../../features/stores/state';

export default {
    setup() {
        const stateStore = useStateStore()
        return { stateStore }
    },
}
</script>
