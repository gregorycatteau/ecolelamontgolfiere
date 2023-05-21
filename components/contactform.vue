<template>
  <div class="container2">
    <h1 class="h1">Nous contacter</h1>
    <p>Vous pouvez nous contacter en utilisant le formulaire ci-dessous :</p>
    <br>
    <FormKit 
    type="form" 
    submit-label="Soumettre" 
    :value="formData" 
    :actions="false" 
    @submit="handleSubmit" >
      <template #default="{ state }">
        <h1>Soumettre</h1>
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
    type="textarea"
    label="Quel est ton message ?"
    
    name="message"
    placeholder="par exemple: Je vous contacte pour vous dire que votre site est super ! On le savait déjà mais c'est toujours bon à entendre !"
    validation="required |alpha | lenght:2,1000"
    :validation-messages="{required:'Oups ! Je crois que tu as oublié ton message...', alpha:'Tu dois bien avoir un caractère bizarre quelque part...', lenght:'Les messages efficaces sont généralement compris entre 2 et 1000 caractères...'}"
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
import { ref } from 'vue';
const supabase = useSupabaseClient();
const formData = ref({
  nom: '',
  prénom: '',
  email: '',
  message: ''
});

async function handleSubmit(data) {
  // Envoi de l'e-mail
  const emailOptions = {
    nom: data.nom,
    prénom: data.prénom,
    email: data.email,
    message: data.message
  };

  try {
    const emailResponse = await fetch('https://www.ecolelamontgolfiere.fr/.netlify/functions/emails', {
      method: 'POST',
      body: JSON.stringify(emailOptions)
    });

    if (emailResponse.ok) {
      console.log('E-mail envoyé avec succès');
      // Enregistrement dans Supabase uniquement si l'e-mail est envoyé avec succès
      const { data: contact, error } = await supabase
        .from('contact_table')
        .insert({
          nom: data.nom,
          prénom: data.prénom,
          email: data.email,
          message: data.message
        });

      if (error) {
        console.log(error);
        return;
      }

      console.log(contact);
      formData.value.nom = '';
      formData.value.prénom = '';
      formData.value.email = '';
      formData.value.message = '';
    } else {
      console.error("Une erreur s'est produite lors de l'envoi de l'e-mail");
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de l'envoi de l'e-mail", error);
  }
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
    formData.value.message = ''
}
</script>








<style scoped>
.container2 {
  @apply container mx-auto py-8;
}

.h1 {
  @apply text-2xl font-bold mb-4;
}
.name {
  @apply w-full bg-blue-100;
}
.email {
  @apply w-full;
}
.message {
  @apply w-full;
}
.bouton {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}



</style>