<template>
 <div class="footing">
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
    <a href="https://www.facebook.com/profile.php?id=100093315811712">
      <Icon name="logos:facebook" class="icon" />
    </a>
    
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
.footing {
  @apply bg-indigo-200 flex flex-row justify-between;
}
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
.link {
  @apply text-indigo-800;
}
.icon {
  @apply text-4xl pt-2 mr-10 mt-2;
}
</style>
