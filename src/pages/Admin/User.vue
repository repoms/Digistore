
<template>
    <div class="card min-w-min p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">
            User
            <span @click="$router.push({ name: 'AdminAddUser' })" class="btn btn-sm bg-primary border-0 float-right">Add New User</span>
        </div>

        <div class="divider"></div>

        <!-- Konten -->
        <div class="w-full h-full pb-6 grid grid-cols-6 gap-3 gap-y-5">
            <UserCard v-for="user in users" :user="user" />
        </div>
    </div>
</template>


<script>
import apiHandler from '../../features/config/api-handler'
import UserCard from './components/UserCard.vue';

export default {
    components: {
        UserCard,
    },
    data() {
        return {
            users: []
        }
    },
    async mounted() {
        const Result = await apiHandler.PRE_API.GetAllUser()
        console.log(Result)

        if (Result.Status == "ok") {
            this.users = JSON.parse(Result.Data)
            console.log(this.users)
            return
        }
        
        if (Result.Status == "bad") {
            console.log(Result.Message)
        }
    }
}
</script>
