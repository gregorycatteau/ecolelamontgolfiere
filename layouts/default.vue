<template>
  <div class="extwrapper">
    <Heading/>
    <div class="intwrapper">
      <main><slot></slot></main>
    </div>
    <Footing/>
  </div>
</template>

<script lang="ts">
import Heading from '~/components/header.vue'
import Footing from '~/components/footer.vue'

export default {
  components: {
    Heading,
    Footing,
  },
}
</script>
<style scoped>
.extwrapper {
  @apply min-h-screen flex flex-col;
}
.intwrapper {
  @apply flex-1;
}
</style>
