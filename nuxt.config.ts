// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-lucide-icons",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
});
