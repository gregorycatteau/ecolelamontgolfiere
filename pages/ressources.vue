<template>
  <div class="mainwrapper">
    <h1 class="title">Références et ressources</h1>
    <h2 class="subtitle">
      Notre approche peut être considérée comme atypique, voire radicale pour certains. Elle est pour nous tout simplement naturelle et pleine de bon sens. Nous vous invitons à travers ces quelques ressources à nourrir votre propre réflexion.
    </h2>
    <div class="chapterwrapper">
      <h3 class="divider">
        Présentation de l'éducation démocratique et de sa version Sudbury
      </h3>
      <Videoplayer 
      source="./Une semaine à la Sudbury Valley School.mp4" 
      title="Une semaine à la Sudbury Valley School"
      />
    </div>
    <div class="chapterwrapper">
      <h3 class="divider">
        Des personnes inspirantes
      </h3>
      <Videoplayer 
        source="./enthousiasme.mp4" 
        title="Le témoignage d'André Stern"
      />
    </div>
    <div class="chapterwrapper">
      <h3 class="divider">
        Des films à ne pas manquer
      </h3>
      <Videoplayer 
        source="./etredevenir.mp4"
        title="Etre et devenir" 
      />
    </div>
    
      <div class="cerclingtitle">
        <h3 class="divider">
          Les livres que nous vous recommandons
        </h3>
      </div>
      <div class="chapterwrapperbook">
      <a href="https://www.mamaeditions.com/catalogue/mutations/l-ecole-de-la-liberte">
        <img src="@/public/ecoledelaliberte.png" alt="Daniel Greenberg
L’École de la liberté
Un modèle d'éducation autonome et démocratique">
      </a>
      <a href="https://www.decitre.fr/livres/libre-pour-apprendre-9782330068868.html">
        <img src="@/public/librepourapprendre.jpeg" alt="Le best seller de Peter Gray ">
      </a>

    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ressources',
  
}
</script>
<style scoped>
.mainwrapper {
  @apply w-full m-auto items-center flex flex-col justify-center p-10 mt-10;
}
.title {
  @apply text-4xl font-bold text-center text-gray-700 mb-10;
}
.subtitle {
  @apply text-2xl font-bold text-center text-gray-700;
}
.divider {
  @apply text-3xl font-bold text-center text-gray-700;
}
.chapterwrapper {
  @apply w-11/12 m-auto items-center flex flex-col justify-center p-10 mt-10;
}
.chapterwrapperbook {
  @apply w-11/12 m-auto items-center flex flex-row gap-4 justify-center p-10 mt-10;
  
}
.cerclingtitle {
  @apply w-11/12 m-auto items-center flex flex-col gap-4 justify-center p-10 mt-10;
}

</style>