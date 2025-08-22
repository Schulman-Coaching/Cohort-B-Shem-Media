
import React from 'react';
import { PROGRAM_COMPONENTS } from '../constants';

const ProgramStructure: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">
        The Program Structure: A Blueprint for Success
      </h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">
        More than just a series of webinars, a successful cohort is a structured, interactive experience designed for transformation.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROGRAM_COMPONENTS.map((component, index) => (
          <div key={component.title} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{component.title}</h3>
                <p className="text-sm font-medium text-sky-400">{component.description}</p>
            </div>
            <p className="mt-2 text-slate-400">{component.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramStructure;