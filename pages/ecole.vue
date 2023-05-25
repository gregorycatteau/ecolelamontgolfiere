<template>
    <div class="wrapperingall">
    <Separator></Separator>
    <div class="wrapperimg">
      <img src="/slider1.jpg" alt="notfound" class="imagefond"/>
    </div>
     <Separator></Separator>
    
    <div class="suite">
    <Generalites></Generalites>
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
  @apply w-full h-full bg-white bg-cover bg-center bg-no-repeat;
}

.wrapperimg {
  @apply w-11/12 m-auto aspect-w-16 aspect-h-9 ;
}

.imagefond {
  @apply max-w-full h-auto object-cover z-10  rounded-b-full mt-10;
}


.suite {
  @apply mt-80;
}
</style>
