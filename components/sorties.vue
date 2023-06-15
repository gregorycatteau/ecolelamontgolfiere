<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Des sorties pleines de découvertes</h1>
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
        <p class="text">Les murs de notre école sont ouverts sur le monde, car nous vivons à la fois à l'intérieur et à l'extérieur. Nous aimons explorer et découvrir tout ce qui nous entoure.</p>
        <h1 class="title">Des sorties adaptées à chaque âge</h1>
        <p class="text">Souvent, l'un ou plusieurs membres proposent une sortie à l'ensemble du groupe. Nous sortons régulièrement pour jouer en plein air dans les parcs, sur les terrains de sport, à la piscine, à la patinoire, pour jardiner dans un jardin partagé, ou encore pour visiter un musée. Chaque sortie est une occasion de s'amuser, d'apprendre et d'élargir nos horizons.</p>
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
          src: '/slider10.jpg',
          name: 'slider10',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '/slider11.jpg',
          name: 'slider11',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '/slider12.jpg',
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
```

