
import styles from './Contact.module.css'

function Contact() {
  return (
    <>
      <section id="contacto" className="section-full">
            <h2>Únete al Club</h2>
            <form className={styles['contacto-form']}>
                <div className={styles['form-group']}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Ingrese su email" required />
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
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="modelo-pref">Modelo Favorito:</label>
                    <select id="modelo-pref" name="modelo-pref">
                        <option value="clasico">Clásico</option>
                        <option value="moderno">Moderno</option>
                    </select>
                </div>
                <div className={styles['form-group']}>
                    <p>¿Deseas recibir noticias?</p>
                    <label><input type="radio" name="news" value="si" defaultChecked /> Sí</label>
                    <label><input type="radio" name="news" value="no" /> No</label>
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="mensaje">Comentario:</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Ingrese su comentario"></textarea>
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpiar</button>
                </div>
            </form>
        </section>
     </>
  );
}

export default Contact;