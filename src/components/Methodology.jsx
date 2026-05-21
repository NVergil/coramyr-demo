import React from 'react';

const Methodology = () => {
    const steps = [
        {
            phase: 'Diagnóstico Inicial',
            action: 'Estudio minucioso de la causa raíz energética.',
            tool: 'Radiestesia Médica'
        },
        {
            phase: 'Intervención',
            action: 'Limpieza y desintoxicación. Sanación cuántica y equilibrio energético.',
            tool: 'Radiónica / Par Biomagnético'
        },
        {
            phase: 'Soporte Químico Natural',
            action: 'Tratamiento de síntomas físicos y biológicos.',
            tool: 'Homeopatía / Flores de Bach, Células madre / Factor de transferencia'
        },
        {
            phase: 'Seguimiento',
            action: 'Ajuste dinámico según evolución del paciente.',
            tool: 'Consulta Personalizada (presencial o videollamada)'
        }
    ];

    return (
        <section className="py-24 bg-slate-50" id="methodology">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">Metodología Personalizada</h2>
                    <p className="text-gray-600">
                        Un enfoque estructurado paso a paso para identificar y tratar la raíz de tu padecimiento.
                    </p>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                    {/* Header para Desktop */}
                    <div className="hidden md:grid grid-cols-12 gap-6 p-6 bg-slate-100/50 border-b border-slate-100 text-sky-900 font-semibold text-sm">
                        <div className="col-span-3">Fase del Tratamiento</div>
                        <div className="col-span-5">Acción Realizada</div>
                        <div className="col-span-4">Herramienta Utilizada</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-slate-100">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 hover:bg-slate-50/50 transition-colors">
                                {/* Mobile label + content */}
                                <div className="col-span-1 md:col-span-3 flex items-center">
                                    <div>
                                        <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1 md:hidden">Fase del Tratamiento</div>
                                        <div className="font-medium text-gray-900">{step.phase}</div>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-5 flex items-center">
                                    <div>
                                        <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1 md:hidden">Acción Realizada</div>
                                        <div className="text-gray-600 text-sm leading-relaxed">{step.action}</div>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-4 flex items-center">
                                    <div>
                                        <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1 md:hidden">Herramienta Utilizada</div>
                                        <div className="text-gray-800 text-sm font-medium">{step.tool}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
