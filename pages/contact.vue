<template>
  <div class="wrapper">
    <p class="maintitle">Bienvenue sur la page contact</p>
    <p class="title">Avant de chercher à nous contacter, tu peux jeter un oeil à notre foire aux questions...</p>
    <div class="columns">
      <div class="column1">
        <contactform></contactform>
      </div>
      <div class="column2">
        <faq></faq>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
export default {
  name: 'contact',
  
  
  
}
</script>
<style scoped>
.wrapper {
  @apply m-10 p-10;
}
.maintitle {
  @apply text-6xl font-bold text-center text-gray-700 m-10 p-10;
}
.title {
  @apply text-4xl font-bold text-center text-gray-700 m-10 p-10;
}
.columns {
  @apply sm:flex sm:flex-row sm:w-11/12 sm:m-auto;
}
.column1 {
  @apply sm:w-2/3 sm:px-5 md:w-1/2;
}
.column2 {
  @apply sm:w-1/3 sm:px-5 md:w-1/2;
}
</style>