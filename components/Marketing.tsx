
import React from 'react';
import { MARKETING_STRATEGIES, MARKETING_ICONS } from '../constants';

const Marketing: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold tracking-tight text-white text-center">
                Marketing Engine
            </h2>
            <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">
                The media company's existing assets are the primary marketing engine, providing a direct line to the target audience.
            </p>
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {MARKETING_STRATEGIES.map((strategy) => {
                    const Icon = MARKETING_ICONS[strategy.title];
                    return (
                        <div key={strategy.title} className="flex items-start space-x-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                                {Icon && <Icon className="h-5 w-5" />}
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white">{strategy.title}</h3>
                                <p className="mt-1 text-sm text-slate-400">{strategy.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Marketing;