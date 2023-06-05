import axios from "axios"

const BASE_API = "https://localhost:44347/api/"
const END_API = {
    login: "login/",
    islogin: "islogin/",
    register: "register/",
    role: "role/",
    user: "user/",
    userAdmin: "user/admin/",
    userAll: "user/all/",
    product: "product/",
    productUser: "product/user/",
    productUpdate: "product/update/",
    productLatest: "product/latest/",
    cart: "cart/",
    invoice: "invoice/",
    invoiceCancel: "invoice/cancel",
    invoiceSeller: "invoice/seller",
    invoiceSellerDone: "invoice/seller/done",
    invoiceDone: "invoice/done/",
    invoiceAll: "invoice/all/",
    invoiceStatus: "invoice/status/",
    invoiceStatusReturn: "invoice/status/return",
    checkout: "invoice/checkout/",
    saldo: "invoice/saldo/",
    courier: "courier/",
    courierOrder: "courier/order/",
    courierDone: "courier/done/",
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

const AdminUpdateUser = async (guid, displayName, username) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.userAdmin,
            {
                "Guid": guid,
                "Username": username,
                "DisplayName": displayName,
            },
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
        const res = await axios.delete(
            BASE_API + END_API.product + guid,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const SellerGetInvoice = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.invoiceSeller,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const SellerGetInvoiceDone = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.invoiceSellerDone,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const AddToCart = async (productId, qty) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.cart,
            { "ProductId": productId, "Qty": qty },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetCart = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.cart,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const DeleteCart = async (guid) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.delete(
            BASE_API + END_API.cart + guid,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const Checkout = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.checkout,
            {},
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetSaldo = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.saldo,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetInvoiceUser = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.invoice,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetInvoiceDoneUser = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.invoiceDone,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetAllInvoice = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.invoiceAll,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const UpdateInvoiceStatus = async (guid, statCode) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.invoiceStatus,
            { "Guid": guid, "StatusCode": statCode },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const InvoiceStatusReturn = async (guid, statCode) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.invoiceStatusReturn,
            { "Guid": guid, "StatusCode": statCode },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetAllUser = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.userAll,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const GetUserByGuid = async (guid) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.user + guid,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const AddSaldo = async (guid, saldo) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.saldo,
            {
                "UserId": guid,
                "Saldo": saldo,
            },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const ReduceSaldo = async (guid, saldo) => {
    return AddSaldo(guid, -saldo)
}

const DeleteUser = async (guid) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.delete(
            BASE_API + END_API.user + guid,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )

        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const CourierGetOpenOrder = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.courier,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const CourierGetOrder = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.courierOrder,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const CourierGetOrderDone = async () => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.get(
            BASE_API + END_API.courierDone,
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const CourierTakeOrder = async (guid, statCode) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.courier,
            { "Guid": guid, "StatusCode": statCode },
            { headers: { "Authorization": "Bearer " + TOKEN } }
        )
    
        return res.data
    } catch (error) {
        return ErrorHandle(error)
    }
}

const RemoveInvoice = async (guid) => {
    try {
        const TOKEN = localStorage.getItem("token")
        const res = await axios.post(
            BASE_API + END_API.invoiceCancel,
            { "Guid": guid },
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
        AdminUpdateUser,
        SellerAddNewProduct,
        SellerUpdateProduct,
        SellerDeleteProduct,
        SellerGetInvoice,
        SellerGetInvoiceDone,
        AddToCart,
        GetCart,
        DeleteCart,
        Checkout,
        GetSaldo,
        GetInvoiceUser,
        GetInvoiceDoneUser,
        GetAllInvoice,
        UpdateInvoiceStatus,
        InvoiceStatusReturn,
        GetAllUser,
        GetUserByGuid,
        DeleteUser,
        AddSaldo,
        ReduceSaldo,
        CourierGetOpenOrder,
        CourierTakeOrder,
        CourierGetOrder,
        CourierGetOrderDone,
        RemoveInvoice,
    }
}
