import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = (props) => {
    const imageSlides = [
        '/Office-5.jpg',
        'Office-4.jpg',
        'Office-3.jpg',
        'Office-6.jpg',
        'Office-1.jpg',
        'Office-7.jpg',
        'Office-2.jpg',
        'Office-8.jpg',
      ]
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])


  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageSlides.map((index) => (
            <div className="embla__slide" key={index}>
            <img
              src={index}
              alt={'Slide ${index + 1}'}
              className="embla_slide_img"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
