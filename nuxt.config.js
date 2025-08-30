export default {
  target: "static",
  modules: ["@nuxt/content"],
  head: {
    titleTemplate: "%s - Noticias",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
