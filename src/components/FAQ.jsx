import { useState } from 'react';

const FAQ = ({ icons: { HelpCircle, ChevronUp, ChevronDown } }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600">
            Encuentra respuestas rápidas a las dudas más comunes.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "¿Cuál es el costo de la consulta?",
              a: "$20 dólares americanos o $350 pesos mexicanos."
            },
            {
              q: "¿Qué método de pago aceptan?",
              a: "Efectivo, Paypal, Western Union o transferencia a cuenta en BBVA."
            },
            {
              q: "¿Qué es la Radiestesia Médica?",
              a: "Una ciencia que nos ayuda a determinar la causa raíz de la enfermedad del paciente."
            },
            {
              q: "¿Qué es un análisis de Radiestesia Médica?",
              a: "Método en el cual, con la muestra de sangre del paciente se realiza un estudio minucioso de la energía electromagnética de las células del mismo."
            },
            {
              q: "¿En qué consiste el tratamiento?",
              a: "Después de tener los resultados del análisis, se procede a realizar una limpieza, desintoxicación, desparasitación y sanación cuántica a distancia. Así como se le proporciona al paciente homeopatía, flores de Bach, Factor de transferencia o células madre (según las necesidades del paciente) y se da seguimiento cada 15 días para verificar síntomas y en casos crónicos se da apoyo emocional al paciente."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-sky-500 shrink-0" />
                  <span className="font-medium text-gray-900 group-hover:text-sky-700 transition-colors">{faq.q}</span>
                </div>
                {openFaq === i ? (
                  <ChevronUp className="w-5 h-5 text-sky-600 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-hover:text-sky-600 transition-colors" />
                )}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm ml-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
