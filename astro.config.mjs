import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en",
          // The `defaultLocale` value must present in `locales` keys
          es: "es",
        },
      },
    }),
    react(),
  ],
  site: "https://stevenaraujo98.github.io",
  base: "/",
});
