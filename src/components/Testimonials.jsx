import testimonialsData from '../data/testimonials.json'
import useEmblaCarousel from 'embla-carousel-react'

const Testimonials = ({ icons: { Star } }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true })
    return (
        <section className="py-24 bg-teal-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light mb-4">Lo que dicen mis pacientes</h2>
                    <p className="text-teal-100/80 max-w-2xl mx-auto">
                        Si ya has visitado varios médicos, has tomado diferentes tratamientos y nada parece funcionar... has llegado al lugar correcto.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, i) => (
                        <div key={testimonial.id} className="bg-teal-800/50 backdrop-blur border border-teal-700/50 p-8 rounded-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center font-medium">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-teal-200">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-6 mt-6 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-teal-50 mb-8 leading-relaxed font-light italic">
                                {testimonial.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonials