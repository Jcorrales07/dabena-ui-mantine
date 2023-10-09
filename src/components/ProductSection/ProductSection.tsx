import { BackgroundImage, Card, Flex, UnstyledButton } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

function ProductSection({
  imgUrl,
  nameSection,
  path,
}: {
  imgUrl: string;
  nameSection: string;
  path: string;
}) {
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      setImageHeight(img.height);
    };
  }, [imgUrl]);

  const redirectTo = () => {
    navigate(path);
  };

  return (
    <Card radius={0} mt={40} p={0} onClick={redirectTo}>
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
          onClick={redirectTo}
        >
          {nameSection.toUpperCase()}
          <IconArrowRight />
        </UnstyledButton>
      </BackgroundImage>
    </Card>
  );
}

export default ProductSection;
