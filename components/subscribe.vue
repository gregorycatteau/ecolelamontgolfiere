<template>
  <div class="wrapper">
    <div class="subwrapper">
      <h1 class="title">Notre processus d'inscription</h1>
      <p class="text">Avant d’entamer un processus d'admission, nous vous encourageons à en apprendre autant que possible sur <span><nuxt-link to="/projetpedagogique2" class="link">notre pédagogie</nuxt-link></span> et notre philosophie.</p>
      <p class="text">Vous pouvez consulter notre site internet, nous rencontrer lors d’une réunion d’information ou d’une visite de l’école, ou encore nous contacter par téléphone ou par mail.</p>
      <p class="text">Nous vous invitons également à regarder ces multiples ressources à lire et à visionner pour nourrir votre réflexion.</p>
    </div>
    <div class="subwrapper">
      <h2 class="soustitre">Critères d'admission</h2>
      <P class="text">L’école accueille des enfants et adolescents de 2 à 16 ans. Ils peuvent intégrer l’école à tout moment de l’année, à condition qu'il reste de la place.</P>
      <P class="text">L’admission définitive d’un nouveau membre dans notre école dépendra également de son niveau d’autonomie et de son aptitude à respecter notre règlement intérieur.</P>
    </div>
    <div class="subwrapper">
      <h2 class="soustitre">Frais de scolarité</h2>
      <P class="text">Toutes les informations sur les frais de scolarité sont sur 
        <span>
          <nuxt-link to="/tarifs" class="link">Cette Page</nuxt-link>
        </span>
      </P>
    </div>
    <div class="subwrapper">
      <h2 class="soustitre">Etapes d'inscription</h2>
      <ol class="wrapperlist">
        <li class="itemlist">Prendre contact :</li>
          <p class="text">Remplissez le formulaire ci-dessous, nous vous recontacterons par mail ou téléphone pour convenir d’un premier échange téléphonique. Vous pourrez également nous faire part de votre besoin d’une bourse lors de ce premier échange.</p>
       <li class="itemlist">Se rencontrer : </li>
          <P class="text">Nous pourrons convenir d’un entretien individuel qui vous permettra de découvrir l'équipe, le collectif, les locaux, et d'approfondir l'approche et le fonctionnement de l'école. </P>
        <li class="itemlist">Se décider</li>
          <P class="text">Si vous décidez de poursuivre l'aventure, nous vous proposerons un contrat d'inscription. Vous pourrez alors nous faire parvenir les documents nécessaires à l'inscription de votre enfant.</P>
        <li class="itemlist">S'adapter</li>
          <P class="text">L’intégration de votre enfant commence avec une période d’adaptation de 2 semaines. Celle-ci lui permet de s’assurer que l’environnement proposé par l’école lui convient. Elle est également l’occasion pour le collectif de vérifier que le nouvel inscrit est suffisamment autonome et adhère au fonctionnement de l’école.</P>
        <li class="text">Valider l'intégration :</li>
          <P class="text">Si l’adaptation se passe bien, nous vous proposerons un contrat d’inscription pour l’année scolaire suivante.</P>
      </ol>
    </div>
      <P class="font-bold">Nota bene : Au terme de la période d’adaptation, si votre enfant et le collectif sont d’accord, l’inscription est considérée comme définitive. </P>
      <div class="separator"></div>
      <h1 class="title">Formulaire d'inscription</h1>
  </div>
  <div class="form">
  <FormKit
    type="form" 
    
    submit-label="Soumettre" 
    :value="formData" 
    :actions="false" 
    @submit="handleSubmit"
  >
      <template #default="{ state }">
        <FormKit 
          type="text"
          label="Quel est ton nom ?"
          prefix-icon="avatarMan"
          name="nom"
          placeholder="par exemple: Dupont"
          validation="required | length:2,100 | alpha "
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton nom...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', length:'Les noms sont généralement compris entre 2 et 100 caractères...'}"
          
        />
        <FormKit 
          type="text"
          label="Quel est ton Prénom ?"
          prefix-icon="avatarMan"
          name="prénom"
          placeholder="par exemple: Jean"
          validation="required | alpha | length:2,100"
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton prénom...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', length:'Les prénoms sont généralement compris entre 2 et 100 caractères...'}"
        />
        <FormKit 
          type="email"
          label="Quel est ton adresse mail ?"
          prefix-icon="email"
          name="email"
          placeholder="par exemple: jean.dupont@fournisseurmail.fr"
          validation="required | email"
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton adresse mail...', email:'Ton adresse mail ne semble pas valide...'}"
        />
        <FormKit
          type="tel"
          label="Quel est ton numéro de téléphone ?"
          prefix-icon="telephone"
          name="phone"
          placeholder="par exemple: 06 12 34 56 78"
          validation="required |matches:/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/"
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton numéro de téléphone...', number:'Il n\'\y a généralement pas de lettres dans un numéro de téléphone...',matches:'Ton numéro de téléphone ne semble pas valide...'}"
        />
        <FormKit
          Type="text"
          label="Quel est le nom de ton enfant ?"
          prefix-icon="avatarMan"
          name="nomenfant"
          placeholder="par exemple: Dupont"
          validation="required | length:2,100 | alpha "
          :valdation-messages="{required:'Oups ! Je crois que tu as oublié le nom de ton enfant...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', length:'Les noms sont généralement compris entre 2 et 100 caractères...'}"
        />
        <FormKit
          Type="text"
          label="Quel est le prénom de ton enfant ?"
          prefix-icon="avatarMan"
          name="prenomenfant"
          placeholder="par exemple: Jacques"
          validation="required | length:2,100 | alpha "
          :valdation-messages="{required:'Oups ! Je crois que tu as oublié le prénom de ton enfant...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', length:'Les noms sont généralement compris entre 2 et 100 caractères...'}"
        />
        <FormKit
          Type="date"
          label="Quel est sa date de naissance ?"
          prefix-icon="avatarMan"
          name="datenaissance"
          placeholder="par exemple: 10/12/2017"
          validation="required "
          :valdation-messages="{required:'Oups ! Je crois que tu as oublié la date de naissance de ton enfant...'}"
        />

        <FormKit
          Type="date"
          label="Quelle serait la date d'admission souhaitée ?"
          prefix-icon="time"
          name="dateadmission"
          placeholder="par exemple: 10/09/2024"
          validation="required | date_after:today "
          :valdation-messages="{required:'Oups ! C\'est important de savoir quand tu souhaites que ton enfant intègre l\'école...', date_after:'Il n\'est pas possible de préinscrire les enfants par anticipation...'}"
        />

        <FormKit 
          type="textarea"
          label="As-tu d'autres informations à nous communiquer ?"
          name="message"
          prefix-icon="textarea"
          placeholder="par exemple: Votre école est vraiment super (bon c'est un exemple...) !"
          validation="required |alpha | lenght, 2, 1000"
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton message...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', length:'Les messages efficaces sont généralement compris entre 2 et 1000 caractères...'}"
        />
        
        <button class="bouton">
        soumettre</button>
      </template>
    
   
  </FormKit>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const formData = ref({
  nom: '',
  prénom: '',
  email: '',
  telephone: '',
  nomenfant: '',
  prenomenfant: '',
  datenaissance: '',
  dateadmission: '',
  message: '',
})
async function handleSubmit(data) {
  const { data: contact, error } = await supabase
  .from('contact_table')
  .insert({ nom: data.nom, prénom: data.prénom, email: data.email, message: data.message })
  if (error) {
    console.log(error)
  } else {
    console.log(contact)
    formData.value.nom = ''
    formData.value.prénom = ''
    formData.value.email = ''
    formData.value.telephone = ''
    formData.value.nomenfant = ''
    formData.value.prenomenfant = ''
    formData.value.datenaissance = ''
    formData.value.dateadmission = ''
    formData.value.message = ''
  }
}
</script>

<style scoped>
.wrapper {
  @apply 
  relative flex flex-col w-11/12 m-auto mt-10 mb-10;
}
.subwrapper {
  @apply 
  flex flex-col p-10 m-auto mt-10 mb-10 bg-indigo-200 rounded-3xl;
}
.separator {
  @apply 
  w-11/12 m-auto mt-10 mb-10 border-4 border-separate ring-2 ring-slate-700 border-indigo-800;
}
.title {
  @apply 
  text-4xl text-indigo-800 font-bold mb-8 text-center;
}
.text {
  @apply 
  text-xl text-zinc-800 font-normal mb-4 text-justify indent-10;
}
.soustitre {
  @apply 
  text-2xl text-indigo-800 font-bold mb-4 text-center;
}
.wrapperlist {
  @apply 
  list-decimal list-inside;
}
.itemlist {
  @apply 
  text-lg text-indigo-800 font-bold mb-4;
}
.link {
  @apply 
  text-blue-800 font-bold;
}
.bouton {
  @apply 
  bg-indigo-800 text-white text-3xl p-5 rounded-3xl;
}
.form {
  @apply 
  w-auto m-auto mt-10 mb-10 prose;
}



</style>