<template>
  
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Notre aventure éducative</h1>
    </div>
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
    <div class="columns">
      <div class="column1">
        <h1 class="title">Ensemble, nous grandissons</h1>
        <p class="text">À La Montgolfière, nous croyons en la force du "vivre-ensemble". C'est une invitation à la coopération, à la solidarité, au partage et à la paix. Nous apprenons à être ensemble, à écouter, à avoir confiance en nous, à nous connaître et à respecter les autres.</p>
        <p class="text">Pour développer ces compétences importantes, nous fonctionnons tous ensemble, quel que soit notre âge. Nous nous organisons, nous coopérons, nous apprenons à gérer nos émotions et à résoudre les conflits avec intelligence et bienveillance.</p>
        <p class="text">Les règles de vie sont créées en collaboration avec les enfants et toute la communauté pédagogique. Elles sont adaptées et évoluent selon nos besoins quotidiens. Elles nous offrent un cadre sécurisant où chacun, enfant comme adulte, est libre d'agir et de penser dans le respect des autres.</p>
      </div>
      <div class="column2">
        
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
          src: '/slider1.jpg',
          name: 'slider1',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '/slider2.jpg',
          name: 'slider2',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '/slider3.jpg',
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
  @apply  bg-soutenu-charte-orange flex flex-col gap-10 rounded-tl-full;
}
.maintitle {
  @apply text-4xl font-bold text-center mt-32 p-10;
}
.slider-container {
  @apply aspect-w-6 aspect-h-4 hover:saturate-200 mx-10 rounded-2xl shadow-2xl;
}
.slider-image {
  @apply mx-auto object-cover rounded-2xl shadow-2xl;
}


.columns {
  @apply flex flex-row w-11/12 m-auto;
}
.column1 {
  @apply sm:w-2/3 sm:px-5 md:w-1/2;
}
.column2 {
  @apply sm:w-1/3 sm:px-5 md:w-1/2;
}
.maintitle {
  @apply text-4xl font-bold text-center text-soutenu-charte-cyan;
}
.title {
  @apply text-2xl font-bold text-center text-soutenu-charte-bleu;
}
.text {
  @apply text-xl text-center p-5 text-soutenu-charte-bleu;
}
.textlist {
  @apply text-xl text-center p-5;
}





</style>





