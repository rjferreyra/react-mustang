import { Link } from 'react-router-dom';
import './Models.css';
import classic from '@/assets/img/Models/classic.jpg';
import modern from '@/assets/img/Models/modern.jpg';

const Models = () => {
    return (
        <>
            <section id="modelos" className="section-full">
                <h2>Modelos Icónicos</h2>
                <div className="cards-container">
                    <article className="card">
                        <img src={classic} alt="Mustang 1964" />
                        <h3>Generación Original (1964)</h3>
                        <p>El nacimiento del "Pony Car" que revolucionó los años 60.</p>
                        <Link to="/modelos/generacion-original"><button>Leer más</button></Link>
                    </article>
                    <article className="card">
                        <img src={modern} alt="Mustang Mach-E" />
                        <h3>Mustang Mach-E</h3>
                        <p>La evolución eléctrica manteniendo el ADN deportivo.</p>
                        <Link to="/modelos/mach-e"><button>Leer más</button></Link>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Models;
