<script setup lang="ts">
const { width, height } = useWindowSize()
</script>

<template>
    <div>
        <header class="absolute z-10 w-full flex flex-row justify-between">
            <nav>
                <ul class="flex flex-row gap-x-6 justify-center items-center h-16 pl-8">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                </ul>
            </nav>
            <ul class="flex flex-row gap-x-6 justify-center items-center h-16 pr-8">
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
        <div class="relative overflow-hidden items-center h-150 min-h-full text-gray-light bg-blue sm:bg-purple md:bg-pink lg:bg-orange xl:bg-green 2xl:bg-gray-dark">
            <div class="flex justify-center items-center h-full">
                <div class="text-center text-white px-6 md:px-12">
                    <h1 class="text-8xl font-bold m-0">Ghost</h1>
                    <h3 class="text-3xl font-bold mt-2">The professional publishing platform</h3>
                </div>
            </div>
        </div>
    </div>
</template>