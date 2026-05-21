import EmblaCarousel from './carrousel/EmblaCarousel';

const Testimonials = () => {
    return (
        <section className="py-24 bg-sky-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light mb-4">Lo que dicen mis pacientes</h2>
                    <p className="text-sky-100/80 max-w-2xl mx-auto">
                        Si ya has visitado varios médicos, has tomado diferentes tratamientos y nada parece funcionar... has llegado al lugar correcto.
                    </p>
                </div>

                <EmblaCarousel />
            </div>
        </section>
    )
}
export default Testimonials