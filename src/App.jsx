import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Core from '@/pages/Core';
import Collaborate from '@/pages/Collaborate';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Background />
      <Header />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/core" element={<Core />} />
            <Route path="/collaborate" element={<Collaborate />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;