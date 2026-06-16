import './Models.css';
import Card from './Card/Card';
import { models } from '@/assets/data/models';

// Sección de modelos: renderiza una Card por cada modelo del array
const Models = () => {
    return (
        <>
            <section id="modelos" className="section-full">
                <h2>Modelos Icónicos</h2>
                <div className="cards-container">
                    {models.map((model) => (
                        <Card
                            key={model.id}
                            img={model.img}
                            alt={model.alt}
                            titulo={model.nombre}
                            texto={model.resumen}
                            to={`/modelos/${model.id}`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Models;
