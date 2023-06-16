<template> 
<div class="maintitle">
      <h1 class="titregen">Bienvenue à la Montgolfière</h1>
    </div>
  <div class="wrapper">
    
    <div class="imgwrapper">
      <img src="/Logoimage.png" alt="notfound" class="image"/>
    </div>
    <div class="titling">
    <h1 class="title">L'école alternative du Médoc</h1>
    <h2 class="subtitle">Notre association rassemble les personnes qui souhaitent cheminer ensemble vers l’éducation démocratique pour qu’elles puissent se soutenir, échanger sur leurs expériences et donner de la visibilité à leurs pratiques.</h2> 
    <p class="text">Promouvoir une approche permettant aux enfants de faire leurs propres choix concernant leurs apprentissages et tous les autres domaines de la vie.</p>
    </div>
  </div>
    <blockquote class="bquote">“Chacun devrait pouvoir choisir ce qu’il fait, quand, où, comment et avec qui, du moment que ses décisions ne transgressent pas la liberté des autres de faire de même.

      Chacun, enfant comme adulte, devrait aussi jouir d’une part égale du pouvoir de décision sur le fonctionnement de l’organisation dont il fait partie, notamment sur le règlement intérieur et son application, participant ainsi à y instaurer un cadre de liberté, de confiance, de sécurité et de respect.” 

    </blockquote>
  
</template>
<script lang="ts">

</script>
<style scoped>

.wrapper {
  @apply 
  flex 
  flex-col 
  items-center
  justify-between
  w-10/12 
  m-auto
  gap-4

  md:flex
  md:flex-row
  md:gap-24
  md:w-full
  md:p-10;
}
.maintitle {
  @apply 
  
  text-8xl
  flex 
  flex-col 
  items-center 
  justify-between 
  w-10/12 
  m-auto
  md:flex
  md:flex-col
  md:gap-4
  md:top-10
  md:left-10;
}
.titregen {
  @apply text-6xl font-bimbosharpie text-soutenu-charte-bleu text-center font-bold mb-8 mt-10 p-10 rounded-3xl;
}
.imgwrapper {
  @apply 
  mt-10
  
  md:relative  
  md:basis-1/3 
  md:top-10 
  md:left-10;
}
.image {
  @apply  object-cover rounded-3xl hover:saturate-200 md:basis-1/3;
}
.titling {
  @apply 
  flex 
  flex-col 
  items-center 
  justify-between 
  w-10/12 
  m-auto
  md:flex
  md:flex-col
  md:gap-4
  md:top-10
  md:left-10;
}

.title {
  @apply text-4xl md:text-8xl font-bimbojumbo text-center text-soutenu-charte-bleu font-bold mb-8 mt-10 bg-pastel-charte-bleu p-10 rounded-3xl;
}
.subtitle {
  @apply text-3xl text-gray-900 font-Textes text-center font-bold my-10 bg-pastel-charte-vert md:bg-pastel-charte-bleu p-10 rounded-3xl;
}
.text {
  @apply text-2xl font-Textes text-center text-gray-900 font-bold my-10 p-10 bg-pastel-charte-orange rounded-3xl;
}
.bquote {
  @apply bg-pastel-charte-cyan p-10 rounded-3xl first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold italic
  first-letter:mr-3 first-letter:float-left text-2xl text-gray-900 font-bold font-Textes my-10 w-10/12 m-auto;
}

</style>