import { Link } from 'react-router-dom';
import miFoto from './assets/mi_foto.png';

const strengths = [
  { icon: '⌘', title: 'Desarrollo web', text: 'Construcción de interfaces claras, adaptables y organizadas con React, JavaScript y herramientas CSS modernas.' },
  { icon: '◇', title: 'Ingeniería de sistemas', text: 'Interés por analizar problemas, estructurar soluciones y comprender cómo trabajan juntos los componentes de un sistema.' },
  { icon: '↗', title: 'Aprendizaje continuo', text: 'Práctica constante con proyectos académicos, documentación técnica y control de versiones con Git.' },
];

export default function Home() {
  return <main>
    <section className="section-wrap hero-layout">
      <div className="hero-copy">
        <span className="eyebrow">Estudiante · Ingeniería de Sistemas</span>
        <h1 className="display-title">Hola, soy Favio.<br /><span className="gradient-text">Creo soluciones digitales.</span></h1>
        <p className="lead">Soy Favio Samir Castillo Lavado, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú. Me interesa el desarrollo web y la creación de experiencias digitales útiles, accesibles y bien construidas.</p>
        <div className="button-row"><Link to="/proyectos" className="button button-primary">Explorar proyectos <span aria-hidden="true">↗</span></Link><Link to="/sobre-mi" className="button button-secondary">Conocer mi perfil</Link></div>
        <div className="hero-meta"><span><i></i> Portafolio actualizado · 2026</span><span>Huancayo, Perú</span></div>
      </div>
      <div className="hero-visual"><div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div><div className="photo-frame"><img src={miFoto} alt="Retrato de Favio Samir Castillo Lavado" /></div><div className="floating-card floating-top"><span className="float-symbol">✳</span><span>Curiosidad<br /><b>por aprender</b></span></div><div className="floating-card floating-bottom"><span className="status-dot"></span><span>En constante<br /><b>construcción</b></span></div><span className="visual-caption">FAVIO CASTILLO / PORTAFOLIO</span></div>
    </section>
    <section className="section-wrap home-details">
      <div className="section-heading"><span className="eyebrow">Mi enfoque</span><h2>Tecnología con propósito.</h2><p>Estas son algunas áreas que forman parte de mi proceso de aprendizaje y de los proyectos que desarrollo.</p></div>
      <div className="card-grid">{strengths.map((item) => <article className="info-card" key={item.title}><div className="icon-box" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <div className="home-cta panel"><div><span className="eyebrow">¿Quieres conocer más?</span><h2>Explora lo que estoy aprendiendo.</h2><p>Revisa mis proyectos y la bitácora académica para conocer mi proceso de formación.</p></div><div className="cta-links"><Link to="/proyectos" className="button button-primary">Ver proyectos ↗</Link><Link to="/cuaderno" className="text-link">Abrir bitácora <span>→</span></Link></div></div>
    </section>
    <style>{`
      .hero-layout{display:grid;grid-template-columns:1.12fr .88fr;align-items:center;gap:50px;min-height:650px;padding-top:70px;padding-bottom:70px}.hero-copy{position:relative;z-index:2}.hero-copy .lead{max-width:610px}.hero-meta{display:flex;flex-wrap:wrap;gap:22px;margin-top:34px;color:#8291aa;font-size:.78rem}.hero-meta i,.status-dot{display:inline-block;width:7px;height:7px;background:var(--accent);border-radius:50%;margin-right:8px;box-shadow:0 0 12px #68e0d080}.hero-visual{height:440px;position:relative;display:grid;place-items:center}.photo-frame{position:relative;z-index:2;width:min(75%,300px);aspect-ratio:4/5;padding:8px;border:1px solid rgba(104,224,208,.42);border-radius:155px 155px 28px 28px;background:linear-gradient(150deg,#18283a,#0c1422);box-shadow:0 25px 90px #0006}.photo-frame img{width:100%;height:100%;object-fit:cover;object-position:center 35%;border-radius:150px 150px 22px 22px;filter:saturate(.88)}.visual-orbit{position:absolute;border:1px solid rgba(154,171,255,.2);border-radius:50%;transform:rotate(-28deg)}.orbit-one{width:390px;height:280px}.orbit-two{width:320px;height:420px;transform:rotate(35deg);border-color:rgba(104,224,208,.18)}.floating-card{position:absolute;z-index:3;display:flex;align-items:center;gap:10px;padding:13px 16px;background:rgba(16,24,39,.94);border:1px solid var(--line);border-radius:13px;box-shadow:0 15px 40px #0005;color:var(--muted);font-size:.72rem;line-height:1.5}.floating-card b{color:var(--text);font-size:.82rem}.floating-top{top:58px;right:-2px}.floating-bottom{bottom:58px;left:-6px}.float-symbol{font-size:1.45rem;color:var(--accent)}.visual-caption{position:absolute;bottom:7px;right:0;color:#5f6d84;font-size:.6rem;letter-spacing:.17em}.home-details{padding-top:40px}.home-cta{display:flex;justify-content:space-between;align-items:center;gap:30px;padding:34px;margin-top:64px}.home-cta h2{font-size:clamp(1.6rem,3vw,2.2rem);letter-spacing:-.05em;margin:12px 0}.home-cta p{color:var(--muted);line-height:1.7;max-width:570px;margin:0}.cta-links{display:flex;flex-direction:column;align-items:flex-start;gap:17px;flex-shrink:0}.text-link{color:var(--accent);font-size:.87rem;font-weight:700}.text-link span{margin-left:8px}@media(max-width:760px){.hero-layout{grid-template-columns:1fr;gap:25px;padding-top:58px}.hero-visual{height:390px;grid-row:1}.hero-copy{grid-row:2}.photo-frame{width:220px}.orbit-one{width:300px;height:230px}.orbit-two{width:250px;height:340px}.floating-top{right:3%}.floating-bottom{left:2%}.visual-caption{right:8%}.home-cta{align-items:flex-start;flex-direction:column;padding:25px}.cta-links{flex-direction:row;flex-wrap:wrap;align-items:center}}`}</style>
  </main>;
}
