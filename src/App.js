import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Asegúrate de que esta ruta sea correcta
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Home from './components/pages/Home';
import Club from './components/pages/Club';
import Nosotros from './components/pages/Nosotros';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/club' element={<Club />} />
        <Route path='/Nosotros' element={<Nosotros />} />
      </Routes>
      <Footer /> {/* Asegúrate de que el Footer esté aquí */}
    </Router>
  );
}

export default App;
