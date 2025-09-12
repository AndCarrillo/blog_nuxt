# Blog de Noticias con Nuxt.js

Este proyecto es un blog dinámico desarrollado con Nuxt.js y @nuxt/content, estructurado en tres categorías: sucesos, deportes y espectáculos. Cada noticia incluye autor, fecha, imagen y contenido extenso.

## Estructura

- `/content/sucesos/`: Noticias de sucesos
- `/content/deportes/`: Noticias de deportes
- `/content/espectaculos/`: Noticias de espectáculos

## Funcionalidades

- Navegación entre categorías desde la página principal
- Avance y retroceso entre noticias
- Generación estática lista para Netlify

## Despliegue en Netlify

1. Inicia sesión en Netlify y crea un nuevo sitio desde GitHub.
2. Selecciona el repositorio `blog_nuxt`.
3. Build command: `npm run generate`
4. Publish directory: `.output/public`
5. Haz clic en "Deploy site".

## Enlace al sitio publicado

<a href="https://nuxt-blog-simple.netlify.app" target="_blank" style="
	display: inline-block;
	background: linear-gradient(90deg, #1976d2 0%, #64b5f6 100%);
	color: #fff;
	border: 1.5px solid #1976d2;
	border-radius: 0.7rem;
	font-size: 1.08rem;
	font-weight: 600;
	padding: 0.45rem 1.5rem;
	text-decoration: none;
	box-shadow: 0 1px 6px rgba(25, 118, 210, 0.10);
	margin: 0.5rem 0 1.5rem 0;
	transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s;
">Ver blog en Netlify</a>

---
