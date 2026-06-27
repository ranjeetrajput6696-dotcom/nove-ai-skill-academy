import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import CourseFilters from './components/CourseFilters';
import CourseGrid from './components/CourseGrid';
import CourseDetailModal from './components/CourseDetailModal';
import CartDrawer from './components/CartDrawer';
import StudentPortal from './components/StudentPortal';
import AuthModal from './components/AuthModal';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import { COURSES } from './data';
import { Course, CartItem, UserProfile, EnrolledCourse } from './types';

export default function App() {
  // Navigation & UI Panels
  const [currentView, setCurrentView] = useState<string>('home');
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Search & Filtering Course States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [sortBy, setSortBy] = useState<string>('popular');

  // Authenticated Session State (Synced with localStorage)
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('72px_student_session');
    return saved ? JSON.parse(saved) : null;
  });

  // Shopping Cart State (Synced with localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('72px_shopping_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Write changes to storage
  useEffect(() => {
    if (user) {
      localStorage.setItem('72px_student_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('72px_student_session');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('72px_shopping_cart', JSON.stringify(cart));
  }, [cart]);

  // Auth Operations
  const handleAuthenticate = (profile: UserProfile) => {
    // If we just clicked switch view trigger inside AuthModal
    if (!profile.email) {
      setAuthModal(authModal === 'login' ? 'signup' : 'login');
      return;
    }

    // Standard authentication
    setUser(profile);
    setAuthModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  // Cart Operations
  const handleAddToCart = (course: Course) => {
    const exists = cart.find((item) => item.course.id === course.id);
    if (exists) return;

    setCart([...cart, { course, quantity: 1 }]);
    setCartDrawerOpen(true);
  };

  const handleRemoveFromCart = (courseId: string) => {
    setCart(cart.filter((item) => item.course.id !== courseId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Core Enrollment Action (Subscribing / purchasing a course pathway)
  const handleEnrollCourse = (courseId: string) => {
    // Force authentication if user is not signed in
    if (!user) {
      setAuthModal('login');
      return;
    }

    // Check if user is already enrolled
    const isAlreadyEnrolled = user.enrolledCourses.some((e) => e.courseId === courseId);
    if (isAlreadyEnrolled) {
      setSelectedCourse(null);
      setCurrentView('portal');
      return;
    }

    const newEnrollment: EnrolledCourse = {
      courseId,
      progress: 0,
      completedLectures: [],
      enrolledAt: new Date().toISOString(),
      status: 'in-progress',
    };

    const updatedUser: UserProfile = {
      ...user,
      enrolledCourses: [newEnrollment, ...user.enrolledCourses],
    };

    setUser(updatedUser);
    setSelectedCourse(null);
    setCurrentView('portal');
  };

  // Multiple item cart checkout enrollment flow
  const handleCartCheckout = () => {
    if (!user) {
      setCartDrawerOpen(false);
      setAuthModal('login');
      return;
    }

    if (cart.length === 0) return;

    // Filter out items already enrolled
    const newEnrollments: EnrolledCourse[] = [];
    cart.forEach((item) => {
      const alreadyEnrolled = user.enrolledCourses.some((e) => e.courseId === item.course.id);
      if (!alreadyEnrolled) {
        newEnrollments.push({
          courseId: item.course.id,
          progress: 0,
          completedLectures: [],
          enrolledAt: new Date().toISOString(),
          status: 'in-progress',
        });
      }
    });

    const updatedUser: UserProfile = {
      ...user,
      enrolledCourses: [...newEnrollments, ...user.enrolledCourses],
    };

    setUser(updatedUser);
    setCart([]); // Clear cart
    setCartDrawerOpen(false);
    setCurrentView('portal');
  };

  // Checklist updates from Portal view
  const handleUpdateCourseProgress = (courseId: string, completedLectures: string[]) => {
    if (!user) return;

    const courseDetails = COURSES.find((c) => c.id === courseId);
    if (!courseDetails) return;

    const totalLecturesCount = courseDetails.syllabus.reduce((acc, week) => acc + week.topics.length, 0);
    const completedPct = totalLecturesCount > 0 ? (completedLectures.length / totalLecturesCount) * 100 : 100;

    const updatedEnrollments = user.enrolledCourses.map((enrollment) => {
      if (enrollment.courseId === courseId) {
        return {
          ...enrollment,
          completedLectures,
          progress: completedPct,
          status: (completedPct === 100 ? 'completed' : 'in-progress') as 'completed' | 'in-progress',
        };
      }
      return enrollment;
    });

    setUser({
      ...user,
      enrolledCourses: updatedEnrollments,
    });
  };

  // Filters Calculation logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'popular') {
      return b.reviewsCount - a.reviewsCount;
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    }
    if (sortBy === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1b1b1c] font-sans overflow-x-hidden antialiased">
      
      {/* Sticky Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        user={user}
        logout={handleLogout}
        openAuthModal={setAuthModal}
        cart={cart}
        setCartDrawerOpen={setCartDrawerOpen}
      />

      {/* Main Screen Layout Container */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="pb-12" id="home-view">
            <Hero onExploreCourses={() => setCurrentView('courses')} />
            <TrustStats />
            
            {/* Direct Jumpstart Preview Section */}
            <section className="py-12 md:py-16 bg-white border-y border-[#c3c6d5]/50" id="jumpstart-preview-section">
              <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6" id="jumpstart-heading">
                  <div className="max-w-2xl space-y-2">
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[#1E3A8A]">
                      Jumpstart Your Career
                    </h2>
                    <p className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed">
                      Our career-focused tracks are designed with industry input to ensure you learn the tools and technologies currently in demand by global top-tier companies.
                    </p>
                  </div>
                  <button
                    id="browse-all-pathways-btn"
                    onClick={() => setCurrentView('courses')}
                    className="text-[#1E3A8A] font-sans font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Browse All Pathways &rarr;
                  </button>
                </div>

                <CourseGrid
                  courses={COURSES.slice(0, 3)} // Show preview of 3 default pathways
                  cart={cart}
                  addToCart={handleAddToCart}
                  onSelectCourse={setSelectedCourse}
                />
              </div>
            </section>

            <Newsletter />
          </div>
        )}

        {currentView === 'courses' && (
          <section className="py-12 md:py-16 space-y-10" id="courses-catalog-view">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-10">
              <div className="max-w-xl space-y-2 select-none" id="catalog-title-wrapper">
                <span className="text-[11px] font-bold text-[#1E3A8A] uppercase tracking-wider block">Academic Tracks</span>
                <h1 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#1E3A8A]">
                  Professional Syllabus Pathways
                </h1>
                <p className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed">
                  Deeply exhaustive multi-week curricula designed to launch high-caliber engineering, computing, and analytical careers.
                </p>
              </div>

              {/* Filtering bar control */}
              <CourseFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

              {/* Grid course results */}
              <CourseGrid
                courses={filteredCourses}
                cart={cart}
                addToCart={handleAddToCart}
                onSelectCourse={setSelectedCourse}
              />
            </div>
          </section>
        )}

        {currentView === 'about' && <AboutUs />}

        {currentView === 'contact' && <ContactForm />}

        {currentView === 'portal' && user && (
          <StudentPortal
            user={user}
            onBrowseCourses={() => setCurrentView('courses')}
            onUpdateCourseProgress={handleUpdateCourseProgress}
          />
        )}
      </main>

      {/* Footer Element */}
      <Footer onSelectCategory={setSelectedCategory} setCurrentView={setCurrentView} />

      {/* Slide-out Cart Drawer overlay */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        removeFromCart={handleRemoveFromCart}
        clearCart={handleClearCart}
        onCheckout={handleCartCheckout}
      />

      {/* Detailed curriculum syllabus modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        cart={cart}
        addToCart={handleAddToCart}
        onQuickEnroll={handleEnrollCourse}
        isEnrolled={user ? user.enrolledCourses.some((e) => e.courseId === selectedCourse?.id) : false}
      />

      {/* Auth Modal overlay */}
      <AuthModal
        isOpen={authModal}
        onClose={() => setAuthModal(null)}
        onAuthenticate={handleAuthenticate}
      />

    </div>
  );
}
