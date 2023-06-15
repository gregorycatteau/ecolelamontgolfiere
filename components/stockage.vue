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
            <Icon name="streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev" class="icon"></Icon>
            <h2 class="profession">Formateur, développeur</h2>
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
            <a href="tel:0768145152">
              <Icon name="fluent:phone-16-regular" class="iconphone"></Icon>
            </a>
          </div>
          <div class="contactwrapper">
            <a href="https://www.telegram.me/Gregory_Catteau">
              <Icon name="logos:telegram" class="icontelegram"></Icon>
            </a>
          </div>
        </div>
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
export default {
  
}
</script>
<style lang="">
  heading {
  @apply sticky;
}
.dark {
  @apply bg-slate-800 text-white;
}
.nav {
  @apply sticky flex justify-between items-center py-4 px-6 ;
}
.ul {
  @apply flex list-none m-0 p-0;

}

.li1 {
  @apply mr-6 hover:skew-y-6 bg-red-600 text-green-300 p-5 text-3xl rounded-full hover:opacity-80 border-4 border-solid border-purple-800 shadow-2xl;
}
.limodifier {
  @apply gap-6 flex items-center;
}
.icon {
  @apply group-hover:rotate-180;
}
.li1 {
  @apply mr-6 hover:skew-y-6 bg-red-600 text-green-300 p-5 text-3xl rounded-full hover:opacity-80 border-2 border-solid border-purple-800 shadow-2xl;
}
.li2 {
  @apply mr-6 hover:skew-y-6 bg-orange-600 text-blue-300 p-5 text-3xl rounded-full hover:opacity-80 border-2 border-solid border-indigo-800 shadow-2xl;
}
.li3 {
  @apply mr-6 hover:skew-y-6 bg-yellow-300 text-indigo-900 p-5 text-3xl rounded-full hover:opacity-80 border-2 border-solid border-blue-800 shadow-2xl;
}
.li4 {
  @apply mr-6 hover:skew-y-6 bg-green-300 text-purple-900 p-5 text-3xl rounded-full hover:opacity-80 border-2 border-solid border-green-800 shadow-2xl;
}
.li5 {
  @apply mr-6 hover:skew-y-6 bg-blue-300 text-red-900 p-5 text-3xl rounded-full hover:opacity-80 border-2 border-solid border-red-800 shadow-2xl;
}
.link {
  @apply font-semibold;
}
button {
  @apply flex items-end text-xl relative h-16 w-32 rounded-full;
}
.toggle-btn {
  @apply bg-gray-300 transition-all duration-300 ease-in-out;
}
.toggle-indicator {
  @apply text-5xl absolute top-0 left-0 h-full w-1/2 rounded-full bg-purple-700 transition-all duration-300 ease-in-out;
}


.dark .toggle-btn {
  @apply bg-indigo-500;
}
.dark .toggle-indicator {
  @apply transform translate-x-full;
}
.wrapperregistar {
  @apply flex flex-col gap-4;
}
.btn {
  @apply bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-center;
}
//<style scoped>
.heading {
  @apply  bg-pastel-charte-bleu;
}
.dark {
  @apply bg-slate-800 text-white;
}
.nav {
  @apply sticky flex justify-between items-center py-4 px-6 ;
}
.ul {
  @apply flex list-none;

}
.li1 {
  @apply 
  mr-6 
  p-5 
 
  text-zinc-700 
  font-['bimbo']
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200
  

  ;
}
.li2 {
  @apply 
  mr-6 
  p-5 
 
  text-zinc-700 
  font-['bimbo']
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200
  

  ;
}
.li3 {
  @apply 
  mr-6 
  p-5 
 
  text-zinc-700 
  font-['bimbo']
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200
  

  ;
}
.li4 {
  @apply 
  mr-6 
  p-5 
 
  text-zinc-700 
  font-['bimbo']
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200
  

  ;
}
.li5 {
  @apply 
  mr-6 
  p-5 
 
  text-zinc-700 
  font-['bimbo']
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200
  

  ;
}
.link {
  @apply font-semibold;
}
.limodifier {
  @apply gap-6 flex items-center;
}
.icon {
  @apply group-hover:rotate-180;
}
.wrapperregistar {
  @apply flex items-end text-xl relative h-16 w-32 rounded-full;
}
.toggle-btn {
  @apply transition-all duration-300 ease-in-out items-center justify-center;
}
.toggle-indicator {
  @apply text-2xl px-10 py-4 rounded-3xl bg-purple-700 w-48 transition-all duration-300 ease-in-out;
}
.moonorsun {
  @apply text-4xl;
}

</style>//
</style>