import { img5, img7, img8, img9, img10 } from '../assets';

import { ProductSection, PhotoCarousel, ProductCarousel } from '../components';

export default function HomePage() {
  return (
    <>
      <PhotoCarousel />

      {/* Modularizar esto */}
      <ProductSection imgUrl={img5} nameSection={'Todos los productos'} />
      <ProductSection imgUrl={img7} nameSection={'Productos en polvo'} />
      <ProductSection imgUrl={img8} nameSection={'Productos Liquidos'} />
      <ProductSection imgUrl={img9} nameSection={'Super Kits'} />
      <ProductSection imgUrl={img10} nameSection={'Quiero ser  mayorista'} />

      <ProductCarousel />
    </>
  );
}
