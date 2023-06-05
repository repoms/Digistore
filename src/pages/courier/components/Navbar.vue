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

    <div class="justify-end mr-8 font-semibold text-primary">
        {{ GetSaldo }}
    </div>
</template>


<script>
import apiHandler from '../../../features/config/api-handler';
import { useStateStore } from '../../../features/stores/state';
import utils from '../../../features/utils';

export default {
    setup() {
        const stateStore = useStateStore()
        return { stateStore }
    },
    data() {
        return {
            saldo: 0,
        }
    },
    computed: {
        GetSaldo() {
            return utils.FormatCurrency(this.saldo)
        }
    },
    async mounted() {
        const Result = await apiHandler.PRE_API.GetSaldo()
        console.log(Result)

        if (Result.Status == "ok") {
            this.saldo = parseInt(Result.Data)
        }
    }
}
</script>
