export default function Cuaderno() {
  const semanas = [
    {
      titulo: "Semana 1",
      temas: "Fundamentos de las tecnologías web. Comprendí las diferencias entre sistema web, aplicación, sitio web y página web. Se exploró el funcionamiento de DNS, protocolos TCP/IP y HTTP, y definimos los roles de desarrollador frontend, backend y fullstack.",
      lab: "Laboratorio 01A. Exploración de Visual Studio Code, reconociendo elementos de la interfaz, instalación de extensiones y uso de atajos de teclado.",
      reflexion: "¿Qué aprendí? Las bases teóricas de la web y a preparar mi entorno. ¿Cómo aprendí? Mediante la exposición y la configuración manual de mi editor."
    },
    {
      titulo: "Semana 2",
      temas: "Construcción de páginas con HTML5 y XML. Entendí el Árbol DOM, SEO y compatibilidad entre navegadores. Diseño web con CSS3 empleando Flexbox, Grid Layout, y diseño fluido/responsivo.",
      lab: "Laboratorio 02A. Creación de un diseño flexbox, fluido y responsivo.",
      reflexion: "¿Qué aprendí? A maquetar el esqueleto web y aplicar estilos modernos. ¿Cómo aprendí? Estructurando HTML y aplicando propiedades CSS."
    },
    {
      titulo: "Semana 3",
      temas: "Desarrollo frontend con librerías CSS (Bootstrap y Tailwind). Tipografía, espaciado, utilidades flexbox, y elementos UI como Avatars y Buttons.",
      lab: "Práctica Calificada 03. Desarrollo de un sitio web implementando frameworks CSS.",
      reflexion: "¿Qué aprendí? A maquetar rápidamente interfaces atractivas usando clases utilitarias. ¿Cómo aprendí? Aplicando las clases directamente en el HTML."
    },
    {
      titulo: "Semana 4",
      temas: "JavaScript y Typescript (variables, bucles, funciones flecha y closures). Manejo del DOM mediante JS y creación de animaciones con Canvas.",
      lab: "Laboratorio 04. Desarrollo de una animación interactiva utilizando JavaScript nativo y Canvas.",
      reflexion: "¿Qué aprendí? A dotar de lógica matemática e interactividad a la página web. ¿Cómo aprendí? Escribiendo scripts para modificar el DOM."
    },
    {
      titulo: "Semana 5",
      temas: "Client Side Rendering, arquitectura basada en componentes (JSX, PROPS, CHILDREN) y cómo aplicar estilos dentro de un framework.",
      lab: "Laboratorio 05A. Paso de datos utilizando props y children en componentes hijos.",
      reflexion: "¿Qué aprendí? A pensar en componentes modulares y reutilizables. ¿Cómo aprendí? Creando funciones que retornan JSX y transfiriendo propiedades."
    },
    {
      titulo: "Semana 6",
      temas: "Manejo de eventos, renderizado condicional, formularios y routing. Consumo de APIs utilizando Promesas, Async/Await y Axios.",
      lab: "Laboratorio 06A. Implementación de eventos y renderizado iterativo sobre datos de una API externa.",
      reflexion: "¿Qué aprendí? A conectar la app con backend (APIs) para mostrar datos dinámicos. ¿Cómo aprendí? Haciendo peticiones HTTP con Axios."
    },
    {
      titulo: "Semana 7",
      temas: "Uso de Hooks (UseState, UseEffect, UseContext, UseReducer, etc.) y creación de Hooks personalizados.",
      lab: "Laboratorio 06 (Uso de Hooks). Gestión avanzada del estado y ciclo de vida de los componentes funcionales.",
      reflexion: "¿Qué aprendí? A controlar estados complejos y optimizar el rendimiento. ¿Cómo aprendí? Resolviendo problemas de reactividad."
    },
    {
      titulo: "Semana 8",
      temas: "Revisión de la evaluación de logro, retroalimentación del docente, y desarrollo del primer consolidado.",
      lab: "Consolidación de todos los temas previos abordados.",
      reflexion: "¿Qué aprendí? A identificar áreas de mejora mediante el feedback. ¿Cómo aprendí? Revisando errores y consultando mejores prácticas."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 uppercase">Cuaderno de Aprendizaje</h1>
      
      <div className="space-y-8 mb-16">
        {semanas.map((semana, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
            <h2 className="text-xl font-bold mb-4 text-blue-800">{semana.titulo}</h2>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Temas aprendidos:</strong> {semana.temas}</li>
              <li><strong>Ejercicios de laboratorio:</strong> {semana.lab}</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded text-sm text-gray-800">
              <strong>Reflexión:</strong> <br/>
              <em>{semana.reflexion}</em>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b pb-2">Reflexión Final</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 border border-gray-200">
        <p className="text-gray-700 mb-4"><strong>¿Qué aprendí?</strong><br/> He logrado comprender el ecosistema Frontend para Single Page Applications (SPA). Partiendo de maquetación HTML/CSS, evolucionando a frameworks CSS y finalmente implementando lógicas complejas con Frameworks JS y Hooks.</p>
        <p className="text-gray-700"><strong>¿Cómo aprendí?</strong><br/> A través del aprendizaje basado en problemas y laboratorios prácticos en Visual Studio Code, escribiendo código real e investigando.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b pb-2">Bibliografía</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>(1), (2), (4), (5), (6), (9), (10), (11-17) - Según la bibliografía del sílabo.</li>
        <li>React Docs. Documentación de React.js y Hooks.</li>
        <li>Documentación Web de Mozilla (MDN).</li>
      </ul>
    </main>
  );
}