export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      meta: [
        { name: 'google-site-verification', content: '8aBEGykV_15nMpqshHPhNY74v1wwCFASnDGRDduB8rg' }
      ]
    }
  }
})
