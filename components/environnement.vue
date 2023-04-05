<template>
  <div class="wrapper">
       <div class="columns">
      <div class="column">
        <div class="internal">
        <h1 class="title">Un environnement adapté et évolutif</h1>
        <p class="text">L’école s’appuie sur un environnement suffisamment riche et stimulant qui permet à chacun de ses membres de satisfaire ses envies et ses besoins naturels d’apprendre.</p>
      </div>
        <div class="internal">
          <h1 class="title">Un collectif multi âges</h1>
          <p class="text">L’un des fondements de notre approche est le décloisonnement des classes d’âges. Dans notre école, les membres entre 5 et 99 ans (une quarantaine de membre scolarisés et entre 4 et 6 adultes présents au quotidien) partagent le même espace. Cela multiplie les interactions possibles, sources précieuses d’apprentissages.</p>
       
        <p class="text">C'est un groupe vertueux qui se crée. Dans ce cadre protecteur, les plus jeunes peuvent apprendre des plus grands et vice versa.</p>
        </div>
    </div>
      <div class="column">
        <div class="slider-container">
          <img
            v-for="(image, index) in sliderImages"
            :key="index"
            :src="`@/public/slider${image}.jpg`"
            class="slider-image"
            alt="Not found"
            :width="600"
            :height="400"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .maintitle {
    @apply text-4xl font-bold text-center my-10;
  }
  
  .wrapper {
    @apply relative mt-10;
  }
  
  .columns {
    @apply flex justify-center gap-8 w-10/12 mx-auto flex-row-reverse;
  }
  
  .column {
    @apply flex flex-col justify-center items-center w-2/3 pl-10;
  }
  
  .column:first-child {
    @apply w-2/3 pr-10;
  }
  
  .column:last-child {
    @apply w-1/3 pl-10;
  }
  .internal {
    @apply w-2/3 mb-10;
  }
  
  .title {
    @apply text-4xl font-bold mt-0 mb-6 text-center;
  }
  
  .text {
    @apply text-xl text-justify indent-5;
  }
  
  .slider-container {
    @apply relative w-full h-full overflow-hidden;
  }
  
  .slider-image {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000;
  }
  
  .slider-image:not(:first-child) {
    @apply opacity-0;
  }
  
  .slider-image:nth-child(1) {
    @apply z-40;
  }
  
  .slider-image:nth-child(2) {
    @apply z-20;
  }
  
  .slider-image:nth-child(3) {
    @apply z-10;
  }
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const sliderImages = ref([4, 5, 6]);

    const changeSlider = () => {
  let currentImage = sliderImages.value.shift();
  if (currentImage === undefined) {
    currentImage = sliderImages.value[0];
  }
  sliderImages.value.push(currentImage === 6 ? 4 : currentImage + 1);
};

    setInterval(changeSlider, 3000);

    return {
      sliderImages,
    };
  },
});
</script>

