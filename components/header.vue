<template>
  <div class="heading">
    <div :class="{ dark: isDark }">
      <nav class="nav">
        <ul class="ul">
          <li class="li"><nuxt-link to="/ecole" class="link">Ecole</nuxt-link></li>
          <li class="li"><nuxt-link to="/actualites" class="link">Actualités</nuxt-link></li>
          <li class="li"><nuxt-link to="/inscription" class="link">Inscription</nuxt-link></li>
          <li class="li"><nuxt-link to="/rejoindre" class="link">Nous rejoindre</nuxt-link></li>
        </ul>
        <button class="toggle-btn" @click="toggleDark()">
          <span class="toggle-indicator">
          </span>
        </button> 
        <icon v-if="isDark" name="openmoji:crescent-moon" />
        <icon v-else name="twemoji:sun-with-face" />
      </nav>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()

// const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>


<style >
.heading {
  @apply sticky bg-indigo-200 top-0 z-50;
}
.dark {
  @apply bg-slate-800 text-white;
}
.nav {
  @apply flex justify-between items-center py-4 px-6;
}
.ul {
  @apply flex list-none m-0 p-0;
}
.li {
  @apply mr-6;
}
.link {
  @apply font-semibold hover:text-indigo-500;
}
button {
  @apply flex items-end text-xl relative h-10 w-16 rounded-full;
}
.toggle-btn {
  @apply bg-gray-300 transition-all duration-300 ease-in-out;
}
.toggle-indicator {
  @apply absolute top-0 left-0 h-full w-1/2 rounded-full bg-white transition-all duration-300 ease-in-out;
}
.fa-moon {
  @apply transform rotate-90;
  margin-left: -0.5rem;
}
.dark .toggle-btn {
  @apply bg-green-500;
}
.dark .toggle-indicator {
  @apply transform translate-x-full;
}
.dark .fa-sun {
  @apply hidden;
}
.dark .fa-moon {
  @apply block;
}
.dark .toggle-indicator.dark .fa-moon {
  @apply ml-0;
}
</style>


