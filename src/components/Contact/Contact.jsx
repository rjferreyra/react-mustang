
import { useState } from 'react';
import styles from './Contact.module.css';

// Valores iniciales del formulario
const FORM_INICIAL = {
    nombre: '',
    email: '',
    tel: '',
    modeloPref: 'clasico',
    news: 'si',
    mensaje: '',
};

function Contact() {
    // Estado controlado del formulario
    const [formData, setFormData] = useState(FORM_INICIAL);

    // Manejador genérico para todos los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Envío del formulario: previene recarga y muestra datos por consola
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    // Reseteo del formulario al estado inicial
    const handleReset = () => {
        setFormData(FORM_INICIAL);
        console.log('Formulario reseteado');
    };

    return (
        <>
            <section id="contacto" className="section-full">
                <h2>Únete al Club</h2>
                <form className={styles['contacto-form']} onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese su email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="tel">Teléfono:</label>
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            pattern="^\+54[\s-]?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{4}$"
                            onBlur={(e) => e.target.reportValidity()}
                            placeholder="+54 11 1234 5678"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="modeloPref">Modelo Favorito:</label>
                        <select
                            id="modeloPref"
                            name="modeloPref"
                            value={formData.modeloPref}
                            onChange={handleChange}
                        >
                            <option value="clasico">Clásico</option>
                            <option value="moderno">Moderno</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <p>¿Deseas recibir noticias?</p>
                        <label>
                            <input
                                type="radio"
                                name="news"
                                value="si"
                                checked={formData.news === 'si'}
                                onChange={handleChange}
                            /> Sí
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="news"
                                value="no"
                                checked={formData.news === 'no'}
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="mensaje">Comentario:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Ingrese su comentario"
                            value={formData.mensaje}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={handleReset}>Limpiar</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Contact;