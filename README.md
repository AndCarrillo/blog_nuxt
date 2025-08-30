# Blog de Noticias con Nuxt.js

Este proyecto es un blog dinámico desarrollado con Nuxt.js y @nuxt/content, estructurado en tres categorías: sucesos, deportes y espectáculos. Cada noticia incluye autor, fecha, imagen y contenido extenso.

## Estructura

- `/content/sucesos/`
- `/content/deportes/`
- `/content/espectaculos/`

## Funcionalidades

- Navegación entre categorías y artículos
- Botones anterior/siguiente en cada noticia
- Generación estática para despliegue

## Despliegue en Netlify

1. Ejecuta:
   ```bash
   npm run generate
   ```
2. Publica la carpeta `.output/public` en Netlify.
   - **Build Command:** `npm run generate`
   - **Publish Directory:** `.output/public`

## Enlace al sitio desplegado

[Ver blog en Netlify](https://TU-ENLACE-NETLIFY-AQUI)

---

Modifica el enlace por el de tu publicación final en Netlify.
