import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
   site: "https://example.com",
  // Enable server-side rendering for all pages
    server: {
      port: 3000, // Port for development server
    },
  // //   integrations: [tailwind(), react()],
  //  // Minify HTML and CSS in production builds
  //   buildOptions: {
  //     minify: {
  //       html: true,
  //       css: true,
  //     },
  //   },
  //   // Redirect all `/blog` URLs to `/posts`
  //   redirects: {
  //     "/blog/*": "/posts*",
  //   },
  integrations: [preact()]
});