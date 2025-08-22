
import React, { useState, useEffect } from 'react';

const Monetization: React.FC = () => {
  const [price, setPrice] = useState<number>(1500);
  const [participants, setParticipants] = useState<number>(20);
  const [revenue, setRevenue] = useState<number>(0);

  useEffect(() => {
    setRevenue(price * participants);
  }, [price, participants]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">
        Monetization & Business Impact
      </h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">
        This module is designed to be a significant profit center. These are premium, high-touch programs and should be priced accordingly.
      </p>
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-slate-300">
              Price per Participant: <span className="font-bold text-sky-400">{formatCurrency(price)}</span>
            </label>
            <input
              id="price"
              type="range"
              min="500"
              max="2500"
              step="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
          <div>
            <label htmlFor="participants" className="block text-sm font-medium text-slate-300">
              Cohort Size: <span className="font-bold text-sky-400">{participants} participants</span>
            </label>
            <input
              id="participants"
              type="range"
              min="15"
              max="30"
              step="1"
              value={participants}
              onChange={(e) => setParticipants(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
        </div>
        <div className="text-center bg-slate-900/50 border border-sky-500/20 rounded-lg p-8">
            <h3 className="text-lg font-medium text-slate-400">Projected Revenue per Cohort</h3>
            <p className="text-5xl font-extrabold text-white mt-2">
                {formatCurrency(revenue)}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Monetization;