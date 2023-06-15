<template>
  <div class="wrapping">
    <h1 class="maintitle">Ensemble, on s'élève vers de nouveaux horizons !</h1>
    <div class="herowrapper">
      <div class="cardwrapper">
        

      <h2 class="sectiontitle">Respectons et protégeons la nature
      </h2>
      <p class="text">À l'École de la Montgolfière, nous explorons les merveilles de la nature en la respectant et en la protégeant. Chaque plante, chaque animal est un ami avec qui nous partageons ce grand voyage. Ensemble, nous nous élevons vers un monde plus vert et plus magique !</p>
    <Icon name="fxemoji:school" class="iconed"/></div>
    <div class="cardwrapper">
      
      <h2 class="sectiontitle">Solidaires et unis comme de vrais amis</h2>
      <p class="text">À l'École de la Montgolfière, nous sommes une équipe solidaire ! Nous nous entraidons, partageons nos connaissances et célébrons nos différences. Ensemble, nous nous élevons vers des sommets de courage et de gentillesse, prêts à sauver le monde !</p>
    <Icon name="fluent-emoji-flat:statue-of-liberty" class="iconed"/></div>
    <div class="cardwrapper">
      
      <h2 class="sectiontitle">Harmonie et paix, comme une douce mélodie</h2>
      <p class="text">À l'École de la Montgolfière, nous chantons une mélodie d'harmonie et de paix. Nous écoutons les émotions de chacun et apprenons à résoudre les conflits en douceur. Ensemble, nous nous élevons vers un monde rempli d'amitié, de rires et de bonheur !</p>
    <Icon name="noto-v1:handshake-medium-dark-skin-tone" class="iconed"/>
  </div>
    
    </div>
<h1 class="mainlink">Découvres les valeurs qui nous animent</h1>
  </div>
</template>


<script lang="ts">

</script>
<style scoped>
.wrapping {
  @apply  rounded-3xl my-10;
}
.maintitle {
  @apply text-5xl font-bold text-right bg-soutenu-charte-orange text-soutenu-charte-bleu p-10 rounded-bl-full shadow-2xl;
}

.herowrapper {
  @apply flex flex-col gap-10;
}
.cardwrapper {
  @apply bg-soutenu-charte-cyan flex flex-col items-center gap-10  rounded-tr-full rounded-bl-3xl p-4 shadow-2xl;
}
.text {
  @apply text-center text-pastel-charte-vert text-3xl font-bold;
}
.iconed {
  @apply text-6xl text-left bg-slate-50 rounded-3xl;
}
.sectiontitle {
  @apply text-3xl font-bold text-left text-green-300 mt-24;
}

.maintitle {
  @apply text-4xl font-bold text-right my-10;
}
.mainlink {
  @apply mt-10 text-2xl font-bold text-center text-soutenu-charte-bleu hover:bg-soutenu-charte-bleu hover:text-white hover:rounded-3xl hover:ring-white hover:ring-2 cursor-pointer;
}
</style>
