# Plan: Actualización de Imágenes de Unsplash con URLs Directas

## Objetivo
Reemplazar las imágenes temporales de la landing page con las imágenes exactas seleccionadas por el usuario desde Unsplash.

## Pasos de Implementación
1. **Extracción de URLs:** Una vez fuera del Modo Planificación, utilizaré scripts de shell (`curl` y `grep`) para analizar las páginas proporcionadas por el usuario y extraer las URLs directas (`https://images.unsplash.com/...`) de los archivos de imagen de alta resolución.
2. **Actualización de Componentes:** 
   - Insertar la URL del soldador de estructura pesada (`JJ8dVYbVU_U`) o la de vigas (`X6thX8FvMLA`) en el `Hero Section`.
   - Distribuir las URLs restantes (soldador TIG, escaleras modernas) en la Galería de Proyectos y la sección Nosotros.
3. **Verificación:** Ejecutar un build rápido para asegurar que las nuevas URLs funcionan correctamente con el componente `<Image />` de Next.js.