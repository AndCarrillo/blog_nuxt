<template>
  <div class="news-box">
    <article>
      <h1>{{ article?.title || "No encontrado" }}</h1>
      <p v-if="article">{{ article.date }} | {{ article.author }}</p>
      <img
        v-if="article && article.image"
        :src="article.image"
        alt="Imagen noticia"
      />
      <ContentRenderer v-if="article" :value="article" />
      <div>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </article>
  </div>
</template>

<style scoped>
.news-box {
  max-width: 700px;
  margin: 2.5rem auto 2.5rem auto;
  background: #fafdff;
  border-radius: 1.1rem;
  box-shadow: 0 2px 18px rgba(21, 101, 192, 0.08);
  border: 1.5px solid #e0f7fa;
  padding: 2.2rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 700px) {
  .news-box {
    padding: 1.1rem 0.3rem 1.2rem 0.3rem;
    border-radius: 0.7rem;
  }
}
</style>

<script setup>
import { ContentRenderer } from "#components";
import PrevNext from "~/components/PrevNext.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useAsyncData("article", () =>
  queryContent("espectaculos").where({ slug }).findOne()
);

const { data: allArticles } = await useAsyncData("all-espectaculos", () =>
  queryContent("espectaculos").sort({ date: 1 }).find()
);

let prev = null;
let next = null;
if (allArticles.value && article.value) {
  const idx = allArticles.value.findIndex((a) => a.slug === article.value.slug);
  if (idx > 0) {
    prev = { ...allArticles.value[idx - 1], category: "espectaculos" };
  }
  if (idx < allArticles.value.length - 1) {
    next = { ...allArticles.value[idx + 1], category: "espectaculos" };
  }
}
</script>
