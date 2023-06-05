
const CreateGUID = () => {
    return String(
        Date.now().toString(32) + Math.random().toString(16)
    ).replace(/\./g, "")
}

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
})

const FormatCurrency = (currency) => {
    return formatter.format(currency).split(',')[0]
}

const StatusCode = [
    {
        "status": "Menunggu Penjual",
        "icon": "business-time",
        "color": "bg-info",
        "statusCode": 0,
    },
    {
        "status": "Diproses Penjual",
        "icon": "box",
        "color": "bg-info",
        "statusCode": 1,
    },
    {
        "status": "Menunggu Kurir",
        "icon": "truck-ramp-box",
        "color": "bg-primary",
        "statusCode": 2,
    },
    {
        "status": "Sedang Dikirim",
        "icon": "truck-fast",
        "color": "bg-primary",
        "statusCode": 3,
    },
    {
        "status": "Sampai di Tujuan",
        "icon": "house-circle-check",
        "color": "bg-success",
        "statusCode": 4,
    },
    {
        "status": "Diterima Pembeli",
        "icon": "box-open",
        "color": "bg-success",
        "statusCode": 5,
    },
    {
        "status": "Dikirim Balik",
        "icon": "truck-fast",
        "flip": true,
        "color": "bg-primary",
        "statusCode": 6,
    },
    {
        "status": "Transaksi Gagal",
        "icon": "circle-xmark",
        "color": "bg-error",
        "statusCode": 7,
    },
    {
        "status": "Pesanan Selesai",
        "icon": "circle-check",
        "color": "bg-success",
        "statusCode": 8,
    },
]

const CodeToStatus = (status) => {
    return StatusCode[status]
}

export default {
    CreateGUID,
    FormatCurrency,
    CodeToStatus,
    StatusCode,
}

