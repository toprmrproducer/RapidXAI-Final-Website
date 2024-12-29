import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { AlphaTeam } from './pages/teams/AlphaTeam';
import { BravoTeam } from './pages/teams/BravoTeam';
import { DeltaTeam } from './pages/teams/DeltaTeam';
import { PapaTeam } from './pages/teams/PapaTeam';
import { Pricing } from './components/sections/Pricing/Pricing';
import { Contact } from './components/Contact';
import { MouseGlow } from './components/effects/MouseGlow';
import { GridBackground } from './components/effects/GridBackground';
import { CustomCursor } from './components/effects/CustomCursor';
import { CursorSparkle } from './components/effects/CursorSparkle';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">
        <CustomCursor />
        <CursorSparkle />
        <div className="fixed inset-0 z-0">
          <GridBackground />
        </div>
        
        <MouseGlow />
        
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams/alpha" element={<AlphaTeam />} />
              <Route path="/teams/bravo" element={<BravoTeam />} />
              <Route path="/teams/delta" element={<DeltaTeam />} />
              <Route path="/teams/papa" element={<PapaTeam />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}