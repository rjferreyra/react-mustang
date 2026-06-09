import { useState, useEffect } from 'react';
import './DolarWidget.css';

const TIPOS_MOSTRAR = ['oficial', 'blue'];
const INTERVALO_MS = 5 * 60 * 1000; // 5 minutos

function DolarWidget() {
    const [cotizaciones, setCotizaciones] = useState([]);
    const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
    const [error, setError] = useState(false);

    const fetchCotizaciones = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_DOLAR_API_URL);
            const data = await res.json();
            const filtradas = data.filter(({ casa }) => TIPOS_MOSTRAR.includes(casa));
            setCotizaciones(
                filtradas.map(({ nombre, compra, venta }) => ({ label: nombre, compra, venta }))
            );
            setUltimaActualizacion(new Date());
            setError(false);
        } catch {
            setError(true);
        }
    };

    useEffect(() => {
        fetchCotizaciones();
        const intervalo = setInterval(fetchCotizaciones, INTERVALO_MS);
        return () => clearInterval(intervalo);
    }, []);

    if (error) return null;

    return (
        <div className="dolar-widget">
            <span className="dolar-titulo">💵 USD</span>
            <div className="dolar-items">
                {cotizaciones.map(({ label, compra, venta }) => (
                    <div key={label} className="dolar-item">
                        <span className="dolar-label">{label}</span>
                        <span>C: <strong>${compra}</strong></span>
                        <span>V: <strong>${venta}</strong></span>
                    </div>
                ))}
            </div>
            {ultimaActualizacion && (
                <span className="dolar-hora">
                    {ultimaActualizacion.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                </span>
            )}
        </div>
    );
}

export default DolarWidget;
