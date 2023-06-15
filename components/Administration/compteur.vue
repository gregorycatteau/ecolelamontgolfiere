<template>
  <div class="wrapper">
    <div class="avertisseur">
      <Icon name="mdi:email-open-multiple-outline" class="icon"></Icon>
      <div class="count">{{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      supabase: null,
      contactTable: null,
    };
  },
  async mounted() {
    try {
      this.supabase = useSupabaseClient();

      await this.fetchContactCount();

      this.contactTable = this.supabase.channel('custom-update-channel')
        .on('postgres_changes', {
          event: '*', 
          schema: 'public',
          table: 'contact_table',
        }, (payload) => {
          console.log('Change received!', payload);
          this.fetchContactCount();
        })
        .subscribe();
    } catch (error) {
      console.log(error);
    }
  },
  beforeUnmount() {
    this.contactTable.unsubscribe();
  },
  methods: {
    async fetchContactCount() {
      try {
        const { count, error } = await this.supabase
          .from('contact_table')
          .select('*', { count: 'exact', head: true })
          .is('read', null);

        if (error) {
          console.log(error);
        } else {
          this.count = count;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply flex justify-center items-center;
}
.avertisseur {
  @apply bg-blue-500 text-zinc-300 rounded-full w-20 h-20 flex flex-col items-center justify-center -mt-5 ml-20;
}
</style>
