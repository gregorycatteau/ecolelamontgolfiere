<template>
  <div class="wrapper">
    <img src="./fond.jpg" alt="notfound" class="imagefond"/>
    <div class="postitle">
      <div class="overlay">
        <img 
        src="./logo2.png" 
        class="imagelogo"
        />
      </div>
    </div>
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
  </div>
</template>

<style scoped>
.wrapper {
  @apply relative;
}
.imagefond {
  @apply w-11/12 m-auto rounded-3xl h-auto backdrop-blur-0 sepia;
}
.imagelogo {
  @apply w-[1000px] m-auto rounded-3xl h-auto;
}
.postitle {
  @apply absolute top-20 left-0 w-full h-full flex justify-center items-start;
}
.overlay {
  @apply  bg-zinc-400 bg-opacity-70 rounded-lg p-8 text-center;
}
.title {
  @apply text-7xl text-gray-900 font-bold mb-8;
}
.subtitle {
  @apply text-5xl text-gray-900 font-bold;
}
</style>
