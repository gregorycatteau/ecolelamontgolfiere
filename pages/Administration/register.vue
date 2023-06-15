<template>
  <main>
    <section
      class="wrapping"
    >
      <form
        @submit.prevent="userRegister"
        class="form"
      >
        <h2 class="lineone">s'enregistrer</h2>
        <div class="linetwo">
          <label for="email" class="labelling">Adresse mail</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="inputing"
            required
          />
        </div>
        <div class="linetwo">
          <label for="password" class="passwording">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="inputing"
            required
          />
        </div>
        <div class="linetwo">
          <label for="confirmPassword" class="passwording"
            >Confirmes ton mot de passe</label
          >
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="inputing"
            required
          />
        </div>
        <button
          type="submit"
          class="bouton"
        >
          Submit
        </button>
        <span
          class="spanning"
          v-if="errorMsg"
          >{{ errorMsg }}</span
        >
        <p class="linethree">As-tu déjà un compte ?</p>
        <nuxt-link class="linking" to="/login"
          >Login</nuxt-link
        >
      </form>
    </section>
  </main>
</template>
<script setup>
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseAuthClient();
const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match!';
    password.value = '';
    confirmPassword.value = '';
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
    return;
  }
  try {
    const { error } = await auth.signUp({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};
watchEffect(() => {
  if (user.value) {
    return navigateTo('/');
  }
});
</script>
<style scoped>
  .wrapping {
    @apply container mx-auto flex flex-wrap items-center justify-center px-5 py-24 text-gray-400;
  }
  .form {
    @apply bg-opacity-50 mt-10 flex w-full flex-col rounded-lg bg-[#242424] p-8 md:mt-0 md:w-1/2 lg:w-2/6;
  }
  .lineone {
    @apply mb-5 text-lg font-medium text-[#aac8e4];
  }
  .linetwo {
    @apply relative mb-4;
  }
  .labelling {
    @apply text-sm leading-7 text-gray-400;
  }
  .inputing {
    @apply bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent;
  }
  .passwording {
    @apply text-sm leading-7 text-gray-400;
  }
  .bouton {
    @apply rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none;
  }
  .spanning {
    @apply bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500;
  }
  .linethree {
    @apply mt-3 text-xs;
  }
  .linking {
    @apply w-fit text-sm text-[#aac8e4] hover:text-[#42b883];
  }
</style>