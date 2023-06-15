<template>
  <div class="extwrapper">
    <Heading class="header"/>
    <div class="intwrapper">
      <main class="main-content">
        
          <slot />
        
      </main>
    </div>
    <Footing/>
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
  @apply flex flex-col items-center justify-between w-full h-full bg-pastel-charte-bleu md:bg-cover md:bg-center;
}
.intwrapper {
  @apply flex;
}
.header {
  @apply relative;
}
.main-content {
  @apply relative ;
}
</style>
