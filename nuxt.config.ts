// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-lucide-icons",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-appwrite",
  ],
  appwrite: {
    endpoint: "http://localhost/v1",
    project: "673d3ccb001374411ea2",
  },
});
