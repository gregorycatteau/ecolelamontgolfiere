<template>
  <div class="wrapping">
    <h1 class="maintitle">Les valeurs que nous défendons</h1>
    <div class="herowrapper">
      <div class="cardwrapper">
        <Icon name="fxemoji:school" class="iconed"/>

      <h2 class="sectiontitle">Liberté
      </h2>
      <p class="text">Pour nous, les humains sont naturellement curieux et apprenants ! Surtout s'ils peuvent explorer leur propre motivation et prendre leur temps. A l'Ecole Démocratique de Paris, chacun peut choisir librement ses activités, avancer à son rythme, en définissant ses propres objectifs... tout en prenant soin de respecter la liberté des autres !</p>
    </div>
    <div class="cardwrapper">
      <Icon name="fluent-emoji-flat:statue-of-liberty" class="iconed"/>
      <h2 class="sectiontitle">Equité</h2>
      <p class="text">L’école est régie par le principe d’égalité de droits entre individus, indépendamment de leur âge. Tout le monde peut participer aux débats et décisions concernant la vie de l’école sur la base de « 1 personne = 1 voix ».
Ainsi, adultes et enfants évoluent dans le même cadre, et travaillent ensemble à l'évolution et au respect du règlement intérieur.</p>
    </div>
    <div class="cardwrapper">
      <Icon name="noto-v1:handshake-medium-dark-skin-tone" class="iconed"/>
      <p class="sectiontitle">Solidarité</p>
      <p class="text">Libérée des contraintes de la compétition et de la hiérarchie, animée par des valeurs de bienveillance et de respect, l’école est un terreau idéal pour la construction de liens authentiques : la rencontre des âges crée une multitude d’interactions, sources précieuses d’apprentissages.</p>
    </div>
    
    </div>
<h1 class="mainlink">Consultez notre charte des valeurs</h1>
  </div>
</template>
<script lang="ts">

</script>
<style scoped>
.wrapping {
  @apply relative mt-5 mx-auto w-9/12;
}
.herowrapper {
  @apply flex justify-between gap-4;
}
.cardwrapper {
  @apply flex flex-col items-center gap-4 border-2 border-gray-300 rounded-lg p-4;
}
.text {
  @apply text-center;
}
.iconed {
  @apply text-6xl;
}
.sectiontitle {
  @apply text-2xl font-bold text-center;
}

.maintitle {
  @apply text-4xl font-bold text-center my-10;
}
.mainlink {
  @apply text-2xl font-bold text-center text-blue-700 my-10;
}
</style>
