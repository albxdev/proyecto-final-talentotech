import React from 'react';
import '../catering-style/catering-style.css';

const CateringForms: React.FC = () => {
    return (
        <div className="form-container">
            {/* Cotización de Plato Servido */}
            <div id="catering-quote">
                <section>
                    <h2>Solicita tu Cotización Servicio de Plato Servido</h2>
                    <p>
                        Completa el siguiente formulario para recibir una cotización personalizada para tu evento.
                    </p>

                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScENtkhseysNHMJxmhBam3pSs_mT_BjQXMKgZOm_pza3aza1Q/viewform?embedded=true"
                        width="640"
                        height="800"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Cotización Plato Servido"
                    >
                        Cargando…
                    </iframe>
                </section>
            </div>

            {/* Cotización de Rueda de Carne tipo Rodizio */}
            <div id="additional-quote">
                <section>
                    <h2>Solicita tu Cotización Servicio de Rueda de Carne tipo Rodizio</h2>
                    <p>
                        Completa el siguiente formulario para recibir una cotización personalizada para tu evento.
                    </p>

                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc0RYM7AgOLLGnCdxcMbixLMe7lB0jwrkeVHeYP9LOTzoFSMA/viewform?embedded=true"
                        width="640"
                        height="800"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Cotización Rueda de Carne"
                    >
                        Cargando…
                    </iframe>
                </section>
            </div>
        </div>
    );
};

export default CateringForms;
