<template>
  <div class="quality-manager">
    <button @click="showQuality" class="qualitybutton">
      <h3 class="qualities">Qualités</h3>
    </button>
    <transition name="quality-transition">
      <div class="mainquality" v-if="showDiv">
        <div>
          <div v-for="(quality, index) in qualities" :key="index" class="wrapperqualityvisual">
            <div class="skill1">{{ quality.name }}</div>
            <div class="bar">
              <div class="qualityvisual" :style="{ width: quality.progress + '%' }">
                <div
                  class="qualityinternal"
                  :class="{ 'qualityinternal-transition': animateQuality }"
                  @animationend="onAnimationEnd"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showDiv = ref(false);
    const animateQuality = ref(false);
    const qualities = ref([
      { name: 'Leadership', progress: 85 },
      { name: 'Comunication', progress: 95 },
      { name: 'Résolution de problèmes', progress: 80 },
      { name: 'Connaissance des méthodes et pratiques d\'ensignement', progress: 100 },
      { name: 'Compétences en ingénierie pédagogique', progress: 90 },
      { name: 'Capacité à conseiller des enfants', progress: 90 },
      { name: 'Equipe', progress: 95 },
      { name: 'Empathie', progress: 100 },
      { name: 'Créativité', progress: 100 },
      { name: 'Leadership en temps de crise', progress: 95 }
    ]);

    const showQuality = () => {
      showDiv.value = !showDiv.value;
      if (showDiv.value) {
        animateQuality.value = true;
        startProgressBarAnimation();
      } else {
        resetProgressBarAnimation();
      }
    };

    const onAnimationEnd = () => {
      animateQuality.value = false;
    };

    const startProgressBarAnimation = () => {
      const duration = 1500; // Animation duration in milliseconds
      const increment = 10; // Progress increment per animation frame

      qualities.value.forEach((quality) => {
        const targetProgress = quality.progress;
        let currentProgress = 0;

        const animate = () => {
          currentProgress += (targetProgress - currentProgress) / duration * increment;
          quality.progress = Math.min(Math.round(currentProgress), targetProgress);

          if (currentProgress < targetProgress) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    };

    const resetProgressBarAnimation = () => {
      qualities.value.forEach((quality) => {
        quality.progress = 0;
      });
    };

    return {
      showDiv,
      animateQuality,
      qualities,
      showQuality,
      onAnimationEnd
    };
  }
};
</script>
<style scoped>
.quality-transition-enter-active,
.quality-transition-leave-active {
  @apply transition-opacity duration-500;
}

.quality-transition-enter-from,
.quality-transition-leave-to {
  @apply opacity-0;
}

.quality-manager {
  @apply w-full;
}
.qualitybutton {
  @apply  w-6/12 m-auto flex items-center justify-center bg-soutenu-charte-orange text-soutenu-charte-bleu font-bold py-2 px-4 rounded-full;
}
.qualities {
  @apply text-2xl font-bold text-center text-soutenu-charte-bleu p-5;
}

.mainquality {
  @apply mt-5 flex flex-col items-center;
}

.wrapperqualityvisual {
  @apply flex flex-col items-center;
}

.skill1 {
  @apply text-2xl md:text-4xl font-bold text-soutenu-charte-bleu mb-2;
}

.bar {
  @apply w-10/12 md:w-full h-8 bg-gray-300 rounded-md overflow-hidden;
}

.qualityvisual {
  @apply h-full bg-soutenu-charte-bleu rounded-md;
}

.qualityinternal {
  @apply h-full bg-soutenu-charte-bleu rounded-md;
}

.qualityinternal-transition {
  @apply transition ;
}
</style>
