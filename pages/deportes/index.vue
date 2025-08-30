<template>
  <div>
    <h1>Deportes</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="`/deportes/${article.slug}`">
          <h2>{{ article.title }}</h2>
          <p>{{ article.date }} | {{ article.author }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useContent } from "@nuxt/content";
const { data: articles } = await useContent("deportes")
  .sort({ date: -1 })
  .find();
</script>
