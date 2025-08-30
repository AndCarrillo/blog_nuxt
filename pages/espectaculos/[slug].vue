<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.date }} | {{ article.author }}</p>
    <img :src="article.image" alt="Imagen noticia" />
    <div v-html="article.body"></div>
    <div>
      <PrevNext :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
import PrevNext from "~/components/PrevNext.vue";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("espectaculos", params.slug).fetch();
    const [prev, next] = await $content("espectaculos")
      .only(["title", "slug", "category"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      prev,
      next,
    };
  },
  components: {
    PrevNext,
  },
};
</script>
