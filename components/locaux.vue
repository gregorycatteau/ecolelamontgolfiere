<template>
  <div class="wrapper">
    <div>
      <h1 class="maintitle">Tout penser  pour grandir et s'épanouir</h1>
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
        
        <p class="textlist">Chez La Montgolfière, nous souhaitons créer un lieu magique où les apprentissages se font aussi en plein air, au contact de la nature. Imaginez un vaste jardin rempli de fleurs, d'arbres majestueux et d'animaux joyeux. Un endroit où vous pourriez explorer, jouer et apprendre en harmonie avec l'environnement.</p>
        <p class="textlist">Notre école sera entourée d'une ferme éducative où vous pourrez découvrir la vie à la campagne, prendre soin des animaux et cultiver des fruits et légumes. Vous apprendrez l'importance du respect de la nature et comment vivre en harmonie avec notre belle planète.</p>
        <p class="textlist">Les bâtiments de notre école seront conçus avec amour, en utilisant des matériaux sains et durables. Nous veillerons à minimiser notre empreinte écologique en privilégiant les énergies renouvelables. Chaque construction sera réversible, respectant ainsi la beauté et l'équilibre de notre environnement naturel.</p>
        <p class="textlist">La Montgolfière sera un lieu ouvert, lumineux et aéré. Vous vous sentirez inspirés et élevés par l'énergie positive qui y règne. Chaque jour, vous pourrez grandir, explorer et développer vos talents dans un cadre bienveillant et stimulant.</p>
        <p class="textlist">Nous avons une grande ambition : créer des espaces inspirants et du matériel adapté pour vous aider à réaliser vos rêves. Même si ce projet est encore en cours de réalisation, nous avons besoin de votre soutien pour le concrétiser. Rejoignez-nous et devenez acteur de cette belle aventure en cliquant sur le bouton ci-dessous.</p>
        <div class="btn-formater">
        <nuxt-link to="/rejoindre" class="button">Je veux participer</nuxt-link>
        </div>

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
          src: '/slider7.jpg',
          name: 'slider7',
          type: 'image',
          required: true,
        },
        {
          id: 2,
          src: '/slider8.jpg',
          name: 'slider8',
          type: 'image',
          required: true,
        },
        {
          id: 3,
          src: '/slider9.jpg',
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
.btn-formater {
  @apply flex flex-col justify-center items-center my-5 w-11/12 gap-4 mx-auto z-20 ;
}
.button {
  @apply text-2xl font-bold text-center text-soutenu-charte-bleu bg-pastel-charte-cyan p-5 items-center rounded-3xl shadow-2xl hover:bg-soutenu-charte-bleu hover:text-soutenu-charte-jaune;
}





</style>

