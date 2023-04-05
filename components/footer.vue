<template>
  <div :class="{ dark: isDark }">
    <nav class="nav">
      <ul class="ul">
        <li class="li">
          <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
        </li>
        <li class="li">
          <nuxt-link to="/ressources" class="link">Ressources</nuxt-link>
        </li>
        <li class="li">
          <nuxt-link to="/contact" class="link">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts">
import { useDarkModeStore } from "@/store/darkmode";


export default {
  name: "Footing",
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDark = computed(() => darkModeStore.isDark)

    return {
      isDark,
    };
  },
};
</script>

<style scoped>

.dark {
  @apply bg-gray-800 text-gray-100;
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
</style>
