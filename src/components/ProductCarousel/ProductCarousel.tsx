import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress, Title } from '@mantine/core';
import ProductCard from '../ProductCard/ProductCard';
import { idealPhoto } from '../../assets';

const product = {
  id: 1,
  name: 'Polvo',
  description: 'Polvo para preparar bebida',
  price: 100,
  imageUrl: idealPhoto,
};

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
        slideSize={{base: '65%', md: '35%', sm: '30%', xs: '35%', lg: '25%', xl: '20%'}}
        slideGap="md"
        height={'auto'}
        mt={20}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <ProductCard product={product}></ProductCard>
        </Carousel.Slide>
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </div>
  );
}

export default ProductCarousel;
