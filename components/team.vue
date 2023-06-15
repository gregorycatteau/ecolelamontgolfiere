<template>
  <div class="mainwrapper">
    <div class="team">
      <h1 class="h1">L'équipe</h1>
      <h2 class="p">Nous sommes une équipe de 3 personnes, passionnées par l'enseignement et la pédagogie.</h2>
      <h2 class="p">Voici nos profils</h2>
    </div>
    <div class="wrapperteam">
      <div class="team-member">
      <Jenny></Jenny>
      </div>
     
      <div class="team-member">
        <Kate></Kate>
      </div>
      
      <div class="team-member">
      <Greg></Greg>
      </div>
    </div>
  </div>
 <separator></separator>
  <separator></separator>
  <div class="litterature">
    <h2 class="p">Notre projet n'en est quà ses débuts</h2>
    <h2 class="p">Nous avons encore beaucoup de travail à accomplir avant de pouvoir ouvrir notre école.</h2>
    <h2 class="p">La première étape est déjà franchie et nous nous sommes constitués en association.</h2>
    <h2 class="p">Tu peux d'ailleurs consulter nos <span><NuxtLink to="/statuts_asso_lamontgolfiere" class="linker"> statuts</NuxtLink></span></h2>
    <h2 class="p">Nous avons donc rédigé <span><NuxtLink to="/projetpedagogique" class="linker"> un projet pédagogique </NuxtLink> </span>qui nous permettra de nous présenter à nos futurs partenaires.</h2>
    <h2 class="p">Une étape importante de notre développement va consister à recruter notre futur(e) directeur(trice).</h2>
    
  </div>
  <separator></separator>
  <div class="recrutement">
    <h1 class="h1">Nous recherchons donc activement :</h1>
    <h2 class="p">notre responsable pédagogique</h2>
    <h2 class="question">Prêt(e) à relever le défi ?</h2>
    <nuxt-link to="fiche_de_poste" class="recruit">Découvres d'abord le profil de poste</nuxt-link>
  </div>
  <separator></separator>
  <div class="managetitleandimage">
    <div class="managetitle">
      <h2 class="p2">Et comprends bien que pour nous : </h2>
      <h2 class="fixedtitle">Peu importe que tu sois :</h2>
      <div class="movingtitle">
        <titremanager></titremanager>
      </div>
    </div>
    <div class="manageimage">
      <imagemanager></imagemanager>
    </div>
  </div>
  <div class="qualitydev">
    <div class="insidequalitydev">
    <h2 class="p">Ce qui compte pour nous, c'est que tu aies le profil suivant : </h2>
  <qualitymanager></qualitymanager>
    </div>
  </div>
  <separator></separator>
  <separator></separator>
</template>

<script>
import Jenny from "/components/Jenny.vue";
import Kate from "/components/Kate.vue";
import Greg from "/components/Greg.vue";
import separator from "/components/separator.vue";

import titremanager from "/components/titremanager.vue";
import imagemanager from "/components/imagemanager.vue";
import qualitymanager from "/components/qualitymanager.vue";
export default {
  components: {
    Jenny,
    Kate,
    Greg,
    separator,
    titremanager,
    imagemanager,
    qualitymanager
  },
};
</script>

<style scoped>
.mainwrapper {
  @apply 
  flex
  flex-col
  md:flex 
  md:flex-col;
}
.team {
  @apply 
  flex 
  flex-col 
  items-center 
  justify-center 
  gap-4 
  my-16;
}
.h1 {
  @apply 
  text-center 
  text-4xl 
  font-bold 
  my-5
  md:text-8xl ;
}
.p {
  @apply  
  m-auto 
  text-center 
  text-base 
  font-bold 
  mb-5
  md:text-4xl ;
}
.p2 {
  @apply 
  text-center 
  text-2xl 
  font-bold 
  mb-5 
  text-pastel-charte-bleu
  md:text-4xl ;
}
.wrapperteam {
  @apply  
  w-10/12
  flex
  flex-col
  m-auto
  rounded-3xl
  gap-10
  p-5
  md:w-12
  md:flex-row
  md:flex
  md:flex-nowrap
  md:items-center
  md:justify-center
  md:gap-4 ;
}
.team-member {
  @apply 
  md:basis-1/3
  ;
}

.question {
  @apply 
  text-center 
  text-2xl 
  font-bold 
  mb-5
  md:text-4xl ;
}
.recruit {
  @apply 
  text-base 
  w-8/12 
  m-auto 
  flex 
  items-center 
  justify-center 
  bg-soutenu-charte-orange 
  text-soutenu-charte-bleu 
  font-bold 
  p-4 
  rounded-full;
}
.managetitleandimage {
  @apply 
  w-10/12 
  m-auto 
  flex 
  flex-col 
  md:flex 
  md:flex-row 
  items-center 
  justify-between 
  gap-4 
  bg-soutenu-charte-bleu 
  p-10 
  rounded-3xl;
}
.managetitle {
  @apply 
  flex 
  flex-col 
  items-center 
  text-center;
}
.fixedtitle {
  @apply 
  text-3xl 
  md:text-2xl 
  font-bold 
  text-center 
  p-10;
}
.movingtitle {
  @apply 
  text-4xl 
  font-bold 
  text-center 
  text-soutenu-charte-jaune  
  p-10;
}
.manageimage {
  @apply 
  w-1/2;
}
.qualitydev {
  @apply 
  w-10/12 
  mx-auto 
  flex 
  flex-col 
  items-center 
  justify-between 
  my-16;
}
.insidequalitydev {
  @apply 
  gap-10 
  flex 
  flex-col 
  items-center 
  justify-between;
}
.litterature {
  @apply 
  w-11/12 
  m-auto 
  flex 
  flex-col 
  items-center 
  justify-between 
  gap-4 
  bg-pastel-charte-jaune 
  p-10 
  rounded-3xl;
}
.recrutement {
  @apply 
  w-11/12 
  m-auto 
  flex 
  flex-col 
  items-center 
  justify-between 
  gap-4 
  bg-pastel-charte-vert 
  p-10 
  rounded-3xl;
}
.linker {
  @apply 
  text-soutenu-charte-bleu 
  cursor-pointer;
}
</style>


