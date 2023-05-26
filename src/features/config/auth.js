
import axios from "axios";
import apiHandler from "./api-handler";


const checkAuth = async (to, from) => {
    const TOKEN = localStorage.getItem("token")

    // No Token
    if (!TOKEN && to.meta.requiresAuth) return { name: "Login", redirect: to.fullPath }

    // Public Page
    if (!to.meta.role) return

    // Auth Page
    let res = null
    let access = null
    try {
        res = await axios.post(
            apiHandler.BASE_API + apiHandler.END_API.role,
            { "Role": to.meta.role },
            { headers: { 'Authorization': 'Bearer ' + TOKEN }}
        )
        access = await res.data
        console.log(res.status)
    } catch (error) {
        console.log(error)
        return { name: "Login", redirect: to.fullPath }
    }

    // Unauthorized
    if (res.status == 401) return { name: "Login", redirect: to.fullPath }

    // Access Denied
    if (access.Status == "bad") {
        console.log(access.Message)
        return { name: "Home" }
    }
    
    // Authorized
    if (access.Status == "ok") return
}

export default checkAuth