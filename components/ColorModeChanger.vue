<script>
  export default {
    data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia', 'maui', 'puk']
      }
    }
  }
</script>

<template>
  <div>
    <h2>Color Mode Changer</h2>
    <ul>
      <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">{{color}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>