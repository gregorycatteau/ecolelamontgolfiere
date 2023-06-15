<template>
  <div class="test">
    <div v-for="contact in contacts" :key="contact.id" class="contact-block">
      <div class="colone1">
        <div class="coltitle">Coordonnées du contact</div>
        <div>Nom: {{ contact.nom }}</div>
        <div>Prénom: {{ contact.prénom }}</div>
        <div>
          <span>Email: </span>
          <a :href="`mailto:${contact.email}?cc=association@ecolelamontgolfiere.fr&subject=Réponse à votre demande de contact effectuée sur le site de l'école La Montgolfière`">{{ contact.email }}</a>
        </div>
        <div>téléphone: {{ contact.telephone }}</div>
      </div>
      <div class="colone2">
        <div class="coltitle">Enfant</div>
        <div>Nom: {{ contact.nomenfant }}</div>
        <div>Prénom: {{ contact.prenomenfant }}</div>
        <div>Date de naissance: {{ contact.datenaissance }}</div>
        <div>Date inscription souhaitée : {{ contact.dateadmission }}</div>
      </div>
      <div class="colone3">
        <div class="coltitle">Message</div>
        <div>{{ contact.message }}</div>
      </div>

      <div class="colone4">
        <div class="coltitle">Marquer comme lu</div>
        <FormKit type="form" :actions="false">
          <FormKit
            type="checkbox"
            name="lu"
            :value="false"
            validation="none"
            validation-visibility="dirty"
            class="checkbox"
            @change="markAsRead(contact.id)"
          ></FormKit>
        </FormKit>
      </div>
      <div class="colone5">
        <div class="coltitle">Supprimer</div>
        <FormKit type="form" :actions="false">
          <FormKit
            type="checkbox"
            name="supprimer"
            :value="false"
            validation="none"
            validation-visibility="dirty"
            class="checkbox"
            @change="confirmDelete(contact)"
            
          ></FormKit>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: []
    };
  },
  async mounted() {
    try {
      const supabase = useSupabaseClient();
      const { data: table_pre_inscription, error } = await supabase
        .from('table_pre_inscription')
        .select('*')
        .is('read', null)
        .order('created_at', { ascending: true });
      if (error) {
        console.log(error);
      } else {
        this.contacts = table_pre_inscription;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async markAsRead(id) {
      try {
        const supabase = useSupabaseClient();
        const { data: table_pre_inscription, error } = await supabase
          .from('table_pre_inscription')
          .update({ read: true })
          .eq('id', id);
        if (error) {
          console.log(error);
        } else {
          this.contacts = table_pre_inscription;
        }
      } catch (error) {
        console.log(error);
      }
      try {
      const supabase = useSupabaseClient();
      const { data: table_pre_inscription, error } = await supabase
        .from('table_pre_inscription')
        .select('*')
        .is('read', null)
        .order('created_at', { ascending: true });
      if (error) {
        console.log(error);
      } else {
        this.contacts = table_pre_inscription;
      }
    } catch (error) {
      console.log(error);
    }
    },
    async confirmDelete(contact) {
      if (confirm(`Vous êtes sur le point de supprimer les données du contact ${contact.nom}, ${contact.prénom}. Cette suppression est définitive.`)) {
        try {
          const supabase = useSupabaseClient();
          const { data, error } = await supabase
            .from('table_pre_inscription')
            .delete()
            .eq('id', contact.id);

          if (error) {
            console.log(error);
          } else {
            this.contacts = this.contacts.filter(c => c.id !== contact.id);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        // Annuler la suppression en décochant la checkbox
        contact.supprimer = false;
      }
    }
  }
};
</script>
<style scoped>
.test {
  @apply flex flex-col gap-4 w-11/12 mx-auto;
}

.contact-block {
  @apply grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 rounded-2xl justify-center p-4 bg-slate-400;
}

.coltitle {
  @apply font-bold mb-2 bg-green-600 rounded-xl text-center text-white;
}

.colone1 {
  @apply border p-5 bg-green-300 rounded-2xl text-zinc-700;
}

.colone2 {
  @apply border p-5 bg-green-300 rounded-2xl text-zinc-700;
}

.colone3 {
  @apply border p-5 bg-green-300 rounded-2xl text-zinc-700;
}

.colone4 {
  @apply border p-5 bg-green-300 rounded-2xl text-zinc-700 m-16;
}
.colone5 {
  @apply border p-5 bg-green-300 rounded-2xl text-zinc-700 m-16;
}

.checkbox {
  @apply mt-4 flex items-center; /* Ajout de la classe 'items-center' */
  background-color: white; /* Ajout de la couleur de fond blanc */
}

/* Optionnel: Pour que chaque bloc prenne toute la largeur disponible */
.contact-block {
  @apply w-full;
}

.checkbox input[type="checkbox"] {
  @apply rounded-full bg-white;
}
</style>