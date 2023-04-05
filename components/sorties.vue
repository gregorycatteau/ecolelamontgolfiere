<template>
  <div class="wrapper">
       <div class="columns">
      <div class="column">
        <div class="internal">
        <h1 class="title">Des sorties variées</h1>
        <p class="text">Les murs de cette école sont perméables, car l'on y vit aussi bien en dedans qu'au dehors. Cette école, qui abrite un écosystème vivant et dynamique, est nichée au cœur d'un autre écosystème tout aussi vivant et dynamique. Chacun peut, autant qu'il le désire, utiliser ce que la ville environnante lui offre, comme autant de richesses. </p>
      </div>
        <div class="internal">
          <h1 class="title">A chaque âge ses sorties</h1>
          <p class="text">Les ados qui ont l’autorisation parentale de sortir seuls peuvent le faire quand ils le veulent en prévenant de leur sortie et en respectant les consignes de sécurité.Ceux qui ont besoin d’être accompagnés par un adulte peuvent également sortir en sollicitant l’équipe.</p>
       
        <p class="text">Souvent, une sortie initiée par un ou quelques membres est proposée à l’ensemble du collectif. Nous sortons ainsi très régulièrement, que ce soit simplement pour jouer à l’air libre dans les parcs alentours, sur un terrain de sport, à la piscine, à la patinoire, pour jardiner au jardin partagé, pour visiter un musée…</p>
        </div>
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
          src: '@/public/slider10.jpg',
          name: 'slider10',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '@/public/slider11.jpg',
          name: 'slider11',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '@/public/slider12.jpg',
          name: 'slider12',
          type: 'image',
          required: true,
        },
      ],
    }
  },
  setup() {
    const sliderImages = ref([10,11,12]);

    const changeSlider = () => {
  let currentImage = sliderImages.value.shift();
  if (currentImage === undefined) {
    currentImage = sliderImages.value[0];
  }
  sliderImages.value.push(currentImage === 12 ? 10 : currentImage + 1);
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
    @apply text-4xl font-bold text-center text-gray-700 my-10;
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

