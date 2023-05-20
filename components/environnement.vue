<template>
  <div class="wrapper">
    <div>
      <h1 class="title">Un environnement adapté et évolutif</h1>
    </div>
    <div class="columns">
      <div class="column1">
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
      <div class="column2">
        <p class="text">L’école s’appuie sur un environnement suffisamment riche et stimulant qui permet à chacun de ses membres de satisfaire ses envies et ses besoins naturels d’apprendre.</p>
        <h1 class="title">Un collectif multi âges</h1>
        <p class="text">L'école est le lieu de vie des enfants et des adultes qui les accompagnent. Si nous souhaitons que nos enfants fassent preuve d'initiatives, s'engagent et se responsabilisent à différents endroits de leur vie, il est intéressant de leur laisser de réelles opportunités d'agir sur leur monde : ici, organiser leur vie à l'école.</p>
        <p class="text">C'est un groupe vertueux qui se crée. Dans ce cadre protecteur, les plus jeunes peuvent apprendre des plus grands et vice versa.</p>
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
          src: '@/public/slider4.jpg',
          name: 'slider4',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '@/public/slider5.jpg',
          name: 'slider5',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '@/public/slider6.jpg',
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
  @apply w-10/12 m-auto p-10 rounded-s-full rounded-e-3xl prose sm:prose sm:max-w-none sm:prose-lg lg:prose-lg bg-green-300;
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
  @apply text-4xl font-bold text-center text-purple-600;
}
.title {
  @apply text-2xl font-bold text-center text-purple-700;
}
.text {
  @apply text-xl text-center p-5 text-purple-800;
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



