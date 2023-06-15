<template>
  <div class="wrapper">
    <aside class="menu">
      <h1 class="titre">Du côté des messages</h1>
        <div class="regroup">
          <div class="regroup2">
          <h2 class="soustitre">contacts</h2>
          <compteur></compteur>
        </div>
        <div class="regroup2">

          <h2 class="soustitre">Inscriptions</h2>
          <compteurinscription></compteurinscription>
        </div>
          <h2 class="lying">
            <button class="bouton1" @click="showMessageComponent">
            Gérer les messages
            </button>
          </h2>
          
        </div>
        
          <button class="bouton" @click="showArticleComponent">
            Créer un article
          </button>
        
        
          <button class="bouton" @click="showSendMessageComponent">
            Envoyer un message
          </button>
        
        <li class="lying">Profil</li>
      
    </aside>
    <div class="wrapper2">
      <h1 class="welcome">Bienvenue sur la page administrateur</h1>
      <div v-if="showMessage" class="message">
        <message></message>
      </div>
      <div v-if="showArticle" class="article">
        <article></article>
      </div>
      <div v-if="showSendMessage" class="message">
        <sendmessage></sendmessage>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Administration/message.vue";
import Article from "@/components/Administration/article.vue";
import Sendmessage from "@/components/Administration/sendmessage.vue";
import Compteur from "@/components/Administration/compteur.vue";
import Compteurinscription from "@/components/Administration/compteurinscription.vue";
export default {
  components: {
    Message,
    Article,
    Sendmessage,
    Compteur,
    Compteurinscription,
  },
  data() {
    return {
      showMessage: false,
      showArticle: false,
      showSendMessage: false,
    };
  },
  methods: {
    showMessageComponent() {
      this.showMessage = true;
      this.showArticle = false;
      this.showSendMessage = false;
    },
    showArticleComponent() {
      this.showMessage = false;
      this.showArticle = true;
      this.showSendMessage = false;
    },
    showSendMessageComponent() {
      this.showMessage = false;
      this.showArticle = false;
      this.showSendMessage = true;
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply mt-5 flex flex-col md:flex-row w-11/12 mx-auto ;
}
.wrapper2 {
  @apply flex flex-col w-full;
}
.welcome {
  @apply text-5xl text-center mt-10;
}
.menu {
  @apply bg-gray-200 text-gray-400 flex flex-col w-full h-screen rounded-2xl;
}
.uling {
  @apply flex flex-col items-center justify-center text-green-700 text-3xl;
}
.regroup {
  @apply flex flex-row;
}

.lying {
  @apply gap-16 m-10;
}

.bouton {
  @apply bg-green-700 text-white p-2 m-10 rounded-lg flex flex-row;
}

.bouton1 {
  @apply bg-green-700 text-white p-2 m-10 rounded-lg flex flex-row -ml-5;
}
</style>
