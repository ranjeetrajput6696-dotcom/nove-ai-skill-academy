import { useState } from 'react';
import { X, Star, Clock, BookOpen, User, Check, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import { Course, CartItem } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  cart: CartItem[];
  addToCart: (course: Course) => void;
  onQuickEnroll: (courseId: string) => void;
  isEnrolled: boolean;
}

export default function CourseDetailModal({
  course,
  onClose,
  cart,
  addToCart,
  onQuickEnroll,
  isEnrolled,
}: CourseDetailModalProps) {
  if (!course) return null;

  const [expandedWeek, setExpandedWeek] = useState<string | null>('Week 1');

  const inCart = cart.some((item) => item.course.id === course.id);

  const toggleWeek = (week: string) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="course-detail-backdrop">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        id="modal-overlay"
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8" id="modal-container-wrapper">
        <div
          id="course-detail-modal-card"
          className="relative w-full max-w-4xl bg-[#fcf9f8] rounded-3xl overflow-hidden shadow-2xl border border-[#c3c6d5] z-50 transform scale-100 transition-all"
        >
          {/* Sticky Close Button */}
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Banner Graphic Header */}
          <div className="relative h-64 md:h-80 bg-slate-900" id="detail-banner">
            <img
              id="detail-banner-img"
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8" id="detail-banner-overlay">
              <span id="detail-category-badge" className="inline-block self-start text-[11px] font-bold text-white bg-[#1E3A8A] px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                {course.category} Pathway
              </span>
              <h2 id="detail-title" className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white mb-2 leading-tight">
                {course.title}
              </h2>
              <p id="detail-tagline" className="font-sans text-sm md:text-base text-[#fcf9f8]/90 max-w-2xl leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 max-h-[60vh] overflow-y-auto" id="detail-content-scroll">
            
            {/* Left Content Column (Syllabus & Instructor) - Takes 2 Columns */}
            <div className="md:col-span-2 space-y-8" id="detail-left-column">
              
              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-2xl border border-[#c3c6d5]/75 text-center" id="detail-stats-highlight">
                <div id="stat-highlight-duration">
                  <span className="flex justify-center items-center gap-1.5 text-xs text-[#434653] font-medium mb-1">
                    <Clock size={14} className="text-[#1E3A8A]" />
                    Duration
                  </span>
                  <span className="font-display font-bold text-sm text-[#1b1b1c]">{course.duration}</span>
                </div>
                <div id="stat-highlight-lectures" className="border-x border-[#c3c6d5]/50">
                  <span className="flex justify-center items-center gap-1.5 text-xs text-[#434653] font-medium mb-1">
                    <BookOpen size={14} className="text-[#1E3A8A]" />
                    Lectures
                  </span>
                  <span className="font-display font-bold text-sm text-[#1b1b1c]">{course.lectures} Classes</span>
                </div>
                <div id="stat-highlight-rating">
                  <span className="flex justify-center items-center gap-1.5 text-xs text-[#434653] font-medium mb-1">
                    <Star size={14} className="fill-[#06B6D4] text-[#06B6D4]" />
                    Reviews
                  </span>
                  <span className="font-display font-bold text-sm text-[#1b1b1c]">{course.rating.toFixed(1)} / 5</span>
                </div>
              </div>

              {/* Dynamic Curriculum / Syllabus Accordion */}
              <div id="curriculum-accordion-section">
                <h3 className="font-display font-bold text-lg text-[#1b1b1c] mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-[#1E3A8A]" />
                  Weekly Curriculum & Syllabus
                </h3>
                <div className="space-y-3" id="syllabus-accordion-wrapper">
                  {course.syllabus.map((item) => {
                    const isOpen = expandedWeek === item.week;
                    return (
                      <div
                        id={`syllabus-week-item-${item.week.replace(/\s+/g, '-')}`}
                        key={item.week}
                        className="bg-white rounded-xl border border-[#c3c6d5]/80 overflow-hidden"
                      >
                        <button
                          id={`syllabus-week-trigger-${item.week.replace(/\s+/g, '-')}`}
                          onClick={() => toggleWeek(item.week)}
                          className="w-full flex justify-between items-center px-5 py-4 text-left font-sans font-bold text-sm text-[#1b1b1c] hover:bg-[#fcf9f8] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-3">
                            <span className="bg-[#EFF6FF] text-[#1E3A8A] px-2.5 py-1 rounded text-xs">
                              {item.week}
                            </span>
                            <span>{item.title}</span>
                          </span>
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        
                        {isOpen && (
                          <div id={`syllabus-week-content-${item.week.replace(/\s+/g, '-')}`} className="px-5 pb-5 pt-1 bg-[#fcf9f8] border-t border-[#f0eded]">
                            <ul className="space-y-2.5">
                              {item.topics.map((topic, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm text-[#434653]">
                                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] mt-1.5 flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expert Instructor Card */}
              <div id="instructor-profile-section" className="bg-white rounded-2xl p-6 border border-[#c3c6d5]/80 flex flex-col sm:flex-row gap-5 items-start">
                <img
                  id="instructor-avatar"
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1E3A8A] flex-shrink-0"
                />
                <div id="instructor-text-wrapper" className="space-y-2">
                  <div className="flex items-center gap-2 select-none" id="instructor-banner">
                    <User size={14} className="text-[#1E3A8A]" />
                    <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-wider">Expert Instructor</span>
                  </div>
                  <h4 id="instructor-name" className="font-display font-bold text-base text-[#1b1b1c]">
                    {course.instructor.name}
                  </h4>
                  <p id="instructor-role" className="font-sans text-xs font-semibold text-[#1E3A8A]">
                    {course.instructor.role}
                  </p>
                  <p id="instructor-bio" className="font-sans text-xs text-[#434653] leading-relaxed">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Action Checkout Panel - Takes 1 Column */}
            <div id="detail-right-column" className="space-y-6">
              
              {/* Payment Info Card */}
              <div id="detail-purchase-box" className="bg-white rounded-2xl p-6 border border-[#c3c6d5] premium-card-shadow text-center space-y-5 sticky top-0">
                <div id="purchase-box-header">
                  <span className="text-xs font-bold text-[#434653]/60 uppercase tracking-wide">Investment Value</span>
                  <div className="flex items-baseline justify-center gap-1.5 mt-1" id="purchase-price-wrapper">
                    <span className="font-display font-extrabold text-3xl text-[#1E3A8A]">${course.price}</span>
                    <span className="text-xs text-[#434653]/70 font-semibold line-through">${course.price + 200}</span>
                  </div>
                  <p className="text-[10px] text-[#06B6D4] font-bold mt-1 uppercase tracking-wide select-none">
                    Includes NovaAI Academy Professional Certification
                  </p>
                </div>

                <div className="space-y-3" id="purchase-box-ctas">
                  {isEnrolled ? (
                    <button
                      id="already-enrolled-indicator"
                      className="w-full py-3.5 px-6 rounded-xl font-sans font-bold text-sm bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center gap-2 shadow-sm cursor-default"
                    >
                      <Check size={16} />
                      Enrolled & Active
                    </button>
                  ) : (
                    <>
                      <button
                        id="purchase-box-enroll-now"
                        onClick={() => onQuickEnroll(course.id)}
                        className="w-full py-3.5 px-6 rounded-xl font-sans font-bold text-sm bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        Enroll Now
                      </button>
                      
                      <button
                        id="purchase-box-add-cart"
                        onClick={() => addToCart(course)}
                        disabled={inCart}
                        className={`w-full py-3 px-6 rounded-xl font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                          inCart
                            ? 'bg-[#f0eded] text-[#434653] cursor-default'
                            : 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#EFF6FF]/40'
                        }`}
                      >
                        {inCart ? <Check size={16} /> : <ShoppingCart size={16} />}
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </>
                  )}
                </div>

                <div className="border-t border-[#f0eded] pt-4 text-left" id="purchase-benefits-list">
                  <p className="text-[11px] font-bold text-[#434653] uppercase tracking-wider mb-2 select-none">Course Includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-[#434653] font-medium">
                      <span className="text-[#006d43]">✓</span> Full Lifetime Access
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#434653] font-medium">
                      <span className="text-[#006d43]">✓</span> Mobile & Desktop Learning
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#434653] font-medium">
                      <span className="text-[#006d43]">✓</span> Live Q&A Mentor Support
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#434653] font-medium">
                      <span className="text-[#006d43]">✓</span> Career Placement Assistance
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
