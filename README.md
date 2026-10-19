# Portafolio personal — Favio Castillo

Portafolio académico desarrollado con React y Vite. Incluye presentación personal, perfil, proyectos y una bitácora de aprendizaje.

## Tecnologías

- React para construir la interfaz mediante componentes.
- React Router para la navegación entre páginas.
- Vite para desarrollo local y compilación.
- Tailwind CSS 4 y CSS personalizado para estilos responsivos.

## Requisitos

- Node.js 20.19+ (o una versión LTS compatible con la versión instalada de Vite).
- npm.

## Instalación y ejecución

1. Abre una terminal dentro de la carpeta del proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección local que muestra Vite.

## Compilar para producción

```bash
npm run build
npm run preview
```

La compilación se genera en la carpeta `dist/`.

## Estructura principal

```text
src/
├── assets/       # Imágenes utilizadas en la interfaz
├── App.jsx       # Navegación y rutas
├── Home.jsx      # Página de inicio
├── SobreMi.jsx   # Perfil personal y tecnologías
├── Proyectos.jsx # Proyectos y enlaces a repositorios
├── Cuaderno.jsx  # Bitácora académica
├── index.css     # Estilos globales y sistema visual
└── main.jsx      # Punto de entrada de React
```

## Personalización

- Revisa los textos de `Home.jsx` y `SobreMi.jsx` para mantenerlos actualizados.
- Verifica que cada enlace de `Proyectos.jsx` apunte al repositorio correcto.
- En `Cuaderno.jsx`, actualiza las semanas según las actividades realmente desarrolladas.
- Sustituye la fotografía de `src/assets/mi_foto.png` si deseas cambiar el retrato.

> Nota: los proyectos y temas incluidos son los que figuran en esta versión del portafolio. Conviene revisar nombres, descripciones y enlaces antes de publicarlo.
