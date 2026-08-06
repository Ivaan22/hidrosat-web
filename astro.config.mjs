import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
  },
  image: {
    responsiveStyles: true,
  },
});
