import useDolar from '../../../hooks/useDolar';
import './DolarWidget.css';

function DolarWidget() {
    const { cotizaciones, ultimaActualizacion, error } = useDolar();

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
