import { useState } from 'react';
import { ShoppingCart, User, LogOut, Menu, X, ChevronDown, Award } from 'lucide-react';
import { UserProfile, CartItem } from '../types';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  user: UserProfile | null;
  logout: () => void;
  openAuthModal: (type: 'login' | 'signup') => void;
  cart: CartItem[];
  setCartDrawerOpen: (open: boolean) => void;
}

export default function Header({
  currentView,
  setCurrentView,
  user,
  logout,
  openAuthModal,
  cart,
  setCartDrawerOpen,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fcf9f8] shadow-sm border-b border-[#c3c6d5] transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-4 flex justify-between items-center" id="nav-container">
        {/* Brand Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer focus:outline-none" id="brand-logo-btn">
          <div className="flex items-center gap-3">
            {/* Elegant custom SVG matching the NovaAI Academy branding */}
            <svg className="h-10 md:h-12 w-auto" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Globe Network */}
              <circle cx="70" cy="80" r="45" fill="url(#globeGrad)" />
              {/* Grid network lines & nodes */}
              <path d="M 70 35 L 70 125 M 25 80 L 115 80 M 38 48 L 102 112 M 38 112 L 102 48" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="70" cy="35" r="3" fill="#7C3AED" />
              <circle cx="70" cy="125" r="3" fill="#7C3AED" />
              <circle cx="25" cy="80" r="3" fill="#06B6D4" />
              <circle cx="115" cy="80" r="3" fill="#06B6D4" />
              <circle cx="38" cy="48" r="3" fill="#7C3AED" />
              <circle cx="102" cy="112" r="3" fill="#7C3AED" />
              <circle cx="38" cy="112" r="3" fill="#06B6D4" />
              <circle cx="102" cy="48" r="3" fill="#7C3AED" />
              
              {/* Interconnecting nodes/constellations */}
              <path d="M 38 48 L 70 35 L 102 48 L 115 80 L 102 112 L 70 125 L 38 112 L 25 80 Z" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 38 48 L 25 80 L 38 112 M 102 48 L 115 80 L 102 112" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.7" />

              {/* Continents outline/abstraction overlay */}
              <path d="M 45 70 Q 55 60 65 75 T 85 70 T 95 85 T 80 95 T 55 90 Z" fill="#1E3A8A" fillOpacity="0.3" />

              {/* Graduation Cap (Mortarboard) */}
              <path d="M 70 12 L 118 30 L 70 48 L 22 30 Z" fill="#111827" />
              <path d="M 40 38 V 52 Q 70 65 100 52 V 38" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              {/* White under-rim line */}
              <path d="M 43 40 Q 70 51 97 40" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Tassel */}
              <path d="M 32 30 L 26 42 V 55" fill="none" stroke="#111827" strokeWidth="2.5" />
              <path d="M 23 55 L 29 55 L 26 62 Z" fill="#1E3A8A" />

              <defs>
                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.15" />
                  <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9" />
                </radialGradient>
              </defs>
            </svg>
            
            <div className="h-10 w-[1.5px] bg-[#111827]/20"></div>
            
            <div className="flex flex-col text-left">
              <div className="flex items-baseline font-display font-extrabold text-lg md:text-xl leading-none">
                <span className="text-[#1E3A8A]">Nova</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">AI</span>
              </div>
              <span className="text-[9px] font-bold tracking-[0.25em] text-[#111827] uppercase mt-0.5 leading-none">— ACADEMY —</span>
              <span className="text-[7.5px] font-sans font-bold text-[#7C3AED] uppercase tracking-wider leading-none mt-1">AI Skills for Tomorrow</span>
            </div>
          </div>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8" id="desktop-nav-links">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans font-semibold text-sm transition-all duration-200 cursor-pointer pb-1 ${
                currentView === item.id
                  ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]'
                  : 'text-[#434653] hover:text-[#1E3A8A]'
              }`}
            >
              {item.label}
            </button>
          ))}
          {user && (
            <button
              id="nav-item-portal"
              onClick={() => handleNavClick('portal')}
              className={`font-sans font-semibold text-sm transition-all duration-200 cursor-pointer pb-1 ${
                currentView === 'portal'
                  ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]'
                  : 'text-[#434653] hover:text-[#1E3A8A]'
              }`}
            >
              Student Portal
            </button>
          )}
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-4" id="nav-trailing-actions">
          {/* Shopping Cart Button */}
          <button
            id="cart-trigger-btn"
            onClick={() => setCartDrawerOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-[#f0eded] transition-colors text-[#1b1b1c] cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span
                id="cart-badge"
                className="absolute -top-1 -right-1 bg-[#006d43] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
              >
                {cartItemsCount}
              </span>
            )}
          </button>

          {user ? (
            /* User Panel (Authenticated) */
            <div className="relative" id="user-profile-menu">
              <button
                id="user-profile-dropdown-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#f0eded] transition-all cursor-pointer border border-[#c3c6d5]"
              >
                <img
                  id="user-avatar"
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="hidden sm:inline font-sans text-xs font-semibold text-[#1b1b1c] max-w-[100px] truncate">
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown size={14} className="text-[#434653]" />
              </button>

              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10 cursor-default"
                    onClick={() => setDropdownOpen(false)}
                  ></div>
                  <div
                    id="user-dropdown-menu"
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#c3c6d5] py-2 z-20 animate-fade-in"
                  >
                    <button
                      id="user-menu-dashboard"
                      onClick={() => {
                        handleNavClick('portal');
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-[#434653] hover:bg-[#f0eded] transition-colors cursor-pointer text-left"
                    >
                      <Award size={16} className="text-[#1E3A8A]" />
                      My Portal
                    </button>
                    <hr className="border-[#f0eded] my-1" />
                    <button
                      id="user-menu-logout"
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-[#ffdad6] transition-colors cursor-pointer text-left"
                    >
                      <LogOut size={16} />
                      Log Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Authentication Triggers */
            <div className="flex items-center gap-4" id="auth-buttons-container">
              <button
                id="login-btn"
                onClick={() => openAuthModal('login')}
                className="hidden md:block font-sans font-semibold text-sm text-[#1E3A8A] hover:text-[#1D4ED8] transition-all cursor-pointer"
              >
                Log In
              </button>
              <button
                id="register-btn"
                onClick={() => openAuthModal('signup')}
                className="px-6 py-2.5 rounded-full font-sans font-semibold text-sm bg-[#1E3A8A] text-white hover:bg-[#1D4ED8] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Join for Free
              </button>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#f0eded] text-[#434653] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#fcf9f8] border-t border-[#c3c6d5] px-6 py-4 space-y-4 animate-slide-down">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans font-semibold text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'text-[#1E3A8A] bg-[#EFF6FF]'
                    : 'text-[#434653] hover:bg-[#f0eded]'
                }`}
              >
                {item.label}
              </button>
            ))}
            {user && (
              <button
                id="mobile-nav-item-portal"
                onClick={() => handleNavClick('portal')}
                className={`font-sans font-semibold text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                  currentView === 'portal'
                    ? 'text-[#1E3A8A] bg-[#EFF6FF]'
                    : 'text-[#434653] hover:bg-[#f0eded]'
                }`}
              >
                Student Portal
              </button>
            )}
          </div>
          {!user && (
            <div className="pt-4 border-t border-[#c3c6d5] flex flex-col gap-3" id="mobile-auth-buttons">
              <button
                id="mobile-login-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full text-center py-2.5 font-sans font-semibold text-sm text-[#1E3A8A] rounded-lg hover:bg-[#EFF6FF]"
              >
                Log In
              </button>
              <button
                id="mobile-signup-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('signup');
                }}
                className="w-full text-center py-2.5 font-sans font-semibold text-sm bg-[#1E3A8A] text-white rounded-lg hover:bg-[#1D4ED8]"
              >
                Join for Free
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
