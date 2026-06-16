import { useState, useEffect } from 'react';

const TIPOS_MOSTRAR = ['oficial', 'blue'];
const INTERVALO_MS = 5 * 60 * 1000; // 5 minutos

// Custom hook para obtener cotizaciones del dólar
function useDolar() {
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

    return { cotizaciones, ultimaActualizacion, error };
}

export default useDolar;
