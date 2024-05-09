import locales from './locales';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Manrope: {
            wght: [700, 800],
          },
        },
      },
    ],
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    locales,
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
  },
});
