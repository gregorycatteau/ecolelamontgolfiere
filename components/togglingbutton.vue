<template>
  <label class="switch">
    <input class="switch__input" type="checkbox" role="switch" v-model="darkMode" @change="toggleDarkMode">
    <Icon v-if="!darkMode" class="switch__icon switch__icon--light" name="line-md:sunny-outline-twotone-loop"></Icon>
    <Icon v-else class="switch__icon switch__icon--dark" name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"></Icon>
    
  </label>
</template>

<script lang="ts">
export default {
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
      this.darkMode = !this.darkMode;
    }
  }
}
</script>
<style scoped>
  .switch {
    @apply relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in;
  }
  .switch__input {
    @apply absolute opacity-0 w-4 h-4 border border-solid rounded-3xl;
  }
  .switch__icon {
    @apply absolute block w-4 h-4 bg-gray-300 rounded-full transition duration-200 ease-in;
  }
  .switch__icon--light {
    @apply bg-gray-300;
  }
  .switch__icon--dark {
    @apply bg-gray-700;
  }
</style>
