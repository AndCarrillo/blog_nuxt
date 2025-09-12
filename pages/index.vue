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
  </div>
</template>

<script setup>
import "@/assets/menu.css";
</script>
