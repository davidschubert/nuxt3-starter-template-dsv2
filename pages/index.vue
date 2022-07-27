<template>
  <HomeHello />
  <section class="slide">
    <div class="max-w-screen-xl">
      <ColormodePicker />
      <ColorScheme placeholder="..." tag="span">
        <h1>Color mode: <b>{{ $colorMode.preference }}</b></h1>
        <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
      <ColormodeChanger />
    </div>
  </section>
</template>

<script setup>
  useHead({
      htmlAttrs: {
          lang: 'de'
      },
      title: '🌴 Home - Maui',
      meta: [
          { name: 'description', content: `Blog2` },
          { name: 'og:title', content: `Blog2` }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
  })

  /*const colorMode = useColorMode()
  console.log(colorMode.preference)*/
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
</style>