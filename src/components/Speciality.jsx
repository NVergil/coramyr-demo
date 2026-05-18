const Speciality = ({ icons: { Microscope, Leaf, Atom, HeartPulse, Brain, Dna, PersonStanding } }) => {
    {/* Specialty / Profession */ }
    return (
        <section className="py-24 bg-white" >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">Especialidad y Servicios</h2>
                    <p className="text-gray-600">
                        Me formé en The Open International University for Complementary Medicines y me gradué
                        con honores en el Light Harmonics Institute de Nuevo México, bajo la tutela de la reconocida Dra. Linda Lancaster.
                        Mi enfoque no es solo tratar el síntoma, sino encontrar la causa raíz de tu padecimiento para guiarte hacia una
                        recuperación real y personalizada.
                    </p>
                </div>
                {/* Necesito encerrar el div de abajo en un container para agregar un apartado aside a la derecha que funcione con flex */}
                <div className="flex gap-4 flex-col">
                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Modificar el icono de Heartpulse por uno de energia */}
                        {[
                            { title: 'Radiestesia Médica', icon: <Microscope className="w-8 h-8" />, description: 'Ciencia que nos permite medir la energía electromagnética de la célula por medio de una muestra de sangre.' },
                            { title: 'Terapias Naturales', icon: <Leaf className="w-8 h-8" />, description: 'Uso experto de Homeopatía, Flores de Bach, Factor de Transferencia y células madre.' },
                            { title: 'Sanación Cuántica', icon: <Atom className="w-8 h-8" />, description: 'Terapias a distancia y Radiónica que armonizan el campo vital, superando las barreras del espacio' }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-100 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
                                <div className="text-teal-700 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Aside */}
                    <aside className="bg-slate-100 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
                        <div className='flex items-center gap-6 mb-6'>
                            <div className="text-teal-700 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                <Dna className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Tratamiento Oncológico:
                                </span>
                                Cáncer de vejiga, útero, colón, pulmón, linfoma, glándulas mamarias, estómago.
                            </p>
                        </div>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className="text-teal-700 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                <Brain className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Apoyo Neurológico:
                                </span>
                                Artistis reumatoide, Parkinson, Fibromialgia, Alzheimer.
                            </p>
                        </div>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className="text-teal-700 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                <HeartPulse className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Salud Cardiovascular:
                                </span>
                                Arteriosclerosis, Arritmia, Hipertensión, prevención de trombosis y várices.
                            </p>
                        </div>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className="text-teal-700 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                <PersonStanding className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Apoyo Emocional:
                                </span>
                                Terapia de sanación energética y emocional, tratamiento para Ansiedad, y Depresión profunda.
                            </p>
                        </div>
                    </aside>
                </div>

            </div>
        </section >
    )
}

export default Speciality;