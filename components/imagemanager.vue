<template>
  <div class="slider">
    <div class="slider-container">
      <img
        v-for="(image, index) in sliderImages"
        :key="index"
        :src="`/responsable${image}.jpeg`"
        class="slider-image"
        alt="Not found"
        :style="{ zIndex: index === currentImageIndex ? 1 : 0, opacity: index === currentImageIndex ? 1 : 0 }"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const sliderImages = ref([1, 2, 3, 4, 5, 6]);
    const currentImageIndex = ref(0);

    const changeSlider = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % sliderImages.value.length;
    };

    setInterval(changeSlider, 3000);

    onMounted(() => {
      changeSlider();
    });

    onBeforeUnmount(() => {
      clearInterval();
    });

    return {
      sliderImages,
      currentImageIndex
    };
  }
};
</script>

<style scoped>



.slider-container {
  @apply aspect-w-6 aspect-h-4 hover:saturate-200 mx-5 rounded-3xl;
}
.slider-image {
  @apply mx-auto object-cover rounded-3xl shadow-2xl;
}
</style>


