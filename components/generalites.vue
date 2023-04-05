<template>
  <div class="wrapper">
    <div class="intwrapper">
      <h2 class="title">La montgolfière est un établissement scolaire situé dans le médoc</h2>
      <p class="text">Nous proposons un modèle éducatif libéré des programmes scolaires prédéfinis.</p>
      <p class="text">Les enfants sont libres de choisir leurs activités et de s'investir dans des projets qui les intéressent.</p>
    <p class="text">Nous accueillons les enfants de 3 à 16 ans</p>

    </div>
    <div class="intwrapper">
      <h1 class="title">Une école où les enfants sont libres et responsables.</h1>
      <p class="text">Nous souhaitons favoriser l’autonomie et la responsabilité, valoriser le partage et la coopération, donner confiance en soi et faciliter le développement de compétences transversales indispensables à tout adulte épanoui. L’École Démocratique de Paris se veut être un lieu d’épanouissement dans lequel l’expérience individuelle et le vivre ensemble sont privilégiés. 

</p>
      
    </div>
    
  </div>
  <div class="intwrapper">
      <p class="texte">Ce lieu d’épanouissement est rendu possible grâce à la mise en application de nos valeurs fondatrices :</p>
    </div>
</template>
<style scoped>
.wrapper {
  @apply relative my-10 bg-blue-100 p-5 w-10/12 mx-auto;
}
.intwrapper {
  @apply flex flex-col justify-center items-center my-5 w-9/12 mx-auto;
}
.title {
  @apply text-4xl font-bold text-center text-gray-700 mb-10;
}
.text {
  @apply text-xl text-center text-gray-700;
}
</style>