import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, Activity, Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding, HelpCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './components/SocialsIcons';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Speciality from './components/Speciality';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import "./embla.css";
import "./base.css";

// ---Tareas Realizadas---
// Mover iconos fuera del componente App.jsx = Hecho
// Mover todos los componentes por seccion en diferentes archivos jsx = Hecho
// Vincular los iconos de redes sociales con sus cuentas reales = Hecho
// Vincular botones CTA (Agendar cita) a Calendly/Google Calendar = Se hizo vinculación directa a número de whatsapp

// ---Tareas Pendientes---
// Integrar una imagen real de la doctora = Pendiente
// Crear una version en ingles del proyecto = Pendiente


function App() {

  const Doctor = { name: "Miriam Cabañas Alvistegui" }

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">

      <Header doctor={Doctor} icons={{ Calendar, ArrowRight, Activity, Microscope, Leaf }} />

      <Speciality icons={{ Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding }} />

      <Methodology />

      <Testimonials />

      <FAQ icons={{ HelpCircle, ChevronUp, ChevronDown }} />

      <Footer doctor={Doctor} icons={{ Calendar, FacebookIcon, InstagramIcon, TikTokIcon }} />

    </div>
  );
}

export default App;
