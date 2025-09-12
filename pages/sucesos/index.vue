<template>
  <div>
    <NuxtLink to="/" class="nav-btn">Atrás</NuxtLink>
    <h1>Sucesos</h1>
    <ul class="news-list">
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="`/sucesos/${article.slug}`">
          <h2>{{ article.title }}</h2>
          <p>{{ article.date }} | {{ article.author }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import "@/assets/menu.css";
// Uso de composable auto-importado queryContent
const { data: articles } = await useAsyncData("sucesos", () =>
  queryContent("sucesos").sort({ date: -1 }).find()
);
</script>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  margin: 2.5rem 0 0 0;
  list-style: none;
  align-items: center;
}
.news-list li {
  width: 100%;
  max-width: 540px;
  background: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 1px 8px rgba(21, 101, 192, 0.06);
  border: 1.5px solid #e0f7fa;
  transition: box-shadow 0.18s, border 0.18s;
}
.news-list li:hover {
  box-shadow: 0 4px 16px rgba(21, 101, 192, 0.13);
  border-color: #b3e5fc;
}
.news-list li a {
  display: block;
  padding: 1.2rem 1.3rem;
  text-decoration: none;
}
.news-list h2 {
  font-size: 1.18rem;
  color: #1565c0;
  margin: 0 0 0.4rem 0;
  font-weight: 600;
}
.news-list p {
  color: #00838f;
  font-size: 0.98rem;
  margin: 0;
}
@media (max-width: 600px) {
  .news-list li {
    max-width: 98vw;
  }
  .news-list h2 {
    font-size: 1.01rem;
  }
}
</style>
