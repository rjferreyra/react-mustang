import { Link } from 'react-router-dom';
import NavBar from '../../components/Header/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <>
            <NavBar />
            <section className="section-full notfound">
                <h2>404</h2>
                <p>La página que buscás no existe.</p>
                <Link to="/" className="btn-volver">← Volver al inicio</Link>
            </section>
            <Footer />
        </>
    );
}

export default NotFoundPage;
