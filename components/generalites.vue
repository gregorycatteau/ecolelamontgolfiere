<template>
  <div class="wrapper">
    <div class="intwrapper">
      <h2 class="title">Bienvenue à La Montgolfière <br /> <span class="suite">l'école où parents et enfants s'élèvent ensemble!</span></h2>
      <p class="text">À La Montgolfière, nous croyons au potentiel qui sommeille en toi. Notre école est un endroit extraordinaire où tu peux faire éclore tes talents, explorer sans limite et laisser ton imagination prendre son envol.</p>
      <p class="text">Ici, nous t'invitons à exprimer tes émotions, à créer avec passion et à peindre ta vie avec les couleurs de ton choix ! À La Montgolfière, chaque jour est une aventure remplie de surprises et de possibilités infinies.</p>
      <p class="text">Que tu aies 3 ans ou 16 ans, nous t'attendons avec impatience pour partager des moments de joie, de découvertes et de merveilleuses amitiés.</p>
    </div>
    
  </div>
  <div class="intwrapper">
      <p class="texte">La Montgolfière, c'est l'école où se cultivent des valeurs extraordinaires :</p>
    </div>
</template>


<style scoped>
.wrapper {
  @apply relative my-10 p-5 w-11/12 mx-auto;
}
.intwrapper {
  @apply flex flex-col justify-center items-center my-5 w-11/12 gap-4 mx-auto z-20;
}
.title {
  @apply  
  first-line:uppercase 
  first-line:tracking-wider
  first-letter:text-6xl 
  first-letter:font-bold italic
  
  
  first-letter:float-left 
  md:first-letter:float-none
first-letter:text-pastel-charte-jaune
  md:font-Titre
  text-5xl font-bold 
  text-center 
  mb-10 
  text-soutenu-charte-bleu 
  bg-pastel-charte-bleu 
  p-5 
  rounded-3xl 
  shadow-2xl;
}
.suite {
  @apply text-4xl text-justify text-pastel-charte-cyan font-Soustitre font-bold;
}
.text {
  @apply text-4xl text-center font-Textes text-soutenu-charte-bleu bg-pastel-charte-bleu p-5 rounded-3xl shadow-2xl;
}
.texte {
  @apply text-5xl font-bold text-center text-soutenu-charte-cyan;
}
</style>