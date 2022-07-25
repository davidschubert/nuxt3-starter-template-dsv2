import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: { global: true, dirs: ['~/components'] },
    modules: ['@nuxtjs/color-mode']
})
