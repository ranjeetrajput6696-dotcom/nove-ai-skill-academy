import { Globe, Users } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  setCurrentView: (view: string) => void;
}

export default function Footer({ onSelectCategory, setCurrentView }: FooterProps) {
  const categoriesList = [
    { name: 'AI & Generative Tools', filter: 'AI' },
    { name: 'Web Development', filter: 'Development' },
    { name: 'Digital Marketing', filter: 'Marketing' },
    { name: 'Graphic Designing', filter: 'Design' },
  ];

  const handleCategoryClick = (catFilter: string) => {
    onSelectCategory(catFilter);
    setCurrentView('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1E3A8A] text-white pt-16 pb-8 border-t border-[#06B6D4]/20" id="footer-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12" id="footer-grid">
        
        {/* Branding Info */}
        <div className="space-y-6" id="footer-col-brand">
          <div className="font-display font-extrabold text-xl text-[#06B6D4] tracking-tight">
            NovaAI Academy
          </div>
          <p className="font-sans text-xs md:text-sm text-[#bcceff] leading-relaxed">
            Leading international provider of cutting-edge AI skills, engineering pathways, and design curriculum.
          </p>
          <div className="flex gap-3" id="footer-social-row">
            <a
              id="footer-social-global"
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#06B6D4] hover:text-[#111827] transition-all duration-300"
              aria-label="Global"
            >
              <Globe size={18} />
            </a>
            <a
              id="footer-social-community"
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#06B6D4] hover:text-[#111827] transition-all duration-300"
              aria-label="Community"
            >
              <Users size={18} />
            </a>
          </div>
        </div>

        {/* Categories filters */}
        <div className="space-y-4" id="footer-col-categories">
          <h4 className="font-display font-bold text-sm text-[#06B6D4] uppercase tracking-wider select-none">
            Course Categories
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-[#bcceff]" id="footer-categories-list">
            {categoriesList.map((cat, idx) => (
              <li key={idx}>
                <button
                  id={`footer-cat-link-${cat.filter.toLowerCase()}`}
                  onClick={() => handleCategoryClick(cat.filter)}
                  className="hover:text-[#06B6D4] cursor-pointer text-left transition-colors font-medium text-xs md:text-sm"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div className="space-y-4" id="footer-col-company">
          <h4 className="font-display font-bold text-sm text-[#06B6D4] uppercase tracking-wider select-none">
            Academy Info
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-[#bcceff]" id="footer-company-list">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Careers
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Alumni Stories
              </a>
            </li>
            <li>
              <button
                id="footer-contact-link"
                onClick={() => handleNavClick('contact')}
                className="hover:text-[#06B6D4] transition-colors font-medium cursor-pointer text-left"
              >
                Contact Admissions
              </button>
            </li>
          </ul>
        </div>

        {/* Legal and Support */}
        <div className="space-y-4" id="footer-col-support">
          <h4 className="font-display font-bold text-sm text-[#06B6D4] uppercase tracking-wider select-none">
            Support Hub
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-[#bcceff]" id="footer-support-list">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#06B6D4] transition-colors font-medium">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Underlay bottom bar rights */}
      <div className="border-t border-white/10 pt-8 text-center max-w-[1280px] mx-auto px-6" id="footer-copyright-bar">
        <p className="font-sans text-[11px] text-[#bcceff]/75">
          © {new Date().getFullYear()} NovaAI Academy. All academic rights reserved.
        </p>
      </div>
    </footer>
  );
}
