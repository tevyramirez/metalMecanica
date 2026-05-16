# Plan: Integración de Imágenes de Unsplash

## Objetivo
Reemplazar los placeholders visuales en la landing page con imágenes genéricas profesionales de Unsplash para mejorar la previsualización del diseño "Dark Sophisticated Industrial".

## Archivos Clave & Contexto
- `next.config.ts`: Necesita configuración para permitir imágenes del dominio `images.unsplash.com`.
- `src/app/page.tsx`: Contiene las secciones Hero, Nosotros y Galería que actualmente usan divs con gradientes como placeholders.

## Pasos de Implementación
1. **Configurar Next.js Domains**: Modificar `next.config.ts` añadiendo `images.unsplash.com` a los `remotePatterns` para permitir el uso del componente `<Image />` de Next.js.
2. **Actualizar Hero Section**: Insertar una imagen de soldadura TIG/MIG de alta calidad como fondo del Hero usando el componente `<Image />` con propiedad `fill`.
3. **Actualizar Sección Nosotros**: Reemplazar el contenedor con el icono de llave inglesa por una imagen de un soldador trabajando en un entorno industrial.
4. **Actualizar Galería de Proyectos**: Modificar el array de iteración de la galería para incluir un listado de IDs/URLs de Unsplash que correspondan a estructuras metálicas, trabajos artísticos y entornos industriales.

## Verificación & Pruebas
- Ejecutar `npm run dev` y comprobar que todas las imágenes se cargan correctamente sin errores en consola.
- Verificar que el rendimiento no se vea afectado, asegurando que se utilizan las propiedades `priority` en el Hero.