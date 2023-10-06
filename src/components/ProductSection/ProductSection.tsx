import { BackgroundImage, Card, Flex, UnstyledButton } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

function ProductSection({ imgUrl, nameSection }: { imgUrl: string; nameSection: string }) {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      setImageHeight(img.height);
    };
  }, [imgUrl]);

  return (
    <Card radius={0} mt={40} p={0}>
      <BackgroundImage
        src={imgUrl}
        radius="sm"
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          height: imageHeight ? `${imageHeight}px` : 'auto',
          cursor: 'pointer',
        }}
      >
        <UnstyledButton
          style={{
            display: 'flex',
            alignItems: 'center ',
            border: '2px solid white ',
            padding: '5px 15px',
            color: 'white',
            fontWeight: 'bold',
            position: 'absolute',
            bottom: 10,
            borderRadius: '500px',
          }}
        >
          {nameSection.toUpperCase()}
          <IconArrowRight />
        </UnstyledButton>
      </BackgroundImage>
    </Card>
  );
}

export default ProductSection;
