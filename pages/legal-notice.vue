<template>
  <div>
    <p class="title">Bienvenue sur la page mentions légales</p>
  </div>
  <div class="temp">[[plugins]]
  package = "@netlify/plugin-emails"

[dev]
  command = "npm run dev"</div>
</template>
<script lang="ts">
export default {
  name: 'legal-notice',
  
}
</script>
<style scoped>
.title {
  @apply text-4xl font-bold text-center text-gray-700;
}
</style>