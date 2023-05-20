<template>
  <div class="wrapper">
    <div class="intwrapper">
      <h2 class="title">La montgolfière est un établissement scolaire situé dans le nord médoc</h2>
      <p class="text">L'école a pour but d'avoir une structure éducative adaptée à chaque enfant avec comme valeur première </p>
      <p class="text">de le valoriser et l'encourager tout en le guidant à identifier et comprendre ses émotions.</p>
    <p class="text">Nous accueillons les enfants de 2 à 16 ans</p>

    </div>
    
    
  </div>
  <div class="intwrapper">
      <p class="texte">Ce lieu d’épanouissement est rendu possible grâce à la mise en application de nos valeurs fondatrices :</p>
    </div>
</template>
<style scoped>
.wrapper {
  @apply relative my-10 bg-red-600 p-5 w-10/12 mx-auto rounded-3xl z-10;
}
.intwrapper {
  @apply flex flex-col justify-center items-center my-5 w-9/12 mx-auto z-20;
}
.title {
  @apply text-4xl font-bold text-center mb-10 text-green-300 opacity-100 z-50;
}
.text {
  @apply text-xl text-center text-green-100;
}
.texte {
  @apply text-2xl font-bold text-center text-green-600;
}
</style>