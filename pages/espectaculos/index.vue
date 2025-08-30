<template>
  <div>
    <h1>Espectáculos</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="`/espectaculos/${article.slug}`">
          <h2>{{ article.title }}</h2>
          <p>{{ article.date }} | {{ article.author }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Uso de composable auto-importado queryContent
const { data: articles } = await useAsyncData("espectaculos", () =>
  queryContent("espectaculos").sort({ date: -1 }).find()
);
</script>
