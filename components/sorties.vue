<template>
  <div class="wrapper">
    <div>
    <h1 class="title">Des sorties variées</h1>
    </div>
       <div class="columns">
      <div class="column1">
          <p class="text">Les murs de cette école sont perméables, car l'on y vit aussi bien en dedans qu'au dehors. Cette école, qui abrite un écosystème vivant et dynamique, est nichée au cœur d'un autre écosystème tout aussi vivant et dynamique. Chacun peut, autant qu'il le désire, utiliser ce que la ville environnante lui offre, comme autant de richesses. </p>
          <h1 class="title">A chaque âge ses sorties</h1>
          <p class="text">Les ados qui ont l’autorisation parentale de sortir seuls peuvent le faire quand ils le veulent en prévenant de leur sortie et en respectant les consignes de sécurité.Ceux qui ont besoin d’être accompagnés par un adulte peuvent également sortir en sollicitant l’équipe.</p>
          <p class="text">Souvent, une sortie initiée par un ou quelques membres est proposée à l’ensemble du collectif. Nous sortons ainsi très régulièrement, que ce soit simplement pour jouer à l’air libre dans les parcs alentours, sur un terrain de sport, à la piscine, à la patinoire, pour jardiner au jardin partagé, pour visiter un musée…</p>
        
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
.wrapper {
  @apply w-10/12 m-auto p-10 rounded-s-full rounded-e-3xl prose sm:prose sm:max-w-none sm:prose-lg lg:prose-lg bg-indigo-800;
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
  @apply text-4xl font-bold text-center text-slate-100;
}
.title {
  @apply text-2xl font-bold text-center text-slate-100;
}
.text {
  @apply text-xl text-center p-5 text-slate-100;
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
```

