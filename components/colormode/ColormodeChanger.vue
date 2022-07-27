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
  <div class="p-10 my-10 border flex flex-col gap-5">
    <h2>Color Mode Changer</h2>
    <ul class="flex gap-6">
      <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">{{color}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>