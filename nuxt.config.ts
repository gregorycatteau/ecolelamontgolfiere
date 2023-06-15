// nuxt.config.ts

import defaultTheme from 'tailwindcss/defaultTheme'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt', 
    '@pinia/nuxt', 
    '@nuxt/content',
    '@nuxt/image-edge', 
    '@formkit/nuxt', 
    'nuxt-icon', 
    '@nuxtjs/supabase',
    '@nuxt/devtools',
    
  ],
  devtools: {
    enabled: true,
    vscode: {}
  }
    
  


  
    
  
})


