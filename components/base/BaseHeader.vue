<template>
    <div>
        <header class="absolute z-10 w-full">
            <nav>
                <ul class="flex flex-row gap-x-6 justify-center items-center h-16">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
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
                </ul>
            </nav>
        </header>
        <div class="relative overflow-hidden items-center h-140 min-h-full text-gray-light bg-blue sm:bg-purple md:bg-pink lg:bg-orange xl:bg-green 2xl:bg-yellow">
            <div class="flex justify-center items-center h-full">
                <div class="text-center text-white px-6 md:px-12">
                    <h1 class="text-8xl font-bold m-0">Ghost</h1>
                    <h3 class="text-3xl font-bold mt-2">The professional publishing platform</h3>
                </div>
            </div>
        </div>
    </div>
</template>