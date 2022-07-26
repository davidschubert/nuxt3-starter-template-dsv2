<template>
  <div class="container">
    <NuxtLayout name="custom">
      The rest of the page
    </NuxtLayout>
    <ColorModePicker />
    <p>Go to <NuxtLink to="/light">light page</NuxtLink></p>
    <br>
    <ColorScheme placeholder="..." tag="span">
      <h1>Color mode: <b>{{ $colorMode.preference }}</b></h1>
      <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span><br>
    </ColorScheme>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
      <option value="maui">Maui</option>
      <option value="puk">PUK</option>
    </select>
    <ColorModeChanger />
  </div>
</template>

<script setup>
  useHead({
      htmlAttrs: {
          lang: 'de'
      },
      title: '🌴 Maui - Blog2',
      meta: [
          { name: 'description', content: `Blog2` },
          { name: 'og:title', content: `Blog2` }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
  })

  const colorMode = useColorMode()
  console.log(colorMode.preference)
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  padding: 5px;
}

p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}

.container {
  text-align: center;
  padding: 50px;
}
</style>