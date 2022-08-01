<script setup lang="ts">
const { width, height } = useWindowSize();
</script>

<template>
    <header class="absolute z-10 w-full flex flex-row justify-between py-7 transition-colors duration-600">

        <nav>
            <ul class="flex flex-row gap-x-6 2xl:gap-x-14 justify-center items-center h-16 pl-8 2xl:pl-16 font-sans sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            </ul>
        </nav>

        <ul class="flex flex-row gap-x-6 2xl:gap-x-14 justify-center items-center h-16 pr-8 2xl:pr-16 font-sans sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            <li>
                <select v-model="$colorMode.preference">
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="sepia">Sepia</option>
                    <option value="maui">Maui</option>
                    <option value="puk">PUK</option>
                </select>
            </li>
            <li>{{ width }} x {{ height }}</li>
            <li v-if="width >= 1536">2xl 1536 (Desktop XXL)</li>
            <li v-else-if="width >= 1280">xl 1280 (Desktop XL)</li>
            <li v-else-if="width >= 1024">lg 1024 (Tablet Landscape, Desktop)</li>
            <li v-else-if="width >= 768">md 768 (Tablet Portrait)</li>
            <li v-else-if="width >= 640">sm 640 (Mobile)</li>
            <li v-else>Base (Mobile)</li>
        </ul>

    </header>
    <div class="relative overflow-hidden items-center h-150 min-h-full text-gray-light bg-blue sm:bg-purple md:bg-pink lg:bg-orange xl:bg-green 2xl:bg-yellow 2xl:bg-[url('/img/Header-Radio.webp')] bg-center bg-cover">
        <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-8xl m-0 font-sans">Ghost</h1>
                <h3 class="text-3xl mt-2 font-sans">The professional publishing platform</h3>
            </div>
        </div>
    </div>
</template>