<template>
   
  <div class="columns">
    <div class="column1">
      <h2 class="jenny">Communication, finances, etc</h2>
      <div class="imgwrapper">
        <img 
        src="/greg.jpg" 
        alt="notfound" 
        class="imagefond"
        />
      </div>
      <h1 class="undername">Greg</h1>
      <div class="mainskillwrapper">
        <div class="skillwrapper">
          <div class="wrapperdef">
            <Icon name="material-symbols:psychology-alt-sharp" class="icon"></Icon>
            <h2 class="profession">Développeur, formateur</h2>
          </div>
          <div class="wrapperdef">
            <Icon name="streamline:interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy" class="icon"></Icon>
            <h2 class="profession">webmaster, finances</h2>
          </div>
        </div>
        <div class="maincontactwrapper">
          <div class="contactwrapper">
            <a href="mailto:Kate@ecolelamontgolfiere.fr">
              <Icon name="fluent:mail-16-regular" class="iconmail"></Icon>
            </a>
          </div>
          <div class="contactwrapper">
            <a href="tel:0762969380">
              <Icon name="fluent:phone-16-regular" class="iconphone"></Icon>
            </a>
          </div>
          <div class="contactwrapper">
            <a href="https://www.telegram.me/katekjj">
              <Icon name="logos:telegram" class="icontelegram"></Icon>
            </a>
          </div>
        </div>
      </div>
      <div class="try">
        <button @click="showQuality" class="boutonqualité">
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
export default {
data() {
  return {
    showDiv: false,
    animateQuality: false,
    progress1: 95,
    progress2: 90,
    progress3: 95,
    progress4: 90,
    progress5: 95,
    progress6: 90,
    progress7: 90,
    progress8: 100,
  };
},
methods: {
  showQuality() {
    this.showDiv = !this.showDiv;
    if (this.showDiv) {
      this.animateQuality = true;
      this.startProgressBarAnimation();
    } else {
      this.resetProgressBarAnimation();
    }
  },
  onAnimationEnd() {
    this.animateQuality = false;
  },
  startProgressBarAnimation() {
    const duration = 1500; // Animation duration in milliseconds
    const increment = 10; // Progress increment per animation frame
    const targetProgress1 = this.progress1;
    const targetProgress2 = this.progress2;
    const targetProgress3 = this.progress3;
    const targetProgress4 = this.progress4;
    const targetProgress5 = this.progress5;
    const targetProgress6 = this.progress6;
    const targetProgress7 = this.progress7;
    const targetProgress8 = this.progress8;

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

      this.progress1 = Math.min(Math.round(currentProgress1), targetProgress1);
      this.progress2 = Math.min(Math.round(currentProgress2), targetProgress2);
      this.progress3 = Math.min(Math.round(currentProgress3), targetProgress3);
      this.progress4 = Math.min(Math.round(currentProgress4), targetProgress4);
      this.progress5 = Math.min(Math.round(currentProgress5), targetProgress5);
      this.progress6 = Math.min(Math.round(currentProgress6), targetProgress6);
      this.progress7 = Math.min(Math.round(currentProgress7), targetProgress7);
      this.progress8 = Math.min(Math.round(currentProgress8), targetProgress8);

      if (
        currentProgress1 < targetProgress1 ||
        currentProgress2 < targetProgress2 ||
        currentProgress3 < targetProgress3 ||
        currentProgress4 < targetProgress4 ||
        currentProgress5 < targetProgress5 ||
        currentProgress6 < targetProgress6 ||
        currentProgress7 < targetProgress7 ||
        currentProgress8 < targetProgress8
      ) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  },
  resetProgressBarAnimation() {
    this.progress1 = 0;
    this.progress2 = 0;
    this.progress3 = 0;
    this.progress4 = 0;
    this.progress5 = 0;
    this.progress6 = 0;
    this.progress7 = 0;
    this.progress8 = 0;
  },
},
};
</script>

<style scoped >


.columns {
@apply flex flex-col m-auto  bg-pastel-charte-bleu;
}
.column1 {
@apply  m-auto  bg-pastel-charte-bleu rounded-3xl shadow-lg;
}
.jenny {
@apply text-2xl font-bold text-center text-soutenu-charte-bleu;
}
.imgwrapper {
@apply flex justify-center items-center aspect-w-16 aspect-h-9 shadow-2xl rounded-3xl;
}
.imagefond {
@apply m-auto object-cover rounded-3xl shadow-2xl hover:saturate-200;
}
.undername {
@apply text-2xl font-bold text-center text-soutenu-charte-bleu;
}
.mainskillwrapper {
@apply w-auto;
}
.skillwrapper {
@apply flex flex-row w-full justify-around p-5;
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
@apply w-full items-center justify-center bg-soutenu-charte-jaune rounded-3xl shadow-lg;
}
.boutonqualité {
@apply w-full h-full flex justify-center items-center p-5;
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
@apply mt-5 flex flex-col items-center pb-10;
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
@apply h-full bg-soutenu-charte-bleu rounded-full;
}
.qualityinternal-transition {
@apply transition-all ;
}
</style>
