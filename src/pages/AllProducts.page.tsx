import { Grid, Text } from '@mantine/core';
import { ProductCard } from '../components';
import { idealPhoto } from '../assets';

const product = {
  id: 1,
  name: 'Polvo',
  description: 'Polvo para preparar bebida',
  price: 100,
  imageUrl: idealPhoto,
};

function AllProducts() {
  return (
    <Grid
      style={{
        marginTop: '60px',
      }}
      // grow
    >
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <ProductCard product={product}></ProductCard>
      </Grid.Col>
    </Grid>
  );
}

export default AllProducts;
