<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Un environnement d'élévation et d'évolution</h1>
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
    <div class="columns">
      <div class="column1">
        
      </div>
      <div class="column2">
        <p class="text">À La Montgolfière, nous créons un environnement inspirant qui t'élève vers de nouveaux horizons. Ici, tu peux t'épanouir et grandir en explorant tes passions et tes curiosités.</p>
        <h1 class="title">Grandir ensemble, apprendre ensemble</h1>
        <p class="text">Notre école est un lieu de vie où chacun peut s'élever et progresser. Nous encourageons la collaboration et la responsabilisation de tous les membres de notre communauté. En travaillant ensemble, nous découvrons le pouvoir de l'apprentissage mutuel.</p>
        <p class="text">Le collectif multi-âges est une source d'inspiration et de soutien. Les plus jeunes peuvent apprendre des plus grands, et les plus grands peuvent partager leur savoir avec bienveillance. C'est une aventure collective où nous grandissons ensemble, dans l'harmonie et la paix.</p>
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
          src: '/slider4.jpg',
          name: 'slider4',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '/slider5.jpg',
          name: 'slider5',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '/slider6.jpg',
          name: 'slider6',
          type: 'image',
          required: true,
        },
      ],
    }
  },
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



