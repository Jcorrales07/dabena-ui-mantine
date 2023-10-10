import { Container, Title } from '@mantine/core';
import React from 'react';

function BusinessLocation() {
  return (
    <Container
      style={{
        marginTop: '100px',
      }}
    >
      <Title >Encuentranos:</Title>
      <Container m={0} style={{
        border: '5px solid #ccc',
        borderRadius: '20px',
        padding: '15px 15px 10px 15px',
        marginTop: '20px',
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13530.806574340853!2d-88.01556988574562!3d15.494366910172925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b46734ee0fb%3A0x7b6ef8d3c5fd35ac!2sDABENA%20Tiendas%20Naturistas%20Vitaminas%20y%20Suplementos%20Productos%20Naturales%20GNS%20Medicina%20Natural%20Herborister%C3%ADa!5e0!3m2!1ses-419!2shn!4v1696897029861!5m2!1ses-419!2shn"
          width="100%"
          height="512px"
          style={{
            border: 0,
            borderRadius: '10px',
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Container>
  );
}

export default BusinessLocation;
