import { Card, Image, Text, Button } from '@mantine/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card shadow="sm" padding="md">
      <Image src={product.imageUrl} alt={product.name} style={{
        // width:'50%'
      }}/>
      <Text size="lg" style={{ marginTop: '1rem' }}>
        {product.name}
      </Text>
      <Text size="sm" style={{ marginTop: '0.5rem' }}>
        {product.description}
      </Text>
      <Text size="lg" style={{ marginTop: '0.5rem' }}>
        ${product.price}
      </Text>
      <Button variant="outline" color="blue" style={{ marginTop: '1rem' }}>
        Add to cart
      </Button>
    </Card>
  );
}
