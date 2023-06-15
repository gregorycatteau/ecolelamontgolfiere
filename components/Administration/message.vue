<template>
  <div class="wrapper">
    <div class="subwrapper">
    <h1 class="titre">accéder aux différents messages</h1>
    <h2 class="soustitre">que veux-tu faire ?</h2>
    <div class="regroup">
      <button class="message" @click="showMessageContact = true">
        Gérer les demandes de contact
      </button>
      <Icon name="mdi:email-open-multiple-outline" class="icon"></Icon>
    </div>
    <div class="regroup">
      <button class="message" @click="showMessageInscription = true">
        Gérer les demandes d'inscription
      </button>
      <Icon name="gridicons:reader-follow-conversation" class="icon"></Icon>
    </div>

    <div v-if="showMessageContact">
      <message-contact />
    </div>

    <div v-if="showMessageInscription">
      <message-inscription />
    </div>
  </div>
  </div>
</template>

<script>
import MessageContact from '@/components/Administration/messagecontact.vue';
import MessageInscription from '@/components/Administration/messageinscription.vue';

export default {
  components: {
    MessageContact,
    MessageInscription
  },
  data() {
    return {
      showMessageContact: false,
      showMessageInscription: false
    };
  }
};
</script>

<style scoped>
.wrapper {
  @apply  py-8 flex flex-col gap-4 mx-auto;
}
.subwrapper {
  @apply flex flex-col gap-4 w-11/12 mx-auto bg-green-400 rounded-2xl p-4;
}
.titre {
  @apply text-2xl font-bold mb-4 text-center;
}
.soustitre {
  @apply text-xl font-bold mb-4 text-center;
}
.regroup {
  @apply flex flex-col md:flex-row gap-4 border border-gray-300 rounded-2xl justify-center p-4 bg-slate-400;
}
.message {
  @apply flex flex-col justify-center items-center gap-4 w-11/12 mx-auto bg-slate-400 rounded-2xl p-4;
}
.icon {
  @apply text-6xl text-green-700 items-center justify-center border-2 p-2;
}
</style>


