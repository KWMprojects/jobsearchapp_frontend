import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://content.thriveglobal.com/wp-content/uploads/2019/08/load-image.jpg',
    altText: 'LOVE TO WORK',
    caption: '--Be Engaged--'
    
  },
  {
    src: 'https://www.incimages.com/uploaded_files/image/1940x900/getty_846275012_2000133420009280149_365682.jpg',
    altText: 'Slide 2',
    caption: '--Love Where You Work--'
  },
  {
    src: 'https://external-preview.redd.it/ZV8R_FjEaNvrT2da23HbB5zWDgTshllkaJuLCQi1lBc.jpg?auto=webp&s=4f3a2997a84786c232531853b4d38a2ab6f7df19',
    altText: 'Slide 3',
    caption: '--Find A New Home--'
  }
];

const CarouselCom = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className='text-primary'captionHeader={item.caption} captionText='' />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselCom;