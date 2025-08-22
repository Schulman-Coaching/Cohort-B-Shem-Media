
import React from 'react';
import { RATIONALE_POINTS } from '../constants';

const StrategicRationale: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">
        The Strategic Rationale: Why This Model Wins
      </h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">
        Leverage your brand's core assets—trust, authority, and network—to offer a premium experience that competitors can't replicate.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {RATIONALE_POINTS.map((point) => (
          <div key={point.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-800">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <point.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-white">{point.title}</h3>
            <p className="mt-2 text-base text-slate-400">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicRationale;