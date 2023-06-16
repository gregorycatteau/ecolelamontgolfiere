<template>
  <div class="extwrapper">
    <Heading class="header"/>
    <div class="intwrapper">
      <main class="main-content">
        
          <slot />
        
      </main>
    </div>
    <Footing class="footing"/>
  </div>
</template>


<script lang="ts">
import Heading from '~/components/header.vue'
import Footing from '~/components/footer.vue'
import Scrollbar from '~/components/scrollbar.vue'

export default {
  components: {
    Heading,
    Footing,
    Scrollbar
  },
}
</script>
<style scoped>

.extwrapper {
  @apply flex flex-col items-center justify-between  bg-pastel-charte-bleu md:bg-cover md:bg-center;
}
.intwrapper {
  @apply flex;
}
.header {
  @apply relative;
}
.footing {
  @apply relative;
}
.main-content {
  @apply relative ;
}
</style>
