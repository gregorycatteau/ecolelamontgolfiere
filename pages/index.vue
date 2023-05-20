<template>
  <div class="wrapper">
    <img src="@/public/logo2.png" alt="image du logo de l'école" class="image">
    <h1 class="title">Ecole alternative du Médoc</h1>
    <h2 class="subtitle">Notre association rassemble les personnes qui souhaitent cheminer ensemble vers l’éducation démocratique pour qu’elles puissent se soutenir, échanger sur leurs expériences et donner de la visibilité à leurs pratiques.</h2> 
    <p class="text">Promouvoir une approche permettant aux enfants de faire leurs propres choix concernant leurs apprentissages et tous les autres domaines de la vie.</p>
    <blockquote class="bquote">“Chacun devrait pouvoir choisir ce qu’il fait, quand, où, comment et avec qui, du moment que ses décisions ne transgressent pas la liberté des autres de faire de même.

Chacun, enfant comme adulte, devrait aussi jouir d’une part égale du pouvoir de décision sur le fonctionnement de l’organisation dont il fait partie, notamment sur le règlement intérieur et son application, participant ainsi à y instaurer un cadre de liberté, de confiance, de sécurité et de respect.” 

</blockquote>
  </div>
</template>
<style scoped>
.wrapper {
  @apply  w-11/12 m-auto items-center flex flex-col justify-center p-10 mt-10 bg-yellow-400;
}
.image {
  @apply w-1/2 m-auto rounded-3xl h-auto;
}
.title {
  @apply text-4xl text-gray-900 font-bold mb-8 mt-10;
}
.subtitle {
  @apply text-3xl text-gray-900 font-bold my-10;
}
.text {
  @apply text-2xl text-gray-900 font-bold my-10;
}
.bquote {
  @apply bg-indigo-200 p-10 rounded-3xl first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold italic
  first-letter:mr-3 first-letter:float-left text-2xl text-gray-900 font-bold my-10;
}
</style>