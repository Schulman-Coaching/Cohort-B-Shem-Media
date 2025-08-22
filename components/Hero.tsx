
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 text-center">
        <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Virtual Cohort Learning & Masterminds
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
                A strategic framework to transform your brand from a content provider to a facilitator of high-value, community-based learning experiences, unlocking new revenue and deepening engagement.
            </p>
        </div>
    </div>
  );
};

export default Hero;