
<template>
    <div class="indicator w-full">
        <span class="badge badge-primary indicator-item indicator-center">{{ user.Role }}</span>
        <div class="card card-compact shadow-xl border rounded-md w-full">
            <div class="card-body gap-0 items-center">
                <p class="font-semibold text-lg">{{ user.DisplayName }}</p>
                <p class="text-sm -mt-1 mb-2">{{ user.Username }}</p>
                <div class="text-orange-400 font-semibold w-full text-center">
                    {{ GetSaldo }}
                </div>
    
                <div class="card-actions justify-center mt-2">
                    <button @click="toEditUser" class="btn btn-xs bg-primary border-0">Edit</button>
                    <label :for="modalId" class="btn btn-xs bg-error border-0">Delete</label>
                </div>
            </div>
        </div>
    </div>

    <input type="checkbox" :id="modalId" class="modal-toggle">
    <label :for="modalId" class="modal">
        <label class="modal-box relative">
            <h3 class="text-lg font-semibold">{{ user.DisplayName }}</h3>
            <p class="py-2">Apakah kamu yakin ingin menghapus user ini?</p>

            <div class="modal-action justify-evenly">
                <label :for="modalId" class="btn btn-sm bg-primary border-0">Batal</label>
                <label :for="modalId" @click="toDeleteUser" class="btn btn-sm bg-error border-0">Iyaa</label>
            </div>
        </label>
    </label>
</template>


<script>
import apiHandler from '../../../features/config/api-handler'
import { useNotificationStore } from '../../../features/stores/notification'
import utils from '../../../features/utils'

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    props: {
        user: {
            type: Object,
            required: true,
            default: {
                "Guid": "1234",
                "Username": "aa",
                "DisplayName": "Nama",
                "Role": "user",
                "Saldo": 999999,
            }
        }
    },
    data() {
        return {
            modalId: "",
        }
    },
    computed: {
        GetSaldo() {
            return utils.FormatCurrency(this.user.Saldo)
        }
    },
    methods: {
        toEditUser() {
            this.$router.push({
                name: "AdminEditUser",
                params: { guid: this.user.Guid }
            })
        },
        async toDeleteUser() {
            const Result = await apiHandler.PRE_API.DeleteUser(this.user.Guid)
            console.log(Result)

            if (Result.Status == "ok") {
                this.notifStore.addNotif("success", Result.Message)
                this.$router.go(0);
                return
            }
            
            if (Result.Status == "bad") {
                this.notifStore.addNotif("error", Result.Message)
            }
        }
    },
    mounted() {
        this.modalId = `modal-${this.user.Guid}`
    }
}
</script>

