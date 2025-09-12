<template>
  <div class="prev-next">
    <button @click="$router.back()" class="nav-btn">Atrás</button>
  </div>
</template>

<script setup>
// No props necesarias, solo navegación por historial
</script>
<style scoped>
.prev-next {
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
  margin: 1.5rem 0 0 0;
}
.nav-btn {
  background: transparent;
  color: #1565c0;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.3rem 1.1rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.nav-btn:hover {
  background: #e3f2fd;
  color: #00838f;
}
</style>
