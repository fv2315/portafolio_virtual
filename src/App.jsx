import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Cuaderno from './Cuaderno';

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/cuaderno', label: 'Bitácora' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="app-shell">
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <header className="site-header">
          <nav className="nav-wrap" aria-label="Navegación principal">
            <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark">FC</span>
              <span>Favio Castillo<small>Portafolio personal</small></span>
            </Link>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
            <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {item.label}
                </NavLink>
              ))}
              <a className="nav-contact" href="https://github.com/fv2315" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
        </header>

        <div id="contenido" className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/cuaderno" element={<Cuaderno />} />
            <Route path="*" element={<main className="section-wrap"><div className="empty-state"><span className="eyebrow">404 · Página no encontrada</span><h1>Esta ruta no existe.</h1><p>Regresa al inicio para seguir explorando el portafolio.</p><Link className="button button-primary" to="/">Volver al inicio</Link></div></main>} />
          </Routes>
        </div>

        <footer className="site-footer">
          <div className="footer-inner"><Link to="/" className="footer-brand">FC<span>.</span></Link><p>Diseñado y desarrollado por Favio Castillo Lavado.</p><p className="footer-note">React · Vite · Tailwind CSS</p><a href="https://github.com/fv2315" target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a></div>
          <div className="copyright">© {new Date().getFullYear()} · Portafolio académico y profesional</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
