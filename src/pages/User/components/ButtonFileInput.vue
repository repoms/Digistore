<template>
    <div class="flex flex-col items-center">
        <div class="indicator transition ease-in-out hover:scale-125" v-if="imageUrl">
            <span class="indicator-item">
                <button class="btn btn-xs btn-circle bg-error border-none text-white transition ease-in-out hover:scale-125" @click="RemoveImage">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
            </span>

            <button class="avatar drop-shadow-xl mb-2" @click="onPickFile" >
                <div class="w-24 rounded">
                    <img :src="imageUrl" :alt="name" >
                </div>
            </button>
        </div>
    
        <button class="btn btn-square btn-outline w-24 h-24" @click="onPickFile" v-else>
            <font-awesome-icon icon="fa-solid fa-plus"/>
        </button>
        <input type="file" hidden ref="fileInput" @change="onFilePicked">
    </div>
</template>

<script>
import utils from '../../../features/utils'
import apiHandler from '../../../features/config/api-handler'
import { useNotificationStore } from '../../../features/stores/notification'

const EXTENSION = ["png", "jpg", "jpeg", "webp", "svg"]

export default {
    setup() {
        const notifStore = useNotificationStore()
        return { notifStore }
    },
    props: ["imageSrc"],
    data() {
        return {
            guid: null,
            name: "",
            imageUrl: null,
        }
    },
    methods: {
        imageToUrl(imageFile) {
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(imageFile)
        },
        onPickFile() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
            const files = event.target.files

            // cek sudah ada pick file belum
            if (this.guid) this.RemoveImage()

            // check file extension
            let name = files[0].name
            let ext = name.split('.').pop();
            if (!EXTENSION.includes(ext)) {
                this.notifStore.addNotif("error", "File must be Image", "xmark")
                return
            }
            this.name = name
            
            // convert to url, jadi bisa dipakai sama <img>
            this.imageToUrl(files[0])

            // buat guid
            this.guid = utils.CreateGUID()

            // buat container file
            const fileObj = {
                "guid": this.guid,
                "name": this.name,
                "image": files[0],
            }

            // kirimkan ke parent component
            this.$emit('addFile', fileObj)
        },
        RemoveImage() {
            // beri sinyal ke parent untuk remove file
            this.$emit('removeFile', {
                "guid": this.guid
            })

            this.guid = null
            this.name = null
            this.imageUrl = null
            console.log("remove image")
        }
    },
    async beforeMount() {
        // cek ada input image url dari parent atau gak
        if (!this.imageSrc) return

        // ubah ke blob image
        const Result = await apiHandler.PRE_API.ImageToBlob(this.imageSrc)
        console.log(Result)
        if (Result.Status == "ok") {
            // ekstrak namany
            this.name = this.imageSrc.substring(this.imageSrc.lastIndexOf('/') + 1)
            
            // ubah imageny ke url untuk ditampilkan di page
            let imageFile = new File([Result.Data], this.name)
            this.imageToUrl(imageFile)

            // buat guid
            this.guid = utils.CreateGUID()

            // buat container file
            const fileObj = {
                "guid": this.guid,
                "name": this.name,
                "image": imageFile,
            }

            // kirimkan ke parent component
            this.$emit('addFile', fileObj)
        }
    }
}
</script>
