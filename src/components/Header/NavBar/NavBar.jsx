import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css'
import logoFord from '@/assets/img/NavBar/logo_ford.png'
import DolarWidget from '../DolarWidget/DolarWidget'

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, Number(import.meta.env.VITE_SCROLL_DELAY_MS) || 50);
        }
    };

  return (
        <nav className="navbar">
            <div className="logo"><img src={logoFord} alt="Logo Ford" /></div>
            <div className="navbar-right">
                <ul>
                    <li><a title="Página de inicio" href="#header" onClick={(e) => handleNavClick(e, 'header')}><i className="fas fa-home"></i> <span className="texto">Inicio</span></a></li>
                    <li><a title="Modelos Icónicos" href="#modelos" onClick={(e) => handleNavClick(e, 'modelos')}><i className="fas fa-car"></i> <span className="texto">Modelos</span></a></li>
                    <li><a title="Galería de fotos" href="#galeria" onClick={(e) => handleNavClick(e, 'galeria')}><i className="fas fa-image"></i> <span className="texto">Galería</span></a></li>
                    <li><a title="Deja tus datos" href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}><i className="fas fa-envelope"></i> <span className="texto">Contacto</span></a></li>
                </ul>
                <DolarWidget />
            </div>
            <div className="navbar-mobile-dolar">
                <DolarWidget />
            </div>
        </nav>
  );
}

export default NavBar;