import NavBar from "./NavBar/NavBar";
import insignia from '@/assets/img/Header/insignia.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <NavBar />
      <section id="header" className="section-full">
          <div className="hero-content">
              <h1>Ford<img src={insignia} alt="Insignia Ford" />Mustang</h1>
              <p>El rugido que cambió la historia del automovilismo</p>
          </div>
      </section>
    </>
  );
}

export default Header;
