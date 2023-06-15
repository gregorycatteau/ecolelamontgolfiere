<template>
  <div class="scrollbar-thin scrollbar-thumb-rounded">
    <slot></slot>
  </div>
</template>

<style scoped>
/* Styles for scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-pastel-charte-vert;
}

::-webkit-scrollbar-thumb {
  @apply bg-pastel-charte-bleu;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-pastel-charte-cyan;
}

/* Tailwind CSS classes for scrollbar customization */

.scrollbar-thumb-rounded {
  @apply rounded-full ;
}

.scrollbar-thumb-rounded:hover {
  @apply rounded-full ;
}
</style>
