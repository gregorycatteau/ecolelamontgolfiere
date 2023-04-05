<template>
  <div class="wrapper">
    
    <div class="columns">
      <div class="column">
        <h1 class="title">Des locaux et un environnement matériel adaptés</h1>
        <p class="textlist">Les locaux de l’école ne ressemblent pas à une école classique. La Montgolfière ressemble en fait à une grande maison, on y trouve : </p>
        <ul class="listwrap">
          <li class="listitem">une salle très calme : on ne peut pas y parler, elle est utile pour travailler seul où se reposer</li>
          <li class="listitem">une salle calme : on peut parler doucement, on peut ainsi y travailler à plusieurs</li>
          <li class="listitem">un atelier : avec un accès à l’eau, qui permet de réaliser de nombres activités manuelles et créatives (dessin, peinture, poterie, couture…) et un espace d’expériences scientifiques</li>
          <li class="listitem">une salle jeu : avec de nombreux jeux de construction (légos, kaplas…) et dinettes…</li>
          <li class="listitem">une cuisine équipée</li>
          <li class="listitem">un grand salon : avec canapés et tables pour manger ainsi qu’un babyfoot</li>
          <li class="listitem">un petit salon : un espace cosy pour se poser, discuter, rêver, jouer…</li>
          <li class="listitem">une salle musique et cinéma : réservable pour visionner un film à plusieurs, et où on peut également découvrir la musique grâce à un clavier, des guitares, une batterie…</li>
          <li class="listitem">une médiathèque : on y trouve des ordinateurs, des livres et de nombreux jeux de société</li>
          <li class="listitem">une salle de sport : avec un mur d’escalade, des haltères, des tapis de sol, des ballons…</li>
        </ul>
        <p class="textlist">L’aménagement des locaux, les ressources matérielles et humaines permettent l’alternance de phases de travail personnel et de phases collectives et concourent à une approche systémique des apprentissages.</p>
      </div>
      <div class="column">
        <div class="slider-container">
          <nuxt-img
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

<style scoped>
  .maintitle {
    @apply text-4xl font-bold text-center my-10;
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
  .textlist {
    @apply text-xl text-justify indent-5 font-bold mb-10;
  }
  .listwrap {
    @apply list-disc list-inside text-xl text-justify indent-5;
  }
  .listitem {
    @apply mb-4;
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
    const sliderImages = ref([7, 8, 9]);

    const changeSlider = () => {
  let currentImage = sliderImages.value.shift();
  if (currentImage === undefined) {
    currentImage = sliderImages.value[0];
  }
  sliderImages.value.push(currentImage === 9 ? 7 : currentImage + 1);
};

    setInterval(changeSlider, 3000);

    return {
      sliderImages,
    };
  },
});
</script>