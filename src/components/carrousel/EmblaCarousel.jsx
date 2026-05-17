import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import testimonialsData from '../../data/testimonials.json'
import { Star } from 'lucide-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonialsData.map((testimonial) => (
            <div className="embla__slide" key={testimonial.id}>
              <div className="embla__slide__number">
                <div className="bg-teal-800/50 backdrop-blur border border-teal-700/50 p-4 rounded-3xl">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  )
}

export default EmblaCarousel
