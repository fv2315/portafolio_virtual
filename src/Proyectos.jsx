export default function Proyectos() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Proyectos Concluidos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Diseño Web Responsivo</h3>
          <p className="text-gray-600 mb-4">Página web estructurada con HTML5 y estilizada con CSS3 usando Flexbox y Grid Layout.</p>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">HTML/CSS</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Animación con Canvas</h3>
          <p className="text-gray-600 mb-4">Desarrollo de una animación interactiva utilizando el DOM, JavaScript Vanilla y elementos Canvas.</p>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JavaScript</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h3 className="font-bold text-xl text-gray-800 mb-2">App SPA con Framework JS</h3>
          <p className="text-gray-600 mb-4">Aplicación desarrollada basada en componentes (JSX), utilizando Hooks y consumo de APIs con Axios.</p>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">React JS</span>
        </div>

      </div>
    </main>
  );
}