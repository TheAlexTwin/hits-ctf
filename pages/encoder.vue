<script setup>
let message = ""

const isCopied = ref(false)

async function encodeAndCopy(){
    const body = {message: message, key: "rayofsunshinexdd", counter: "rayofsunshinexdd"}

    const data = await $fetch('/api/aesCtrEncode',{
        method: "POST",
        body: body}
    )

    navigator.clipboard.writeText(data);
    isCopied.value = true
}

onMounted(async () => {
    const isAuthorized = localStorage.getItem("isAuthorized")
    if(isAuthorized != "1"){
        await navigateTo('/')
    }
})
</script>

<template>
    <div class="flex items-center justify-center flex-col w-full h-full">
        <div class="text-4xl font-semibold">Encoder</div>
        <input v-model="message" placeholder="message" class="mt-2 bg-ctfpalette-200 text-ctfpalette-300 focus:outline-none focus:bg-ctfpalette-50 px-3 rounded-3xl placeholder:text-ctfpalette-100"/>
        <button @click="encodeAndCopy()" class="my-2 bg-ctfpalette-100 text-ctfpalette-300 hover:bg-ctfpalette-50 px-3 rounded-3xl text-xl transition-all">Encode</button>
        <div v-if="isCopied">Copied</div>
    </div>
</template>