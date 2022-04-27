import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Radar from './Components/Radar';
import Footer from './Components/Footer';
import styled from 'styled-components';

const AppFlex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 5rem);
`;

const AppContent = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <AppFlex>
      <BrowserRouter>
        <Header />
        <AppContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contato" element={<Contact />} />
            <Route path="radar" element={<Radar />} />
          </Routes>
        </AppContent>
        <Footer />
      </BrowserRouter>
    </AppFlex>
  );
};

export default App;
