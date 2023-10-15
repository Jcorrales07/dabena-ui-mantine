import { Container, Table, Text, Title } from '@mantine/core';
import classes from './Whosalers.module.css';
import { BusinessLocation } from '../../components';

const Horarios = [
  {
    dia: 'Lunes',
    horario: '8:00 am - 5:30 pm',
  },
  {
    dia: 'Martes',
    horario: '8:00 am - 5:30 pm',
  },
  {
    dia: 'Miercoles',
    horario: '8:00 am - 5:30 pm',
  },
  {
    dia: 'Jueves',
    horario: '8:00 am - 5:30 pm',
  },
  {
    dia: 'Viernes',
    horario: '8:00 am - 5:30 pm',
  },
  {
    dia: 'Sabado',
    horario: 'Cerrado',
  },
  {
    dia: 'Domingo',
    horario: 'Cerrado',
  },
];

function WhosalersLocationSection() {
  return (
    <Container mt={60} className={classes.wrapper}>
      <Title ta={'center'} mb={30}>
        Horarios de atención
      </Title>
      <Container size={'sm'} mb={30}>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Dia</Table.Th>
              <Table.Th>Horario</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Horarios.map((horario) => (
              <Table.Tr>
                <Table.Td>{horario.dia}</Table.Td>
                <Table.Td>{horario.horario}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>

      <Title ta={'center'}>Encuentra Tu Punto Más Cercano</Title>
      <BusinessLocation text="Dabena GNS" direction="Ba. Medina. 12 Calle, 3 y 4 Avenida" />
    </Container>
  );
}

export default WhosalersLocationSection;
