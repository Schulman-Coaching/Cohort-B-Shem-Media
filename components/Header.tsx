
import React from 'react';
import { BrainCircuitIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BrainCircuitIcon className="h-8 w-8 text-sky-400" />
            <span className="text-xl font-bold text-white tracking-tight">
              Cohort Strategy Deep Dive
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;