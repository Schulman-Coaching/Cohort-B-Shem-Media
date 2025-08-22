
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StrategicRationale from './components/StrategicRationale';
import ProgramStructure from './components/ProgramStructure';
import FlagshipPrograms from './components/FlagshipPrograms';
import Monetization from './components/Monetization';
import Marketing from './components/Marketing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 my-24">
          <StrategicRationale />
          <ProgramStructure />
          <FlagshipPrograms />
          <Monetization />
          <Marketing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;