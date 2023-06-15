<template>
  <div class="mainwrap">
    <h1 class="title">Devenir Militant</h1>
    <div class="wrapper">
      <div class="subwrapper">
        <h1 class="title">Toi aussi, tu peux rejoindre notre école et être au cœur de l'innovation éducative !</h1>
        <p class="text">
          Ta participation active est essentielle pour construire ensemble une éducation respectueuse de la nature et des êtres humains.
        </p>
        <h2 class="reasons">5 Bonnes raisons de rejoindre notre mouvement</h2>
        <ol class="olstyle">
          <li class="listyle">
            Soutenir la liberté de choix des enfants et la démocratie à l'école.
          </li >
          <li class="listyle">
            Contribuer au développement d'une organisation efficace, où 100% des revenus sont dédiés à l'éducation démocratique au sein de notre école.
          </li>
          <li class="listyle">
            Participer activement à la vie de l'école et de notre association.
          </li>
          <li class="listyle">
            Promouvoir l'éducation démocratique auprès de ton entourage et sensibiliser à l'importance du respect de la nature.
          </li>
          <li class="listyle">
            Bénéficier de tarifs réduits pour les activités de notre école.
          </li>
        </ol>
        <h2 class="reasons">Comment rejoindre notre mouvement ?</h2>
        <p class="text">
          Pour devenir membre de notre association, il te suffit de remplir le formulaire ci-dessous et de nous soutenir par un don.
        </p>
        <p class="text">
          Tu peux contribuer financièrement en faisant un don à notre projet via notre page HelloAsso dédiée. Chaque don compte et permet de développer notre école dans le respect de nos valeurs écologiques et humanistes.
        </p>
        <a class="donate-button" href="https://www.helloasso.com/associations/la-montgolfiere/collectes/creation-ecole-la-montgolfiere" target="_blank">Faire un Don</a>
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
.mainwrap {
  @apply bg-join bg-no-repeat bg-cover bg-center h-screen w-full;
}
.title {
  @apply text-4xl font-bold text-center;
}
.wrapper {
  @apply w-full m-auto items-center flex flex-col justify-center p-10 my-10;
}
.subwrapper {
  @apply w-3/4 m-auto items-center flex flex-col justify-center p-10 my-10;
}
.text {
  @apply text-lg font-bold text-center my-10;
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
.donate-button {
  @apply inline-block px-6 py-3 mt-6 font-medium text-white bg-green-500 rounded-md shadow-md hover:bg-green-600;
}
</style>
