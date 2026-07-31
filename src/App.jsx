import React, { Suspense, lazy } from 'react';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, Activity, Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding, HelpCircle, DnaOff } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from './components/SocialsIcons';
import { DOCTOR_CONFIG, SOCIAL_LINKS } from './data/constants';
import Header from './components/Header';
import Speciality from './components/Speciality';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import "./embla.css";
import "./base.css";

const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-sky-200 border-t-sky-700 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">

      <StructuredData />

      <Header doctor={DOCTOR_CONFIG} icons={{ Calendar, ArrowRight, Activity }} />

      <Speciality icons={{ Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding, DnaOff }} />

      <Methodology />

      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQ icons={{ HelpCircle, ChevronUp, ChevronDown }} />
      </Suspense>

      <Footer doctor={DOCTOR_CONFIG} icons={{ Calendar }} socials={{ InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon }} socialLinks={SOCIAL_LINKS} />

    </div>
  );
}

export default App;
