<template>
  <div class="wrapper"></div>
 
  <img 
  src="/slider3.jpg" 
  alt="notfound" 
  class="imagefond"
  height="400"
   />
    <div class="postitle">
      <div class="overlay">
        <h1 class="title">Merci de votre intérêt pour l'école La Montgolfière</h1>
        <p class="subtitle">L'école où nous élevons ensemble</p>
      </div>
       
    </div>
   
    <Subscribe></Subscribe>
</template>
<script lang="ts">
export default {
  name: 'inscription',
  
}
</script>
<style scoped>
.wrapper {
  @apply relative mb-10;
}
.imagefond {
  @apply w-11/12 m-auto rounded-3xl;
}
.postitle {
  @apply absolute top-60 left-0 w-full h-full flex justify-center items-start;
}
.overlay {
  @apply bg-white bg-opacity-50 rounded-lg p-8 text-center;
}
.title {
  @apply text-7xl text-indigo-800 font-bold mb-8;
}
.subtitle {
  @apply text-5xl text-indigo-800 font-bold;
}
</style>