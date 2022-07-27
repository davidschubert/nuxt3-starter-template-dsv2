import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: { global: true, dirs: ['~/components'] },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '~/assets/css/tailwind.css',
        '@/assets/css/main.css'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    }
})
