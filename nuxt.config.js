export default {
  target: "static",
  modules: ["@nuxt/content"],
  css: ["~/assets/menu.css"],
  head: {
    titleTemplate: "%s - Noticias",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  nitro: {
    preset: "static",
  },
};
