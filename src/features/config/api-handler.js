import axios from "axios"

const BASE_API = "https://localhost:44347/api/"
const END_API = {
    login: "login/",
    islogin: "islogin/",
    register: "register/",
    role: "role/",
    user: "user/",
    product: "product/",
    productUser: "product/user/",
    productUpdate: "product/update/",
    productLatest: "product/latest/",
}

const ErrorHandle = (error) => {
    console.log(error)
    return {
        "Status": "bad",
        "Message": error
    }
}

const ImageToBlob = async (imageUrl) => {
    try {
        const res = await fetch(imageUrl)
        console.log(res)
        return {
            "Status": "ok",
            "Message": "Get Image",
            "Data": await res.blob(),
        }
    } catch (error) {
        ErrorHandle(error)
    }
}

const Islogin = async () => {
    try {
        const res = await axios.get(
            BASE_API + END_API.islogin,
            { headers: { 'Authorization': 'Bearer ' + TOKEN }}
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const Login = async (username, password) => {
    try {
        const res = await axios.post(BASE_API + END_API.login, {
            "Username": username,
            "Password": password,
        })

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const Register = async (username, password, role) => {
    try {
        const res = await axios.post(BASE_API + END_API.register, {
            "Username": username,
            "Password": password,
            "Role": role
        })

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetSelfInfo = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
			BASE_API + END_API.user,
			{ headers: { 'Authorization': 'Bearer ' + TOKEN }}
		)

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetProductsByUser = async (guid) => {
    try {
        const res = await axios.get(BASE_API + END_API.productUser + guid)
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetProductByGuid = async (guid) => {
    try {
        const res = await axios.get(BASE_API + END_API.product + guid)
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetLatestProduct = async () => {
    try {
        const res = await axios.get(BASE_API + END_API.productLatest)
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const UserUpdateUser = async (displayName) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.user,
            { "DisplayName": displayName },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const SellerAddNewProduct = async (formData) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.product,
            formData,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
            
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const SellerUpdateProduct = async (formData) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.productUpdate,
            formData,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const SellerDeleteProduct = async (guid) => {
    try {
        const TOKEN = localStorage.getItem("token")
        console.log(BASE_API + END_API.product + guid)
        const res = await axios.delete(
            BASE_API + END_API.product + guid,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}


export default {
    BASE_API,
    END_API,
    PRE_API: {
        Islogin,
        Login,
        Register,
        ImageToBlob,
        GetSelfInfo,
        GetProductsByUser,
        GetProductByGuid,
        GetLatestProduct,
        UserUpdateUser,
        SellerAddNewProduct,
        SellerUpdateProduct,
        SellerDeleteProduct,
    }
}
