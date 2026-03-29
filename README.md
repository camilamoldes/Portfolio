# 📄 Portfolio Personal y Generador de PDFs

Este proyecto surge de la pereza que da mantener un currículum en dos idiomas (inglés y español) luchando con plantillas estáticas donde cualquier pequeño cambio de línea o de sección descuadra toda la estructura.

Por ello he creado esta web. Sirve simultáneamente como un **portfolio web interactivo** y como **generador de PDFs** limpios y bien estructurados.

**Las funciones principales (y razones de ser) del proyecto son:**
- **Información centralizada:** Todos los datos del perfil y el CV residen en un único archivo TypeScript tipado. Al actualizar este archivo, se actualiza la información en todas partes.
- **Soporte multi-idioma nativo:** Preparado desde la base para generar tanto la web como el archivo PDF en inglés y español.
- **IA-Friendly:** El formato de datos puro permite apoyarse fácilmente en LLMs para reformatear textos o añadir nuevas experiencias sin romper el diseño.
- **Diseño automatizado:** Cero diseño gráfico manual ("mover cajitas"). Todo es autogestionado por código mediante Astro (para la web) y Typst (para el PDF).

*Nota: Lógicamente, se ha usado IA para desarrollar este proyecto. Es absurdo hoy en día no utilizar IA para programar más rápido y mejor.*

## 🚀 Tecnologías usadas

- **[Astro](https://astro.build/)** para generar la interfaz de usuario web de forma rápida.
- **[Tailwind CSS](https://tailwindcss.com/)** para el sistema de estilos de la web.
- **TypeScript** para mantener la estructura de datos bajo control.
- **[Typst](https://typst.app/)** para la generación programática de un PDF perfecto sin usar procesadores de texto tradicionales.

## 📁 Estructura Clave del Proyecto

Si quieres empezar a editar e introducir tus propios datos, esta es la ruta a seguir:

```text
/
├── src/data/
│   └── cv-data.ts           Aquí está la info que va a usar el programa para generar el portfolio y el CV en PDF.
├── scripts/
│   └── generate-pdf.ts      El script que coge los datos y escupe el código de Typst para el CV a papel.
├── src/i18n/
│   └── translations.ts      Traducciones de la interfaz web básica (títulos, botones).
└── src/pages/index.astro    La página principal donde se juntan todas las piezas de la interfaz.
```

## 🧞 Comandos base

Para trastear con el código, ejecuta estos comandos en tu terminal desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto.           |
| `npm run dev`             | Levanta la web en modo desarrollo en `localhost`.|
| `npm run pdf`             | **⚙️ Genera los PDFs actualizados** (español e inglés) usando Typst. |
| `npm run build`           | Construye la versión de producción web.          |
