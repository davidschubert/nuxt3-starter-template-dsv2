<template>
  <div>
    <BaseHeader />
    <main class="py-10 flex flex-col justify-center bg-pink max-w-screen-xl items-center my-10">

      <strong>Blog layout</strong><br />
      <br />
      Header slot:<br />
      <br />
      <slot name="header">Default slot content for <code>Custom</code> layout.</slot>
      <slot />

    </main>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  created () {
    console.log('layout created')
  }
}
</script>