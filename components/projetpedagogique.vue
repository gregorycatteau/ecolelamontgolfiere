<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Notre projet pédagogique</h1>
    </div>
    <div class="columns">
      <div class="column1">
        <h1 class="title">Le Vivre Ensemble</h1>
        <p class="text">Par vivre-ensemble nous entendons la coopération, la solidarité, le partage, la paix, ...

Cet apprentissage du "vivre-ensemble" regroupe notamment les compétences psychosociales suivantes : écoute, confiance en soi, connaissance et respect de soi, respect de l'autre, empathie, capacité à coopérer, familiarisation à la gestion de conflits, recours à l'intelligence émotionnelle...

Pour favoriser le développement de ces compétences, les pratiques se centrent autour du fonctionnement multi-âges, de l'auto-organisation, de la coopération, de l'accompagnement des émotions et de la conscience de soi.

Ces pratiques se mettent notamment en place dans le cadre des règles de vie qui sont élaborées en concertation avec le groupe d'enfants et l'ensemble de la communauté pédagogique, sur des temps dédiés. Elles peuvent être amenées à évoluer en fonction des besoins rencontrés au quotidien.

Elles ont pour but de proposer un cadre sécurisant et indispensable, à l'intérieur duquel chacun, enfant comme adulte, se sent libre d'agir et de penser dans le respect des autres.</p>
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





