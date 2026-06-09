import { useParams, Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/Header/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { models } from '@/assets/data/models';
import './ModelDetailPage.css';

function ModelDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const model = models.find((m) => m.id === id);

    const handleVolver = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' });
        }, Number(import.meta.env.VITE_SCROLL_DELAY_MS) || 50);
    };

    if (!model) {
        return (
            <>
                <NavBar />
                <section className="section-full detail-notfound">
                    <h2>Modelo no encontrado</h2>
                    <Link to="/" className="btn-volver">← Volver al inicio</Link>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <section className="section-full model-detail">
                <div className="model-detail-content">
                    <img src={model.img} alt={model.alt} className="model-detail-img" />
                    <div className="model-detail-info">
                        <h2>{model.nombre}</h2>
                        <p>{model.descripcion}</p>
                        <button onClick={handleVolver} className="btn-volver">← Volver a Modelos</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ModelDetailPage;
