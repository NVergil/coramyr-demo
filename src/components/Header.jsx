const Header = ({ doctor, icons: { Calendar, ArrowRight, Activity } }) => {
    return (
        <>
            {/* Header */}
            < header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" >
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-sky-800 text-white rounded-full flex items-center justify-center font-serif text-xl">
                            {doctor.title}
                        </div>
                        <span className="font-semibold text-xl tracking-tight text-sky-900">{doctor.name}</span>
                    </div>
                    <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer hidden md:flex items-center gap-2 bg-sky-800 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                            <Calendar className="w-4 h-4" />
                            Agendar Cita
                        </button>
                    </a>
                </div>
            </header >

            {/* Hero & About Me */}
            < section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden" >
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                            CORAMYR | Consultorio en Radiestesia Médica y Radiónica
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">

                            Más de 20 años dedicados <span className="font-semibold text-sky-800">a la sanación a nivel celular.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Mi compromiso es ayudarte a recuperar tu salud, cuando ya has visitado diferentes especialistas y no hay mejoría en tu padecimiento.
                            <br />
                            Tengo más de 22 años de experiencia en sanación del campo cuántico y 17 años de experiencia con especialidad en Radiestesia Médica y Radiónica.
                            Te ofrezco un tratamiento médico integral y personalizado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer flex items-center justify-center gap-2 bg-sky-800 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-sky-900/20">
                                    Agendar mi primera cita
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </a>
                            <a href="#speciality">
                                <button className="cursor-pointer flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-medium transition-colors">

                                    Conocer más
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden bg-gray-200 relative shadow-2xl">
                            <img
                                src="/doctor-profile.png"
                                alt={`Foto de la ${doctor.name}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="bg-sky-100 p-3 rounded-2xl text-sky-800">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Experiencia</p>
                                    <p className="font-bold text-gray-900">+{doctor.experience} Años</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}

export default Header
