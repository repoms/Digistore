<template>
    <div class="drawer drawer-mobile">
        <!-- for toggle visibility -->
        <input id="left-sidebar-drawer" type="checkbox" class="drawer-toggle" />

        <!-- Content -->
        <div class="drawer-content flex flex-col">
            <slot></slot>
        </div>

        <!-- Left Sidebar -->
        <LeftSidebar></LeftSidebar>
    </div>
</template>

<script>
import LeftSidebar from './LeftSidebar.vue';

export default {
    components: {
        LeftSidebar
    }
}
</script>
