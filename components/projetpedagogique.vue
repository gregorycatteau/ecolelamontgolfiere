<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Notre projet pédagogique</h1>
    </div>
    <div class="columns">
      <div class="column1">
        <h1 class="title">Les enfants au coeur de leurs apprentissages</h1>
        <p class="text">Dans le prolongement des travaux d’Adolphe Ferrière, de Célestin Freinet et Bernard Collot, notre projet pédagogique à partir de la rentrée 2023-2024,  s’inspire des pédagogies actives et coopératives tout en prônant la dimension systémique des apprentissages. </p>
        <p class="text">Nous soutenons en effet,  que lorsque le jeune se met en mouvement pour accomplir une action qui a du sens pour lui, il enclenche un processus de recherche de solutions et acquiert les apprentissages nécessaires en mobilisant les ressources pédagogiques matérielles et humaines prévues à cet effet.</p>
        <p class="text">La démarche de l’équipe pédagogique prend sa source dans les spécificités et le vécu des membres scolarisés en soutenant leur curiosité, leur jugement, leur raisonnement et leur esprit d’observation multipliant ainsi le potentiel de progression de chacun d’entre eux et leur permettant d’être pleinement acteurs de leurs apprentissages.. </p>
      </div>
      <div class="column2">
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
.wrapper {
  @apply w-10/12 m-auto p-10 rounded-s-3xl rounded-e-full prose sm:prose sm:max-w-none sm:prose-lg lg:prose-lg bg-yellow-300;
}
.maintitle {
  @apply text-4xl font-bold text-center;
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
.maintitle {
  @apply text-4xl font-bold text-center text-red-600;
}
.title {
  @apply text-2xl font-bold text-center text-red-700;
}
.text {
  @apply text-xl text-center p-5 text-red-800;
}
.textlist {
  @apply text-xl text-center p-5;
}
.slider-container {
  @apply flex  aspect-w-16 aspect-h-9 mx-10 rounded-2xl sm:aspect-w-6 sm:aspect-h-4;
}
.slider-image {
  @apply w-full mx-auto object-cover rounded-2xl shadow-2xl;
}




</style>





