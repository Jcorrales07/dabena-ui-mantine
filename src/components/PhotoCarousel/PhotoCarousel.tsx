import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { img1, img2, img3, img4 } from '../../assets';

function PhotoCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <div
      style={{
        marginTop: '60px',
      }}
    >
      <Carousel
        withIndicators
        height={500}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              height: '100%',
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundImage: `url(${img3})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              height: '100%',
              backgroundImage: `url(${img4})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
