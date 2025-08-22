
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        <p>Strategy Deep Dive: Virtual Cohort Learning & Masterminds</p>
        <p>&copy; {new Date().getFullYear()} Interactive Framework. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;