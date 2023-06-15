<template>
  <main class="wrapper">
    <section v-if="user" class="sectionwrap">
      <div class="text-center">
        <figure class="figuring"
        >
          <img
            class="image"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
          />
        </figure>
        <div class="intwrapper">
          <h1 class="firstline">Bonjour et bienvenue</h1>
          <div class="secondline"></div>
          <h3 class="thirdline">Email</h3>
          <p class="fourthline">{{ user.email }}</p>
          <button
            @click="deconnexion"
            class="bouton"
          >
            se déconnecter
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const userLogout = async () => {
  await auth.signOut();
};
watchEffect(() => {
  if (!user.value) {
    return navigateTo('/login');
  }
});
definePageMeta({
  middleware: 'auth',
});
</script>
<style scoped>
  .wrapper {
    @apply text-gray-400;
  }
  .sectionwrap {
    @apply mt-10 flex justify-center;
  }
  .figuring {
    @apply inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-800 text-gray-600;
  }
  .image {
    @apply rounded-full;
  }
  .intwrapper {
    @apply flex flex-col items-center justify-center text-center;
  }
  .firstline {
    @apply mt-4 text-5xl font-black;
  }
  .secondline {
    @apply mt-2 mb-4 h-1 w-12 rounded bg-[#42b883];
  }
  .thirdline {
    @apply text-2xl font-bold text-[#aac8e4];
  }
  .fourthline {
    @apply text-base text-gray-400;
  }
  .bouton {
    @apply mt-8 rounded-md bg-[#42b883] px-4 py-2 font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none;
  }



</style>