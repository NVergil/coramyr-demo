import React from 'react';
import specialtiesData from '../data/specialties.json';

const Speciality = ({ icons }) => {
    return (
        <section className="py-24 bg-white" id="speciality">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">{specialtiesData.sectionTitle}</h2>
                    <p className="text-gray-600">
                        {specialtiesData.sectionDescription}
                    </p>
                </div>
                <div className="flex gap-4 flex-col">

                    <div className="grid md:grid-cols-3 gap-4">
                        {specialtiesData.mainServices.map((item, i) => (
                            <div key={i} className="bg-slate-100 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
                                <div className="text-sky-700 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                    {React.createElement(icons[item.icon], { className: "w-8 h-8" })}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <aside className="bg-slate-100 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
                        {specialtiesData.asideServices.map((item, i) => (
                            <div key={i} className="flex items-center gap-6 mb-6">
                                <div className="text-sky-700 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                    {React.createElement(icons[item.icon], { className: "w-8 h-8" })}
                                </div>
                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        {item.title}
                                    </span>
                                    {' '}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </aside>
                </div>

            </div>
        </section >
    )
}

export default Speciality;