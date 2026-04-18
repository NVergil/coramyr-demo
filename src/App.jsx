import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Calendar, ArrowRight, Activity, Stethoscope, HeartPulse } from 'lucide-react';

const FacebookIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-800 text-white rounded-full flex items-center justify-center font-serif text-xl">
              Dra.
            </div>
            <span className="font-semibold text-xl tracking-tight text-teal-900">Elena Valdés</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-teal-800 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
            <Calendar className="w-4 h-4" />
            Agendar Cita
          </button>
        </div>
      </header>

      {/* Hero & About Me */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              Atención Médica Integral
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
              Cuidando tu salud con <span className="font-semibold text-teal-800">empatía y excelencia</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-teal-900/20">
                Agendar mi primera cita
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-medium transition-colors">
                Conocer más
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-200 relative shadow-2xl">
              <img 
                src="/doctor-profile.png" 
                alt="Dra. Elena Valdés" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-teal-100 p-3 rounded-2xl text-teal-800">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Experiencia</p>
                  <p className="font-bold text-gray-900">+15 Años</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty / Profession */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Especialidad y Servicios</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Medicina General', icon: <Stethoscope className="w-8 h-8" /> },
              { title: 'Chequeos Preventivos', icon: <HeartPulse className="w-8 h-8" /> },
              { title: 'Control de Enfermedades', icon: <Activity className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="text-teal-700 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Lo que dicen mis pacientes</h2>
            <p className="text-teal-100/80 max-w-2xl mx-auto">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-teal-800/50 backdrop-blur border border-teal-700/50 p-8 rounded-3xl">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-teal-50 mb-8 leading-relaxed font-light italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat non, tincidunt est. Sed aliquet congue tortor."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center font-medium">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <h4 className="font-semibold">Paciente Anónimo</h4>
                    <p className="text-sm text-teal-200">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="font-serif text-2xl text-teal-900 mb-2">Dra. Elena Valdés</h3>
              <p className="text-gray-500 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <button className="bg-teal-800 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Agendar Cita
              </button>
              
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
            © {new Date().getFullYear()} Dra. Elena Valdés. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
