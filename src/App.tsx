// import '../src/generalStyles.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Footer, Navbar, ScrollToTop } from './components';
import { theme } from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllProducts, HomePage } from './pages';
import VistaPrueba from './components/ComponentePrueba/VistaPrueba';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<AllProducts />} />
          <Route path="/productos-polvo" element={<VistaPrueba text="productos en polvo" />} />
          <Route path="/productos-liquidos" element={<VistaPrueba text="productos liquidos" />} />
          <Route path="/superkits" element={<VistaPrueba text="super kits" />} />
          <Route
            path="/quiero-ser-mayorista"
            element={<VistaPrueba text="quiero ser mayorista" />}
          />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  );
}
