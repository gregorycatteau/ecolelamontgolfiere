<template>
  <div class="wrapper">
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
          Type="date"
          label="Quelle serait la date d'admission souhaitée ?"
          prefix-icon="time"
          name="dateadmission"
          placeholder="par exemple: 10/09/2024"
          validation="required | date_after"
          :validation-messages="{
            required:'Oups ! C\'est important de savoir quand tu souhaites que ton enfant intègre l\'école...',
            date_after:'La date d\'admission doit être supérieure à la date du jour...'}"
        />
        <FormKit
          type="tel"
          label="Quel est ton numéro de téléphone ?"
          prefix-icon="telephone"
          name="telephone"
          placeholder="par exemple: 06 12 34 56 78"
          validation="required |matches:/^0[1-9](?:\d{2}){4}$/, 'Veuillez entrer un numéro de téléphone français valide')
"
          :validation-messages="{required:'Oups ! Je crois que tu as oublié ton numéro de téléphone...', number:'Il n\'\y a généralement pas de lettres dans un numéro de téléphone...',matches:'Ton numéro de téléphone ne semble pas valide...'}"
        />
      
        
        <button :disabled="state.loading" class="bouton">
      {{ state.loading ? "Envoi en cours..." : "Soumettre"}}
    </button>
    <p v-if="state.error" class="text-red-500">
      {{ state.error }}</p>
      </template>
    
   
  </FormKit>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const formData = ref({
  
  dateadmission: '',
  telephone: '',
  
})
async function handleSubmit(data) {
  const { data: contact, error } = await supabase
  .from('formtest')
  .insert({ dateadmission: data.dateadmission, telephone: data.telephone })
  if (error) {
    console.log(error)
  } else {
    console.log(dateadmission, telephone)
    
    
    formData.value.dateadmission = ''
    formData.value.telephone = ''
    
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