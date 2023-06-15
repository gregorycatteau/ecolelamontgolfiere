/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: 
  {
    extend: {
     
    
  
      colors: {
        'pastel-charte-vert': '#c0faa0',
        'pastel-charte-bleu': '#acb4fa',
        'pastel-charte-jaune': '#faf894',
        'pastel-charte-cyan': '#f97afa',
        'pastel-charte-orange': '#fae187',
        'soutenu-charte-vert' : '#8afa25',
        'soutenu-charte-bleu' : '#3257FA',
        'soutenu-charte-jaune' : '#faef19',
        'soutenu-charte-cyan' : '#e100fa',
        'soutenu-charte-orange' : '#fabe0c',
      },
      backgroundImage: {
        'hero-pattern': "url('/chalk2.jpeg')",
        'redarea': "url('/redchalk.jpeg')",
        'child': "url('/illustration-4.jpg')",
        'header': "url('/header-baby.png')",
        'join': "url('/fond-rejoind.jpg')",
      },
      animation: {
        quality: 'quality-animation'
    },
  },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
  ],
};
