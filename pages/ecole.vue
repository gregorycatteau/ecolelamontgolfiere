<template>
  <Separator></Separator>
  
    
  <div class="wrapperingall">
    <div class="hero">
      <h2 class="title">Bienvenue à La Montgolfière <br /> <span class="suite">l'école où parents et enfants s'élèvent ensemble!</span></h2>
        <div class="wrapperimg">
          <img src="/slider1_2.jpg" alt="notfound" class="imagefond" />
        </div>
    </div>
    <Separator></Separator>
    <div class="suite2">
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
  @apply flex flex-col items-center justify-between;
}
.hero {
  @apply flex 
  flex-col 
  items-center 
  justify-between 
  md:flex-row
  leading-10
  ;
}
.wrapgen {
  @apply flex flex-col items-center justify-between;
}
.wrapperimg {
  @apply flex flex-col items-center justify-between w-10/12 rounded-3xl m-auto h-96;
}
.imagefond {
  @apply object-cover rounded-3xl m-auto;
}
.title {
  @apply  
  first-line:uppercase 
  first-line:tracking-wider
  first-letter:text-6xl 
  first-letter:font-bold italic
  
  
  
  first-letter:float-none
first-letter:text-pastel-charte-jaune
   
  font-bold 
  text-center 
  mb-10 
  text-soutenu-charte-bleu 
  bg-pastel-charte-bleu 
  p-5 
  rounded-3xl 
  md:font-Titre
  md:text-8xl
  ;
}
.suite {
  @apply text-4xl text-justify text-pastel-charte-cyan font-bimbofinetip font-bold;
}
.suite2 {
  @apply md:mt-48;
}
</style>