<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <div class="heading" v-if="!isMobile">
      <div :class="{ dark: isDark }">
        <nav class="nav">
          <ul class="ul">
            <li class="li1">
              <div class="limodifier">
                <nuxt-link to="/ecole" class="link">Ecole</nuxt-link>
                <Icon name="ion:school" class="icon"></Icon>
              </div>
            </li>
            <li class="li5">
              <div class="limodifier">
                <nuxt-link to="/equipe" class="link">L'équipe</nuxt-link>
                <Icon name="fluent:people-team-16-filled" class="icon"></Icon>
              </div>
            </li>
            <li class="li4">
              <div class="limodifier">
                <nuxt-link to="/rejoindre" class="link">Nous rejoindre</nuxt-link>
                <Icon name="majesticons:users-line" class="icon"></Icon>
              </div>
            </li>
            <li class="li3">
              <div class="limodifier">
                <nuxt-link to="/inscription" class="link">Inscription</nuxt-link>
                <Icon name="mdi:bell-outline" class="icon"></Icon>
              </div>
            </li>
            <li class="li2">
              <div class="limodifier">
                <nuxt-link to="/actualites" class="link">Actualités</nuxt-link>
                <Icon name="streamline-emojis:newspaper" class="icon"></Icon>
              </div>
            </li>
          </ul>
          <div class="icon">
            <Icon
              v-if="!showCloseIcon"
              name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
              v-show="mobile"
              class="iconfabars"
              :class="{ 'icon-active': mobileNav, 'icon-rotate': mobileNav }"
              @click="toggleMobileNav"
            ></Icon>
            <Icon
              v-else
              name="system-uicons:cross-circle"
              class="iconfabars"
              @click="toggleMobileNav"
            ></Icon>
          </div>
          <transition name="mobile-nav">
            <ul v-show="mobileNav" class="mobile-nav">
              <li>
                <div class="limodifier2">
                  <nuxt-link to="/ecole" class="link">Ecole</nuxt-link>
                  <Icon name="ion:school" class="icon"></Icon>
                </div>
              </li>
              <li>
                <div class="limodifier2">
                  <nuxt-link to="/equipe" class="link">L'équipe</nuxt-link>
                  <Icon name="fluent:people-team-16-filled" class="icon"></Icon>
                </div>
              </li>
              <li>
                <div class="limodifier2">
                  <nuxt-link to="/rejoindre" class="link">Nous rejoindre</nuxt-link>
                  <Icon name="majesticons:users-line" class="icon"></Icon>
                </div>
              </li>
              <li>
                <div class="limodifier2">
                  <nuxt-link to="/inscription" class="link">Inscription</nuxt-link>
                  <Icon name="mdi:bell-outline" class="icon"></Icon>
                </div>
              </li>
              <li>
                <div class="limodifier2">
                  <nuxt-link to="/actualites" class="link">Actualités</nuxt-link>
                  <Icon name="streamline-emojis:newspaper" class="icon"></Icon>
                </div>
              </li>
            </ul>
          </transition>
        </nav>
      </div>
    </div>
  </header>
</template>


<script>
import { useDark, useToggle } from '@vueuse/core'

export default {
  name: "Heading",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: false, // Set initial value to false
      windowWidth: null,
      isMobile: false,
      isDark: false,
      showCloseIcon: false,
    };
  },
  mounted() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      this.showCloseIcon = !this.showCloseIcon;
    },
    checkScreen() {
      if (typeof window !== "undefined") {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
          this.mobile = true;
        } else {
          this.mobile = false;
          this.mobileNav = false;
        }
      }
    },
    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
};
</script>


<style scoped>
.dark {
  @apply bg-zinc-900 text-pastel-charte-bleu;
}
.header {
  @apply fixed top-0 left-0 w-full z-50 bg-pastel-charte-bleu shadow-md transition-all duration-300 ease-in-out;
}

.scrolled-nav {
  @apply bg-pastel-charte-bleu text-soutenu-charte-vert;
}

.heading {
  @apply flex items-center justify-between px-4 py-3;
}

.nav {
  @apply flex items-center;
}

.ul {
  @apply flex items-center space-x-4;
}

.li1,
.li2,
.li3,
.li4,
.li5 {
  @apply inline-block mr-6 
  p-5 
 
  text-zinc-700 
  
  text-3xl
  
 
  shadow-2xl 
  rounded-full 
  
  hover:bg-pastel-charte-vert
  hover:border-none
  hover:text-soutenu-charte-cyan
  hover:font-bold
  hover:ring-2
  hover:ring-slate-200;
}

.limodifier {
  @apply flex items-center space-x-1 px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors duration-200;
}

.limodifier2 {
  @apply flex items-center space-x-3 px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors duration-200;
}

.link {
  @apply font-medium text-sm;
}

.icon {
  @apply w-5 h-5;
}

.iconfabars {
  @apply cursor-pointer w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors duration-200;
}

.icon-active {
  @apply bg-pastel-charte-vert;
}

.dropdown-nav {
  @apply absolute top-14 left-0 z-50 flex flex-row justify-center w-full mt-2 py-2 bg-white shadow-md rounded-md;
}

.dropdown-nav li {
  @apply inline-block;
}

.dropdown-nav .limodifier2 {
  @apply flex items-center space-x-3 px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors duration-200;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  @apply transition-transform duration-300;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  @apply opacity-0 scale-95;
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
  @apply opacity-100 scale-100;
}

@media (max-width: 767px) {
  .ul {
    display: none;
  }
}

.mobile-nav {
  display: block;
}

.icon-rotate {
  transform: rotate(180deg);
}
</style>
