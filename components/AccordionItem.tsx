
import React from 'react';
import { ChevronDownIcon } from './icons/Icons';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  color: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, setIsOpen, color }) => {
    const colorClasses = {
        sky: {
            bgHover: 'hover:bg-sky-500/10',
            text: 'text-sky-400',
        },
        violet: {
            bgHover: 'hover:bg-violet-500/10',
            text: 'text-violet-400',
        },
        emerald: {
            bgHover: 'hover:bg-emerald-500/10',
            text: 'text-emerald-400',
        },
    };

    const colors = colorClasses[color as keyof typeof colorClasses];

    return (
        <div className="border border-slate-700/50 rounded-md overflow-hidden">
            <button
                onClick={setIsOpen}
                className={`w-full flex justify-between items-center p-3 text-left font-medium text-white transition-colors duration-200 ${colors.bgHover} focus:outline-none`}
            >
                <span>{title}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${colors.text}`}
                />
            </button>
            {isOpen && (
                <div className="p-3 bg-slate-800/50 text-slate-300">
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;