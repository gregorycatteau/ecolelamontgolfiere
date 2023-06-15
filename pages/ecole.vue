<template>
  <Separator></Separator>
  <div class="wrapperingall">
    <div class="hero">
      <div class="imageandgeneral">
        <div class="wrapperimg">
          <img src="/slider1_2.jpg" alt="notfound" class="imagefond" />
        </div>
      </div>
      <div class="wrapgen">
        <Generalites></Generalites>
      </div>
    </div>
    <Separator></Separator>
    <div class="suite">
      <Separator></Separator>
      <valeurs></valeurs>
      <Separator></Separator>
      <Projetpedagogique></Projetpedagogique>
      <Separator></Separator>
      <Environnement></Environnement>
      <Separator></Separator>
      <locaux></locaux>
      <Separator></Separator>
      <Sorties></Sorties>
      <Separator></Separator>
      <Faq></Faq>
      <Separator></Separator>
      <Togglingbutton></Togglingbutton>
    </div>
  </div>
</template>

<style scoped>
.wrapperingall {
  @apply flex flex-col items-center justify-between w-8/12 m-auto;
}

.hero {
  @apply relative flex flex-nowrap justify-center items-center ;
}

.imageandgeneral {
  @apply w-full md:w-2/3;
}

.wrapperimg {
  @apply relative  md:basis-2/3 top-10 left-10;
}

.imagefond {
  @apply object-cover rounded-3xl hover:saturate-200 md:basis-2/3;
}

.wrapgen {
  @apply relative w-full md:w-auto md:flex-1;
}
</style>