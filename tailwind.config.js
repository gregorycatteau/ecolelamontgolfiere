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
     fontFamily: {
        'bimbopro': ['Bimbo-pro', 'sans-serif'],
        'bimboballpoint': ['Bimbo-pro-ballpoint', 'sans-serif'],
        'bimbojumbo': ['Bimbo-pro-dripping-jumbo', 'sans-serif'],
        'bimbofinetip': ['Bimbo-pro-finetip', 'sans-serif'],
        'bimbosharpie': ['Bimbo-pro-sharpie', 'sans-serif'],
        'bimbowhiteboard': ['Bimbo-pro-whiteboard', 'sans-serif'],
        'Pauline': ['Pauline-script', 'sans-serif'],
        'Titre': ['hwt-artz', 'sans-serif'],
        'Textes': ['vista-sans', 'sans-serif'],
        'Soustitre': ['arno-pro', 'sans-serif'],
     },

    
  
      colors: {
        'pastel-charte-vert': '#9efe76',
        'pastel-charte-bleu': '#84a4d9',
        'pastel-charte-jaune': '#dae979',
        'pastel-charte-cyan': '#a4ecee',
        'pastel-charte-orange': '#dfa06e',
        'soutenu-charte-vert' : '#51eb17',
        'soutenu-charte-bleu' : '#2a37e5',
        'soutenu-charte-jaune' : '#d8eb5b',
        'soutenu-charte-cyan' : '#e100fa',
        'soutenu-charte-orange' : '#e88532',
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
