import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress, Title } from '@mantine/core';

function ProductCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <div>
      <Title
        mt={50}
        style={{
          textAlign: 'center',
        }}
      >
        Productos Efectivos
      </Title>
      <Carousel
        dragFree
        slideSize="70%"
        slideGap="md"
        height={200}
        mt={20}
        getEmblaApi={setEmbla}
        initialSlide={0}
      >
        <Carousel.Slide>
          <div
            style={{
              height: '100%',
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            1
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              height: '100%',
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            2
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              height: '100%',
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            3
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              height: '100%',
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            4
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div
            style={{
              height: '100%',
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            5
          </div>
        </Carousel.Slide>
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </div>
  );
}

export default ProductCarousel;
