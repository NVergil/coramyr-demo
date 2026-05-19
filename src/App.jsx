import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, Activity, Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding } from 'lucide-react';
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
              "¿Cuál es el horario de atención?",
              "¿Aceptan seguros médicos?",
              "¿Cómo es el proceso para agendar una cita?",
              "¿Se realizan consultas en línea (Telemedicina)?"
            ].map((q, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-medium text-gray-900">{q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-teal-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Curabitur pretium tincidunt lacus.
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
              <h3 className="font-serif text-2xl text-teal-900 mb-2">{Doctor.name}</h3>
              <p className="text-gray-500 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <a href="https://wa.me/5622151939" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer bg-teal-800 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Agendar Cita
                </button>
              </a>

              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-teal-50 hover:text-teal-700 transition-colors">
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
