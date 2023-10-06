import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Footer, Navbar } from './components';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      <Router />
      <Footer />
    </MantineProvider>
  );
}
