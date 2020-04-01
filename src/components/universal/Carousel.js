import React from 'react'
import {UncontrolledCarousel} from 'reactstrap'

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

const CarouselCom = () => <UncontrolledCarousel items={items} />

export default CarouselCom