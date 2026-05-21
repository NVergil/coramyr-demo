import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, Activity, Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding, HelpCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './components/SocialsIcons';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Speciality from './components/Speciality';
import Methodology from './components/Methodology';
import "./embla.css";
import "./base.css";

// Mover iconos fuera del componente App.jsx
// Mover todos los componentes por seccion en diferentes archivos jsx
// Integrar una imagen real de la doctora
// Vincular los iconos de redes sociales con sus cuentas reales
// Vincular botones CTA (Agendar cita) a Calendly/Google Calendar
// Crear una version en ingles del proyecto


function App() {
  const [openFaq, setOpenFaq] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const Doctor = { name: "Dra. Miriam Cabañas Alvistegui" }

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">

      <Header icons={{ Calendar, ArrowRight, Activity, Microscope, Leaf }} />

      <Speciality icons={{ Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding }} />

      <Methodology />

      <Testimonials />


      {/* FAQ */}
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
                    <HelpCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900 group-hover:text-sky-700 transition-colors">{faq.q}</span>
                  </div>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 group-hover:text-sky-600 transition-colors" />
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-sky-900 mb-2">{Doctor.name}</h3>
              <p className="text-gray-500 max-w-sm">
                Especialista en Radiestesia Médica. Brindando diagnósticos precisos y tratamientos naturales personalizados para transformar tu calidad de vida.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <a href="https://wa.me/5622151939" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer bg-sky-800 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Agendar Cita
                </button>
              </a>

              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/coramyr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/dr.miriam_cabanas_alvistegui/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@radiestesia_medica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-100 text-sm text-gray-400">
            © {new Date().getFullYear()} {Doctor.name}. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
