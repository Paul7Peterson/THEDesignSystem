<script setup lang="ts">
  import { ref } from 'vue';

  const hasLogo = ref(true);
  const text = ref('Pablo');
</script>

<template>
  <z-text-input
    :text="text"
    @change:text="(e) => text = e.detail"
  />

  <hr>

  <input v-model="text">

  <hr>

  <z-icon icon="cross" />

  <test-lit
    :has-logo="hasLogo"
    :text="text"
  >
    <img
      src="./assets/Paul.jpg"
      alt="Picture"
    >
  </test-lit>
</template>

<style lang="scss">
  :root {
    --text-color: rgb(186, 248, 128);
    --logo-background-color: #a3f4cc;
  }
</style>
