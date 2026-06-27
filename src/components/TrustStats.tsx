import { useState, useEffect } from 'react';

export default function TrustStats() {
  const stats = [
    { target: 94, suffix: '%', label: 'Placement Rate' },
    { target: 120, suffix: '+', label: 'Hiring Partners' },
    { target: 4.8, suffix: '/5', label: 'Student Rating', isFloat: true },
    { target: 24, suffix: '/7', label: 'Mentor Support' },
  ];

  // Simple counting effect on mount
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((stat) => {
          const val = (stat.target / steps) * step;
          if (step >= steps) {
            return stat.target;
          }
          return stat.isFloat ? parseFloat(val.toFixed(1)) : Math.round(val);
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-[#1E3A8A] text-white overflow-hidden shadow-inner" id="trust-stats-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" id="stats-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" id="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2" id={`stat-box-${idx}`}>
              <div
                className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2 text-white select-none transition-all duration-300"
                id={`stat-num-${idx}`}
              >
                {counts[idx]}
                {stat.suffix}
              </div>
              <p
                className="font-sans text-xs md:text-sm font-semibold text-[#bcceff] uppercase tracking-wider"
                id={`stat-label-${idx}`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
