<template>
  <div>
    <h1>Blog de Noticias</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/sucesos">Sucesos</NuxtLink></li>
        <li><NuxtLink to="/deportes">Deportes</NuxtLink></li>
        <li><NuxtLink to="/espectaculos">Espectáculos</NuxtLink></li>
      </ul>
    </nav>
    <div v-for="article in articles" :key="article.slug">
      <NuxtLink :to="`/${article.category}/${article.slug}`">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from "#app";
// Uso de composables automáticos de Nuxt Content

const { data: sucesos } = await useAsyncData("sucesos", () =>
  queryContent("sucesos").find()
);
const { data: deportes } = await useAsyncData("deportes", () =>
  queryContent("deportes").find()
);
const { data: espectaculos } = await useAsyncData("espectaculos", () =>
  queryContent("espectaculos").find()
);
const articles = [
  ...(sucesos.value || []),
  ...(deportes.value || []),
  ...(espectaculos.value || []),
];
</script>
