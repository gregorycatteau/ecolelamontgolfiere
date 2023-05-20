export default {
  // ... autres options de configuration ...
  build: {
    rollupOptions: {
      external: ["@netlify/emails"],
    },
  },
};
