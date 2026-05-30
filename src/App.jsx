import React from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, Activity, Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding, HelpCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './components/SocialsIcons';
import { DOCTOR_CONFIG, SOCIAL_LINKS } from './data/constants';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Speciality from './components/Speciality';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import "./embla.css";
import "./base.css";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">

      <Header doctor={DOCTOR_CONFIG} icons={{ Calendar, ArrowRight, Activity }} />

      <Speciality icons={{ Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding }} />

      <Methodology />

      <Testimonials />

      <FAQ icons={{ HelpCircle, ChevronUp, ChevronDown }} />

      <Footer doctor={DOCTOR_CONFIG} icons={{ Calendar }} socials={{ FacebookIcon, InstagramIcon, TikTokIcon }} socialLinks={SOCIAL_LINKS} />

    </div>
  );
}

export default App;
