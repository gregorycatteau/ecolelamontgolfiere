<template>
  <div>
    <p class="title">Bienvenue sur la page ressources</p>
  </div>
  <LazyVideoplayer source="./Une semaine à la Sudbury Valley School.mp4" />
</template>
<script lang="ts">
export default {
  name: 'ressources',
  
}
</script>
<style scoped>
.title {
  @apply text-4xl font-bold text-center text-gray-700;
}
</style>