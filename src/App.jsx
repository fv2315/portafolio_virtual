import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Cuaderno from './Cuaderno';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
        {/* Menú de Navegación */}
        <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-blue-700">Mi Portafolio</Link>
            <div className="space-x-4 font-medium hidden md:flex">
              <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
              <Link to="/sobre-mi" className="hover:text-blue-600 transition">Sobre mí</Link>
              <Link to="/proyectos" className="hover:text-blue-600 transition">Proyectos</Link>
              <Link to="/cuaderno" className="hover:text-blue-600 transition">Cuaderno</Link>
            </div>
          </div>
        </nav>

        {/* Contenido de las páginas */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/cuaderno" element={<Cuaderno />} />
          </Routes>
        </div>

        {/* Pie de página */}
        <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
          <p>&copy; 2026 Favio Samir Castillo Lavado. Desarrollado para UNCP.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;