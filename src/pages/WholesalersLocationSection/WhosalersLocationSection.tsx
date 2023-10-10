import { Container, Title } from '@mantine/core';
import classes from './Whosalers.module.css';
import { BusinessLocation } from '../../components';

function WhosalersLocationSection() {
  return (
    <Container mt={60} className={classes.wrapper}>
      <Title ta={'center'} style={{
      }}>
        Encuentra Tu Punto Más Cercano
      </Title>
      <BusinessLocation text="Dabena GNS" />
    </Container>
  );
}

export default WhosalersLocationSection;
