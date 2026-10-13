import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
      
      {/* Contenedor de la foto con borde degradado */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1.5 rounded-full shadow-2xl mb-6">
        <img 
          src="https://ui-avatars.com/api/?name=Favio+Castillo&background=ffffff&color=2563eb&size=150" 
          alt="Foto de Favio" 
          className="rounded-full border-4 border-white" 
        />
      </div>
      
      {/* Títulos principales */}
      <p className="text-blue-600 font-bold tracking-widest uppercase mb-3 text-sm">
        ¡Hola! Bienvenid@ a
      </p>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
        Mi Portafolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital</span>
      </h1>
      <h2 className="text-2xl text-gray-500 mb-10 font-light">
        Desarrollador Web Frontend
      </h2>
      
      {/* Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a href="#presentacion" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition shadow-lg hover:shadow-blue-500/30">
          Conóceme más
        </a>
        <Link to="/proyectos" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-8 py-3 rounded-full font-medium transition shadow-sm">
          Ver mis Proyectos
        </Link>
      </div>

      {/* Tarjeta de Presentación Elegante */}
      <div id="presentacion" className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-left relative overflow-hidden">
        {/* Detalle visual en el borde izquierdo */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <span className="text-blue-600 text-3xl">👨‍💻</span> Presentación
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
          Soy <strong className="text-gray-900">Favio Samir Castillo Lavado</strong>, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú (UNCP). Me apasiona transformar ideas complejas en soluciones digitales intuitivas, atractivas y funcionales.
        </p>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="text-indigo-500 text-3xl">🚀</span> Estudios y Experiencia
        </h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
            <span className="text-blue-600 font-bold mr-3 mt-0.5">✓</span>
            <div>
              <strong className="text-gray-900 block mb-1">Formación Académica y Certificaciones</strong>
              Ingeniería de Sistemas en la UNCP. Además, cuento con certificaciones técnicas en ciberseguridad, Linux y redes.
            </div>
          </li>
          <li className="flex items-start bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <span className="text-indigo-600 font-bold mr-3 mt-0.5">✓</span>
            <div>
              <strong className="text-gray-900 block mb-1">Experiencia Práctica</strong>
              Administración de repositorios en GitHub, gestión de recursos cloud y configuración de APIs en Google Cloud Platform.
            </div>
          </li>
        </ul>
      </div>
      
    </main>
  );
}