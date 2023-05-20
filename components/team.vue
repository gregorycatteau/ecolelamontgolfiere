<template>
  <div class="wrapper">
    <div>
     <h1 class="title">L'équipe de la Montgolfière</h1>
    </div>
    <div class="wrapguardians">
      <h1 class="guardians">Du coté de l'administration</h1>
    </div>
    <div class="separation"></div>
    <div class="columns">
      <div class="column1">
        <h2 class="jenny">Gestion, organisation, etc</h2>
        <div class="imgwrapper">
          <img 
          src="@/public/jenny-portrait.jpg" 
          alt="notfound" 
          class="imagefond"
          />
        </div>
        <h1 class="undername">Jenny</h1>
        <div class="mainskillwrapper">
          <div class="skillwrapper">
            <div class="wrapperdef">
              <Icon name="medical-icon:i-nursery" class="icon"></Icon>
              <h2 class="profession">Ancienne auxilliaire de puériculture </h2>
            </div>
            <div class="wrapperdef">
              <Icon name="streamline:interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy" class="icon"></Icon>
              <h2 class="profession">Responsable de l'organisation</h2>
            </div>
           
          </div>
          <div class="maincontactwrapper">
          <div class="contactwrapper">
            <a href="mailto:Jenny@ecolelamontgolfiere.fr">
            <Icon name="fluent:mail-16-regular" class="iconmail"></Icon></a>
          </div>
          <div class="contactwrapper">
            <a href="tel:0617784649">
            <Icon name="fluent:phone-16-regular" class="iconphone"></Icon></a>
          </div>
          <div class="contactwrapper">
            <a href="https://www.telegram.me/Jenny_Catteau">
            <Icon name="logos:telegram" class="icontelegram"></Icon></a>
          </div>
        </div>
        
      </div> 
      <div class="try">
          <button @click="showQuality">
            
            <h3 class="qualities" >Qualités</h3>
          </button>
          <transition name="quality-transition">
            <div class="mainquality" v-if="showDiv">
              <div class="wrapperqualityvisual">
                <h4 class="skill1">Organisation</h4>
                <div class="qualityvisual">
                  <div class="qualityinternal" :class="{ 'qualityinternal-transition': animateQuality}"></div>
                </div>
          
                <h4 class="skill2">Gestion</h4>
                <div class="qualityvisual">
                  <div class="qualityinternal" :class="{ 'qualityinternal-transition': animateQuality}"></div>
                </div>
                <h4 class="skill3">Communication</h4>
                <div class="qualityvisual">
                  <div class="qualityinternal" :class="{ 'qualityinternal-transition': animateQuality}"></div>
                </div>
              </div>
            </div>
          </transition>
          
      </div>
      
      </div>
      <div class="column2">
        <h2 class="jenny">Représentation, Partenariats, etc</h2>
        <div class="imgwrapper">
          <img 
            src="@/public/kate.jpg" 
            alt="notfound" 
            class="imagefond"
            width="900"
            height="600"/>
        </div>
        <h1 class="undername">Kate</h1>
        <div class="skillwrapper">
          <div class="wrapperdef">
           <Icon name="material-symbols:psychology-alt-sharp" class="icon"></Icon>
           <h2 class="profession">Psychologue, hypnothérapeute </h2>
          </div>
          <div class="wrapperdef">
           <Icon name="carbon:partnership" class="icon"></Icon>
           <h2 class="profession">Développement, partenariat</h2>
          </div>
        </div>
       </div>
       <div class="column3">
        <h2 class="jenny">webmaster, finances, etc</h2>
        <div class="imgwrapper">
          <img 
            src="@/public/greg.jpg" 
            alt="notfound" 
            class="imagefond"
            width="900"
            height="600"/>
        </div>
        <h1 class="undername">Greg</h1>
        <div class="skillwrapper">
          <div class="wrapperdef">
           <Icon name="fluent-emoji-high-contrast:man-teacher" class="icon"></Icon>
           <h2 class="profession">Formateur</h2>
          </div>
          <div class="wrapperdef">
           <Icon name="streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev" class="icon"></Icon>
           <h2 class="profession">Webmaster</h2>
          </div>
        </div>
       </div>
       
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      showDiv: false,
      animateQuality: false
    }
  },
  methods: {
    showQuality() {
      this.showDiv = !this.showDiv
    },
    onanimationend() {
      this.animateQuality = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      const qualityElement = document.querySelector('.qualityinternal');
      qualityElement.addEventListener('animationend', this.onanimationend);
    });
  },
  beforeUnmount() {
    const qualityElement = document.querySelector('.qualityinternal');
    qualityElement.removeEventListener('animationend', this.onanimationend);
  }
}
</script>
<style scoped>
.wrapper {
  @apply flex flex-col items-center justify-center;
}
.title {
  @apply text-4xl font-bold text-center text-gray-700 m-10 p-10;
}
.wrapguardians {
  @apply flex flex-col items-center justify-center bg-purple-600 rounded-tl-full w-11/12 m-auto;
}
.guardians {
  @apply text-4xl font-bold text-center text-slate-100 sm:text-7xl m-10 p-10;
}
.separation {
  @apply w-11/12 h-10
  ;
}
.columns {
  @apply sm:flex sm:flex-row sm:w-11/12 sm:m-auto  gap-4;
}
.column1 {
  @apply sm:w-1/2 sm:px-5 md:w-1/2 bg-red-500 rounded-tl-full flex flex-col;
}
.column2 {
  @apply sm:w-1/2 sm:px-5 md:w-1/2 bg-blue-500 rounded-tl-full;
}
.column3 {
  @apply sm:w-1/2 sm:px-5 md:w-1/2 bg-yellow-500 rounded-tl-full;
}
.jenny {
  @apply text-2xl font-bold text-start  bg-green-500 rounded-tl-3xl rounded-br-3xl text-gray-700 m-10 p-10;
}
.undername {
  @apply text-2xl font-bold text-center text-black m-10 p-10 bg-green-300 opacity-70 rounded-tl-3xl -mt-32 z-10;
}
.imgwrapper {
  @apply w-auto h-auto object-cover aspect-w-16 aspect-h-9;
}
.imagefond {
  @apply w-full h-full object-cover rounded-tl-full;
}
.mainskillwrapper {
  @apply flex flex-row items-center justify-between;
}
.skillwrapper {
  @apply flex flex-col items-center justify-center;
}
.wrapperdef {
  @apply flex flex-row items-center justify-center gap-4 p-2;
}
.icon {
  @apply w-10 h-10 text-gray-700;
}
.maincontactwrapper {
  @apply flex flex-row items-center justify-center gap-4;
}
.contactwrapper {
  @apply flex flex-row items-center justify-center bg-yellow-300 rounded-3xl p-5 shadow-2xl;
}
.iconmail {
  @apply w-10 h-10 text-blue-700 hover:rotate-45 hover:border-2 hover:border-green-400 hover:opacity-70 hover:rounded-3xl;
}
.iconphone {
  @apply w-10 h-10 text-blue-700 hover:rotate-45 hover:border-2 hover:border-green-400 hover:opacity-70 hover:rounded-3xl;
}
.icontelegram {
  @apply w-10 h-10 text-blue-700 hover:rotate-45 hover:border-2 hover:border-green-400 hover:opacity-70 hover:rounded-3xl;
}
.try {
  @apply flex flex-col;
}
.mainquality {
  @apply flex flex-col items-center justify-between  m-10;
}
.wrapperqualityvisual {
  @apply flex flex-col items-center justify-between;
}
.qualities {
  @apply text-2xl font-bold text-center text-gray-700 p-10;
}
.skill1 {
  @apply text-2xl font-bold text-start text-gray-700;
}
.skill2 {
  @apply text-2xl font-bold text-start text-gray-700;
}
.skill3 {
  @apply text-2xl font-bold text-start text-gray-700;
}
.qualityvisual {
  @apply relative bg-gradient-to-r from-green-600 to-green-900 w-96 h-12 rounded-3xl m-10 border-2 ;
}

.qualityinternal {
  @apply absolute bg-green-500 w-11/12 -top-48 h-10 rounded-3xl shadow-slate-700 drop-shadow-2xl;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
}

.qualityinternal-transition {
  @apply animate-quality;
  animation-duration: 1s;
}

@keyframes quality-animation {
  0% {
    width: 0;
  }
  100% {
    width: 91.666667%;
  }
}

.quality-transition-enter-active,
.quality-transition-leave-active {
  transition: all 1s;
}

.quality-transition-enter,
.quality-transition-leave-to {
  opacity: 0;
}


</style>
