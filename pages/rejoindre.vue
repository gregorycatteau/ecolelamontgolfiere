<template>
  <div>
    <h1 class="title">Devenir Membre</h1>
    <div class="wrapper">
      <div class="subwrapper">
        <h1 class="title">Vous aussi vous pouvez rejoindre notre école pour être au coeur de l'innovation éducative.</h1>
        <p class="text">
          Une adhésion à l'association est nécessaire pour participer à la vie de l'école.
        </p>
        <h2 class="reasons">5 Bonnes raison d'adhérer</h2>
        <ol class="olstyle">
          <li class="listyle">
            Soutenir la promotion du libre choix de l'enfant et la démocratie à l'école.
          </li >
          <li class="listyle">
            Participer au développement d'une organisation efficace, dont les revenus participent à 100% au développement de l’éducation démocratique au sein de notre école.
          </li>
          <li class="listyle">
            Participer à la vie de l'école et à la vie de l'association.
          </li>
          <li class="listyle">
            Promouvoir l'éducation démocratique auprès de votre entourage.
          </li>
          <li class="listyle">
            Bénéficier de tarifs réduits pour les activités de l'école.
          </li>
        </ol>
        <h2 class="reasons">Comment adhérer ?</h2>
        <p class="text">
          Pour adhérer à l'association, il suffit de remplir le formulaire ci-dessous et de nous envoyer un chèque de 10€ à l'ordre de l'association "La Montgolfière"
        </p>
      </div>
      </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'rejoindre',
  
}
</script>
<style scoped>
.title {
  @apply text-4xl font-bold text-center mb-10 my-10
}
.wrapper {
  @apply w-full m-auto items-center flex flex-col justify-center p-10 my-10;
}
.subwrapper {
  @apply w-3/4 m-auto items-center flex flex-col justify-center p-10 my-10;
}
.text {
  @apply text-lg font-bold text-center  my-10;
}
.reasons {
  @apply text-2xl font-bold text-center my-10;
}
.olstyle {
  @apply list-decimal list-inside;
}
.listyle {
  @apply text-lg font-bold text-justify indent-10 ;
}
</style>