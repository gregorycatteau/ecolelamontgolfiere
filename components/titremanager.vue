<template>
  <div class="titre-slider">
    <h2 class="title">{{ currentTitre }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titres: ['Jeune ou vieux', 'Grand ou petit', 'Gros ou maigre', 'Noir ou blanc', 'Homme ou femme', 'Blond ou brun'],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startTitreSlider();
  },
  methods: {
    startTitreSlider() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.titres.length;
      }, 3000);
    }
  },
  computed: {
    currentTitre() {
      return this.titres[this.currentIndex];
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.titre-slider {
  width: 100%;
}
.title {
  @apply text-4xl;
}
</style>

