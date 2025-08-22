
import React, { useState } from 'react';
import { FLAGSHIP_PROGRAMS } from '../constants';
import type { FlagshipProgram } from '../types';
import AccordionItem from './AccordionItem';
import { TargetIcon } from './icons/Icons';

const ProgramDetails: React.FC<{ program: FlagshipProgram }> = ({ program }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const colorClasses = {
        sky: {
            bg: 'bg-sky-900/30',
            border: 'border-sky-500/30',
            text: 'text-sky-400',
            ring: 'focus:ring-sky-500',
            hoverBorder: 'hover:border-sky-500/50'
        },
        violet: {
            bg: 'bg-violet-900/30',
            border: 'border-violet-500/30',
            text: 'text-violet-400',
            ring: 'focus:ring-violet-500',
            hoverBorder: 'hover:border-violet-500/50'
        },
        emerald: {
            bg: 'bg-emerald-900/30',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            ring: 'focus:ring-emerald-500',
            hoverBorder: 'hover:border-emerald-500/50'
        },
    };

    const colors = colorClasses[program.color as keyof typeof colorClasses];

    return (
        <div className={`p-8 rounded-lg ${colors.bg} ${colors.border}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                    <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Target Audience</h4>
                        <p className="mt-1 text-white">{program.targetAudience}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Facilitator</h4>
                        <p className="mt-1 text-white">{program.facilitator}</p>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Duration</h4>
                        <p className="mt-1 text-white">{program.duration}</p>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Curriculum</h4>
                    <div className="space-y-2">
                         {program.curriculum.map((week, index) => (
                            <AccordionItem 
                                key={index} 
                                title={week.title} 
                                isOpen={openIndex === index}
                                setIsOpen={() => setOpenIndex(openIndex === index ? null : index)}
                                color={program.color}
                            >
                                {week.content}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </div>
             <div className={`mt-6 p-4 rounded-md flex items-start space-x-3 ${colors.bg} border ${colors.border}`}>
                <div className="flex-shrink-0">
                    <TargetIcon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div>
                    <h4 className={`text-sm font-bold ${colors.text} uppercase`}>Tangible Outcome</h4>
                    <p className="mt-1 text-white">{program.outcome}</p>
                </div>
            </div>
        </div>
    );
};


const FlagshipPrograms: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const colorClasses = {
        sky: { text: 'text-sky-400', border: 'border-sky-500', bg: 'bg-sky-500/10' },
        violet: { text: 'text-violet-400', border: 'border-violet-500', bg: 'bg-violet-500/10' },
        emerald: { text: 'text-emerald-400', border: 'border-emerald-500', bg: 'bg-emerald-500/10' },
    };

    return (
        <section>
            <h2 className="text-3xl font-bold tracking-tight text-white text-center">
                Flagship Program Examples
            </h2>
            <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">
                Pilot programs designed to leverage the unique strengths of an Orthodox media brand and deliver tangible results.
            </p>
            <div className="mt-12">
                <div className="flex justify-center border-b border-slate-700">
                    {FLAGSHIP_PROGRAMS.map((program, index) => {
                        const colors = colorClasses[program.color as keyof typeof colorClasses];
                        return (
                        <button
                            key={program.name}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-3 text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none -mb-px border-b-2
                                ${activeTab === index 
                                    ? `${colors.text} ${colors.border}` 
                                    : 'border-transparent text-slate-400 hover:text-white hover:border-slate-500'
                                }`}
                        >
                            {program.name}
                        </button>
                    )})}
                </div>
                <div className="mt-8">
                    {FLAGSHIP_PROGRAMS.map((program, index) => (
                        <div key={program.name} className={activeTab === index ? 'block' : 'hidden'}>
                            <ProgramDetails program={program} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlagshipPrograms;