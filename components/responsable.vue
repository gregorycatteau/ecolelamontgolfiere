<template>
   
   <div class="columns">
    <div class="column1">
      <h2 class="jenny">Peu importe que vous soyez : 
        <span class="jennytitle">{{ sliderTitles[currentImageIndex] }}</span>
      </h2>
      <div class="slider">
        <div class="slider-container">
          <img
            v-for="(image, index) in sliderImages"
            :key="index"
            :src="`/responsable${image}.jpeg`"
            class="slider-image"
            alt="Not found"
            :width="600"
            :height="400"
          />
        </div>
      </div>
      <h1 class="undername">Greg</h1>
      <div class="mainskillwrapper">
        <!-- Rest of the code -->
      </div>
      <div class="try">
        <button @click="showQuality">
          <h3 class="qualities">Qualités</h3>
        </button>
        <transition name="quality-transition">
          <div class="mainquality" v-if="showDiv">
            <div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Organisation</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress1 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Gestion</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress2 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Communication</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress3 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Pédagogie</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress4 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Créativité</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress5 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Patience</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress6 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Equipe</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress7 + '%' }">
                    <div
                      class="qualityinternal"
                      :class="{ 'qualityinternal-transition': animateQuality }"
                      @animationend="onAnimationEnd"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="wrapperqualityvisual">
                <div class="skill1">Empathie</div>
                <div class="bar">
                  <div class="qualityvisual" :style="{ width: progress8 + '%' }">
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
    </div>
  </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const showDiv = ref(false);
    const animateQuality = ref(false);
    const progress1 = ref(85);
    const progress2 = ref(95);
    const progress3 = ref(80);
    const progress4 = ref(100);
    const progress5 = ref(90);
    const progress6 = ref(90);
    const progress7 = ref(95);
    const progress8 = ref(100);
    const sliderImages = ref([1, 2, 3, 4, 5, 6]);
    const currentImageIndex = ref(0);
    const sliderTitles = ref([
      'Jeune ou vieux',
      'Grand ou petit',
      'Gros ou maigre',
      'Noir ou blanc',
      'Homme ou femme',
      'Blond ou brun'
    ]);

    const updateTitle = (index) => {
      sliderTitles.value = images[index].title;
    };

    const changeSlider = () => {
      let currentImage = sliderImages.value.shift();
      if (currentImage === undefined) {
        currentImage = sliderImages.value[0];
      }
      sliderImages.value.push(currentImage === 6 ? 1 : currentImage + 1);
      updateTitle(currentImageIndex.value);
    };

    setInterval(changeSlider, 3000);

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
      const targetProgress1 = progress1.value;
      const targetProgress2 = progress2.value;
      const targetProgress3 = progress3.value;
      const targetProgress4 = progress4.value;
      const targetProgress5 = progress5.value;
      const targetProgress6 = progress6.value;
      const targetProgress7 = progress7.value;
      const targetProgress8 = progress8.value;

      let currentProgress1 = 0;
      let currentProgress2 = 0;
      let currentProgress3 = 0;
      let currentProgress4 = 0;
      let currentProgress5 = 0;
      let currentProgress6 = 0;
      let currentProgress7 = 0;
      let currentProgress8 = 0;

      const animate = () => {
        currentProgress1 += (targetProgress1 - currentProgress1) / duration * increment;
        currentProgress2 += (targetProgress2 - currentProgress2) / duration * increment;
        currentProgress3 += (targetProgress3 - currentProgress3) / duration * increment;
        currentProgress4 += (targetProgress4 - currentProgress4) / duration * increment;
        currentProgress5 += (targetProgress5 - currentProgress5) / duration * increment;
        currentProgress6 += (targetProgress6 - currentProgress6) / duration * increment;
        currentProgress7 += (targetProgress7 - currentProgress7) / duration * increment;
        currentProgress8 += (targetProgress8 - currentProgress8) / duration * increment;

        progress1.value = Math.min(Math.round(currentProgress1), targetProgress1);
        progress2.value = Math.min(Math.round(currentProgress2), targetProgress2);
        progress3.value = Math.min(Math.round(currentProgress3), targetProgress3);
        progress4.value = Math.min(Math.round(currentProgress4), targetProgress4);
        progress5.value = Math.min(Math.round(currentProgress5), targetProgress5);
        progress6.value = Math.min(Math.round(currentProgress6), targetProgress6);
        progress7.value = Math.min(Math.round(currentProgress7), targetProgress7);
        progress8.value = Math.min(Math.round(currentProgress8), targetProgress8);

        if (currentProgress1 < targetProgress1 || currentProgress2 < targetProgress2 ||
          currentProgress3 < targetProgress3 || currentProgress4 < targetProgress4 ||
          currentProgress5 < targetProgress5 || currentProgress6 < targetProgress6 ||
          currentProgress7 < targetProgress7 || currentProgress8 < targetProgress8) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const resetProgressBarAnimation = () => {
      progress1.value = 0;
      progress2.value = 0;
      progress3.value = 0;
      progress4.value = 0;
      progress5.value = 0;
      progress6.value = 0;
      progress7.value = 0;
      progress8.value = 0;
    };

    onMounted(() => {
      startProgressBarAnimation();
    });

    onBeforeUnmount(() => {
      resetProgressBarAnimation();
    });

    return {
      showDiv,
      animateQuality,
      progress1,
      progress2,
      progress3,
      progress4,
      progress5,
      progress6,
      progress7,
      progress8,
      sliderImages,
      currentImageIndex,
      sliderTitles,
      showQuality,
      onAnimationEnd
    };
  }
};
</script>



<style scoped>


.columns {
@apply flex flex-col w-11/12 m-auto gap-5 bg-pastel-charte-bleu;
}
.column1 {
@apply w-10/12 m-auto h-full bg-pastel-charte-cyan rounded-3xl shadow-lg p-10;
}
.jenny {
@apply text-4xl font-bold text-center text-soutenu-charte-jaune mb-14;
}
.jennytitle {
@apply text-4xl font-bold text-center text-soutenu-charte-bleu;
}
.undername {
@apply text-3xl font-bold text-center text-soutenu-charte-bleu;
}
.mainskillwrapper {
@apply w-full;
}
.skillwrapper {
@apply flex flex-row w-full justify-around m-5 p-5;
}
.wrapperdef {
@apply flex flex-row;
}
.icon {
@apply w-10 h-10 text-soutenu-charte-bleu;
}
.profession {
@apply ml-2 text-xl font-bold text-soutenu-charte-bleu;
}
.maincontactwrapper {
@apply w-full flex justify-around items-center m-5 p-5;
}
.contactwrapper {
@apply w-10 h-10 rounded-full bg-soutenu-charte-bleu flex justify-center items-center;
}
.iconmail {
@apply w-5 h-5 text-white;
}
.iconphone {
@apply w-5 h-5 text-white;
}
.icontelegram {
@apply w-5 h-5 text-white;
}
.try {
@apply w-full;
}
.qualities {
@apply text-2xl font-bold text-right text-soutenu-charte-bleu underline;
}
.quality-transition-enter-active,
.quality-transition-leave-active {
@apply transition-opacity duration-500;
}
.quality-transition-enter-from,
.quality-transition-leave-to {
@apply opacity-0;
}
.mainquality {
@apply mt-5 flex flex-col items-center;
}
.wrapperqualityvisual {
@apply flex flex-col items-center;
}
.skill1 {
@apply text-lg font-bold text-soutenu-charte-bleu mb-2;
}
.bar {
@apply w-64 h-4 bg-gray-200 rounded-full;
}
.qualityvisual {
@apply h-full bg-soutenu-charte-bleu rounded-full;
}
.qualityinternal {
@apply h-full bg-gradient-to-r from-soutenu-charte-cyan to-soutenu-charte-vert rounded-full;
}
.qualityinternal-transition {
@apply transition-all ;
}
.slider-container {
  @apply aspect-w-6 aspect-h-4 hover:saturate-200 mx-10 rounded-2xl shadow-2xl;
}
.slider-image {
  @apply mx-auto object-cover rounded-2xl shadow-2xl;
}

.imagefond {
  @apply w-10/12 m-auto object-cover rounded-3xl shadow-2xl hover:saturate-200 relative;
  opacity: 0;
  transition: opacity 0.5s;
}

.imagefond.active {
  opacity: 1;
}


</style>