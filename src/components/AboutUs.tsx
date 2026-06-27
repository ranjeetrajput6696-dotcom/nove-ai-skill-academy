import { ShieldCheck, Target, Award, Compass } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: <Compass className="text-[#1E3A8A]" size={24} />,
      title: 'Structured Syllabus',
      desc: 'Syllabuses curated by working veterans at companies like Stripe, Airbnb, and Google ensuring immediate real-world capability.'
    },
    {
      icon: <Award className="text-[#06B6D4]" size={24} />,
      title: 'Expert Coaching',
      desc: 'Interactive 1-on-1 and live cohort support directly with accredited tech sector professionals and engineers.'
    },
    {
      icon: <Target className="text-[#7C3AED]" size={24} />,
      title: 'Career Bridging',
      desc: 'Exclusive recruitment pipelines, resume optimizing workshops, and placements at global tech organizations.'
    }
  ];

  return (
    <section className="py-16 bg-[#fcf9f8] space-y-16" id="about-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12" id="about-container">
        
        {/* Upper Column: Title & Core Description */}
        <div className="grid md:grid-cols-2 gap-10 items-center" id="about-upper">
          <div className="space-y-6" id="about-upper-left">
            <span id="about-pill" className="inline-block px-4 py-1.5 bg-[#EFF6FF] text-[#1E3A8A] rounded-full text-xs font-sans font-bold uppercase tracking-wider">
              Our Visionary Foundation
            </span>
            <h2 id="about-title" className="font-display font-bold text-3xl md:text-4xl text-[#1E3A8A] leading-snug">
              Bridging Academic Theory with Real-world Tech Careers
            </h2>
            <p id="about-p-1" className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed">
              Founded in 2024, NovaAI Academy was established to address a critical friction point: the growing mismatch between traditional university curriculum models and the highly dynamic, AI-first skill demands of the global software industry.
            </p>
            <p id="about-p-2" className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed">
              We replace rote theory memorization with immersive, project-centric digital labs. Each student graduates not just with a piece of paper, but with a fully realized production-ready portfolio and a verified blockchain-anchored certificate.
            </p>
          </div>

          <div className="relative" id="about-upper-right">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#06B6D4] opacity-20 blur-2xl rounded-full" />
            <img
              id="about-upper-img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=480"
              alt="Interactive collaborative tech workshop"
              className="w-full aspect-[4/3] object-cover rounded-3xl border border-[#c3c6d5] premium-card-shadow"
            />
          </div>
        </div>

        {/* Middle Column: Core Pillars Bento cards */}
        <div className="space-y-6" id="about-pillars-section">
          <h3 className="text-center font-display font-bold text-xl text-[#1b1b1c] select-none">
            The Three NovaAI Pillars
          </h3>
          <div className="grid md:grid-cols-3 gap-6" id="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div
                id={`pillar-card-${idx}`}
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#c3c6d5]/75 premium-card-shadow space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fcf9f8] flex items-center justify-center border border-[#c3c6d5]/50" id={`pillar-icon-${idx}`}>
                  {pillar.icon}
                </div>
                <h4 className="font-display font-bold text-base text-[#1b1b1c]">{pillar.title}</h4>
                <p className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Global Accreditation */}
        <div className="bg-[#e5e2e1] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-[#c3c6d5]" id="about-accreditation">
          <div className="flex items-center gap-4 text-left" id="accreditation-text-wrapper">
            <span className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#1E3A8A] flex-shrink-0">
              <ShieldCheck size={26} />
            </span>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-sm text-[#1b1b1c]">Globally Accredited Education Provider</h4>
              <p className="font-sans text-xs text-[#434653]">
                Recognized by over 120+ top-tier organizations. Syllabus conforms strictly with ISO and IEEE educational quality standards.
              </p>
            </div>
          </div>
          <div className="flex gap-4 font-display font-bold text-xs text-[#1E3A8A] tracking-wide uppercase select-none" id="accreditation-badges">
            <span>• ISO 9001</span>
            <span>• IEEE Standard</span>
            <span>• EdTech Core</span>
          </div>
        </div>

      </div>
    </section>
  );
}
