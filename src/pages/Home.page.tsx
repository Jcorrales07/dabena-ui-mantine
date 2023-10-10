import { Navigate, useNavigate } from 'react-router-dom';
import { img5, img7, img8, img9, img10 } from '../assets';

import { ProductSection, PhotoCarousel, ProductCarousel, BusinessLocation } from '../components';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: '1440px',
        margin: 'auto',
        marginTop: '60px',
      }}
    >
      <PhotoCarousel />

      {/* Modularizar esto */}
      <ProductSection imgUrl={img5} nameSection={'Todos los productos'} path="productos" />
      <ProductSection imgUrl={img7} nameSection={'Productos en polvo'} path="productos-polvo" />
      <ProductSection imgUrl={img8} nameSection={'Productos Liquidos'} path="productos-liquidos" />
      <ProductSection imgUrl={img9} nameSection={'Super Kits'} path="superkits" />
      <ProductSection
        imgUrl={img10}
        nameSection={'Quiero ser  mayorista'}
        path="quiero-ser-mayorista"
      />

      <ProductCarousel />

      <BusinessLocation></BusinessLocation>
    </div>
  );
}
