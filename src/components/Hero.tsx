import { ArrowRight, GraduationCap } from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
}

export default function Hero({ onExploreCourses }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-16 pb-12 md:pb-16 bg-[#fcf9f8] pixel-bg" id="hero-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center" id="hero-container">
        
        {/* Left Columns - Text Content */}
        <div className="z-10 text-center md:text-left flex flex-col justify-center" id="hero-left-content">
          <div className="flex justify-center md:justify-start" id="badge-wrapper">
            <span
              id="ranking-badge"
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#06B6D4] text-[#111827] font-sans font-extrabold text-[10px] tracking-wider uppercase shadow-sm"
            >
              🚀 #1 Ranked AI & Tech Skills Academy
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-[#1E3A8A] tracking-tight"
          >
            Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]" id="hero-accent-text">AI, Tech & Design</span> <br className="hidden lg:inline" />
            for Tomorrow
          </h1>

          <p
            id="hero-paragraph"
            className="font-sans text-base md:text-lg text-[#434653] mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Acquire high-income digital marketing, professional graphic design, and agentic AI automation skills from industry veterans. Bridge the gap between learning and your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="hero-ctas">
            <button
              id="hero-cta-explore"
              onClick={onExploreCourses}
              className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-sans font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore Our Pathways
              <ArrowRight size={16} />
            </button>
            <button
              id="hero-cta-curriculum"
              onClick={onExploreCourses}
              className="border-2 border-[#1E3A8A] hover:bg-[#EFF6FF]/50 text-[#1E3A8A] font-sans font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
            >
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right Columns - High-fidelity Hero Image & Float Card */}
        <div className="relative flex justify-center items-center" id="hero-right-content">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#06B6D4] opacity-20 blur-3xl rounded-full" id="blur-bg"></div>
          
          <div
            id="hero-image-card"
            className="relative bg-white rounded-3xl overflow-hidden premium-card-shadow border border-[#c3c6d5] p-2 max-w-lg w-full transform hover:scale-[1.01] transition-transform duration-500"
          >
            <img
              id="hero-main-img"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
              alt="A professional tech expert coding in a beautifully lit office"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=480"
            />
          </div>

          {/* Floating Stat Chip */}
          <div
            id="floating-stat-card"
            className="absolute -bottom-6 -left-6 md:left-4 bg-white rounded-2xl p-4 premium-card-shadow border border-[#c3c6d5] flex items-center gap-4 animate-bounce-slow"
          >
            <div className="w-12 h-12 bg-[#06B6D4] rounded-full flex items-center justify-center text-[#111827]" id="stat-icon-wrapper">
              <GraduationCap size={24} />
            </div>
            <div id="stat-text-wrapper">
              <p className="font-display font-bold text-xl text-[#1b1b1c]" id="stat-count">50K+</p>
              <p className="font-sans text-[10px] font-bold text-[#434653] uppercase tracking-wider" id="stat-label">Active Students</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
