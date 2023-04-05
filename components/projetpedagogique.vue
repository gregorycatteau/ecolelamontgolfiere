<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Notre projet pédagogique</h1>
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Les enfants au coeur de leurs apprentissages</h1>
        <p class="text">Dans le prolongement des travaux d’Adolphe Ferrière, de Célestin Freinet et Bernard Collot, notre projet pédagogique à partir de la rentrée 2023-2024,  s’inspire des pédagogies actives et coopératives tout en prônant la dimension systémique des apprentissages. </p>
        <p class="text">Nous soutenons en effet,  que lorsque le jeune se met en mouvement pour accomplir une action qui a du sens pour lui, il enclenche un processus de recherche de solutions et acquiert les apprentissages nécessaires en mobilisant les ressources pédagogiques matérielles et humaines prévues à cet effet.</p>
        <p class="text">a démarche de l’équipe pédagogique prend sa source dans les spécificités et le vécu des membres scolarisés en soutenant leur curiosité, leur jugement, leur raisonnement et leur esprit d’observation multipliant ainsi le potentiel de progression de chacun d’entre eux et leur permettant d’être pleinement acteurs de leurs apprentissages.. </p>
      </div>
      <div class="column">
        <div class="slider-container">
          <img
            v-for="(image, index) in sliderImages"
            :key="index"
            :src="`/slider${image}.jpg`"
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

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      sliderImages: [
        {
          id: 1,
          src: '@/public/slider1.jpg',
          name: 'slider1',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '@/public/slider2.jpg',
          name: 'slider2',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '@/public/slider3.jpg',
          name: 'slider3',
          type: 'image',
          required: true,
        },
      ],
    }
  },
  setup() {
    const sliderImages = ref([1, 2, 3]);

    const changeSlider = () => {
  let currentImage = sliderImages.value.shift();
  if (currentImage === undefined) {
    currentImage = sliderImages.value[0];
  }
  sliderImages.value.push(currentImage === 3 ? 1 : currentImage + 1);
};

    setInterval(changeSlider, 3000);

    return {
      sliderImages,
    };
  },
});
</script>

<style scoped>
  .maintitle {
    @apply text-4xl font-bold text-center  my-10;
  }
  
  .wrapper {
    @apply relative ;
  }
  
  .columns {
    @apply flex justify-center gap-8 w-10/12 mx-auto;
  }
  
  .column {
    @apply flex flex-col justify-center items-center;
  }
  
  .column:first-child {
    @apply w-2/3 pr-10;
  }
  
  .column:last-child {
    @apply w-1/3 pl-10;
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




