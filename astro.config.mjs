import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ivaan22.github.io",
  base: "/hidrosat-web",
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
  },
  image: {
    responsiveStyles: true,
  },
});
