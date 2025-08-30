<template>
  <div class="prev-next">
    <NuxtLink v-if="prev" :to="`/${prev.category}/${prev.slug}`"
      >Anterior: {{ prev.title }}</NuxtLink
    >
    <span v-else>Anterior: No hay más artículos</span>
    <NuxtLink v-if="next" :to="`/${next.category}/${next.slug}`"
      >Siguiente: {{ next.title }}</NuxtLink
    >
    <span v-else>Siguiente: No hay más artículos</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: Object,
    next: Object,
  },
};
</script>
