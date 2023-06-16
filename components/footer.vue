<template>
  <footer>
    <div class="footing">
      <div :class="{ dark: isDark }" class="wrapper">
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
          <a href="https://www.facebook.com/profile.php?id=100093315811712">
            <Icon name="logos:facebook" class="icon" />
          </a>
      </div> 
    </div>
  </footer>
   
   
   
 
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
  @apply bg-soutenu-charte-bleu flex flex-row min-w-full;
}
.wrapper {
  @apply flex flex-row justify-center items-center py-4 px-6;
}
.dark {
  @apply bg-gray-800 text-gray-100;
}
.nav {
  @apply flex flex-row justify-between items-center;
}
.ul {
  @apply flex list-none;
}
.li {
  @apply mr-6;
}
.link {
  @apply text-indigo-800;
}
.icon {
  @apply justify-end text-4xl pt-2 mr-10 mt-2;
}
</style>
