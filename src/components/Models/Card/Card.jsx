import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

// Componente reutilizable para mostrar un modelo de auto
function Card({ img, alt, titulo, texto, to }) {
    return (
        <article className="card">
            <img src={img} alt={alt} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <Link to={to}><button>Leer más</button></Link>
        </article>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Card;
