<template>
  <div class="wrapper">
    <div>
      <h1 class="title">Des locaux et un environnement matériel adaptés</h1>
    </div>
    <div class="columns">
      <div class="column1">
        
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
          src: '@/public/slider7.jpg',
          name: 'slider7',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '@/public/slider8.jpg',
          name: 'slider8',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '@/public/slider9.jpg',
          name: 'slider9',
          type: 'image',
          required: true,
        },
      ],
    }
  },
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
<style scoped>
.wrapper {
  @apply w-10/12 m-auto p-10 rounded-s-3xl rounded-e-full prose sm:prose sm:max-w-none sm:prose-lg lg:prose-lg bg-blue-300;
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
  @apply text-4xl font-bold text-start text-red-600;
}
.title {
  @apply text-2xl font-bold text-start ml-10 text-red-700;
}
.textlist {
  @apply text-xl text-center  text-red-700;
}
.listwrap {
  @apply list-disc list-inside text-xl text-start  text-red-700;
}
.listitem {
  @apply text-xl text-start  text-red-700;
}
.slider-container {
  @apply flex  aspect-w-16 aspect-h-9 mx-10 my-48 rounded-2xl sm:aspect-w-6 sm:aspect-h-4;
}
.slider-image {
  @apply w-full mx-auto object-cover rounded-2xl shadow-2xl;
}




</style>

