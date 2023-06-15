<template>
  <div>
    
  </div>
</template>
<script>
const supabase = useSupabaseClient();
const { data, error } = await supabase
  .from('table_contact')
  .select('*, count(*)')
  .single();

if (error) {
  console.error(error);
} else {
  const totalCount = data.count;
  console.log('Nombre d\'enregistrements :', totalCount);
}

</script>
<style scoped>
  
</style>