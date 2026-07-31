const Footer = ({ doctor, icons: { Calendar }, socials: { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon }, socialLinks }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-sky-900 mb-2">{doctor.title} {doctor.name}</h3>
            <p className="text-gray-500 max-w-sm">
              Especialista en Radiestesia Médica. Brindando diagnósticos precisos y tratamientos naturales personalizados para transformar tu calidad de vida.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer bg-sky-800 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Agendar Cita
              </button>
            </a>

            <div className="flex items-center gap-4">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-500 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer">
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100 text-sm text-gray-400">
          © {new Date().getFullYear()} {doctor.title} {doctor.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
