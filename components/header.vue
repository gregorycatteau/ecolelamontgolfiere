<template>
  <div class="heading">
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
              <Icon name="fluent:people-team-16-filled"></Icon>
            </div>
          </li>
          <li class="li4">
            <div class="limodifier">
              <nuxt-link to="/rejoindre" class="link">Nous rejoindre</nuxt-link>
              <Icon name="majesticons:users-line"></Icon>
            </div>
          </li>
          <li class="li3">
            <div class="limodifier">
              <nuxt-link to="/inscription" class="link">Inscription</nuxt-link>
              <Icon name="mdi:bell-outline"></Icon>
            </div>
          </li>
          <li class="li2">
            <div class="limodifier">
              <nuxt-link to="/actualites" class="link">Actualités</nuxt-link>
              <Icon name="streamline-emojis:newspaper" class="icon"></Icon>
            </div>
          </li>
        </ul>
        <div class="wrapperregistar">
          <div>
      <button v-if="user" @click="logout()">Deconnexion</button>
    </div>
    <div>
      <NuxtLink v-if="!user" to="/connexion">Connexion</NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="!user" to="/register">Enregistrement</NuxtLink>
    </div>
        </div>
        <button class="toggle-btn" @click="toggleDark()">
          <span class="toggle-indicator">
            <icon v-if="isDark" name="openmoji:crescent-moon" />
            <icon v-else name="twemoji:sun-with-face" />
          </span>
        </button> 
        
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
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const router = useRouter();

async function logout() {
  const { error } = await client.auth.signOut();
  if (error) return;
  await router.push('/connexion');
  }
</script>


<style scoped>
.heading {
  @apply sticky bg-teal-50;
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
</style>


