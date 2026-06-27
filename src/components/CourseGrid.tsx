import { Star, ShoppingCart, Check, BookOpen, Clock, Users } from 'lucide-react';
import { Course, CartItem } from '../types';

interface CourseGridProps {
  courses: Course[];
  cart: CartItem[];
  addToCart: (course: Course) => void;
  onSelectCourse: (course: Course) => void;
}

export default function CourseGrid({ courses, cart, addToCart, onSelectCourse }: CourseGridProps) {
  const isCourseInCart = (courseId: string) => {
    return cart.some((item) => item.course.id === courseId);
  };

  if (courses.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-[#c3c6d5] premium-card-shadow" id="empty-courses-state">
        <div className="w-16 h-16 bg-[#ffdad6] rounded-full flex items-center justify-center mx-auto mb-4 text-[#ba1a1a]">
          <BookOpen size={28} />
        </div>
        <h3 className="font-display font-bold text-xl text-[#1b1b1c] mb-2">No Courses Found</h3>
        <p className="font-sans text-sm text-[#434653] max-w-sm mx-auto">
          We couldn't find any courses matching your filters. Try clearing your search keyword or selecting a different learning pathway.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-grid-layout">
      {courses.map((course) => {
        const inCart = isCourseInCart(course.id);
        
        return (
          <div
            id={`course-card-${course.id}`}
            key={course.id}
            className="group bg-white rounded-3xl overflow-hidden premium-card-shadow border border-[#c3c6d5] flex flex-col hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            onClick={() => onSelectCourse(course)}
          >
            {/* Thumbnail Header */}
            <div className="relative h-48 overflow-hidden bg-slate-100" id={`course-img-wrapper-${course.id}`}>
              <img
                id={`course-thumbnail-${course.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={course.title}
                src={course.image}
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2" id={`course-badges-${course.id}`}>
                {course.isTrending && (
                  <span
                    id={`trending-badge-${course.id}`}
                    className="bg-[#006d43] text-white px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm"
                  >
                    Trending
                  </span>
                )}
                {course.isBestseller && (
                  <span
                    id={`bestseller-badge-${course.id}`}
                    className="bg-[#003c90] text-white px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm"
                  >
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow" id={`course-body-${course.id}`}>
              <div className="flex justify-between items-center mb-3" id={`course-metadata-${course.id}`}>
                <span
                  id={`course-cat-${course.id}`}
                  className="text-[11px] font-bold text-[#003c90] bg-[#d9e2ff] px-2.5 py-0.5 rounded"
                >
                  {course.category}
                </span>
                <div className="flex items-center text-xs font-semibold text-[#434653]" id={`course-rating-${course.id}`}>
                  <Star size={14} className="fill-[#D4AF37] text-[#D4AF37] mr-1" />
                  <span>{course.rating.toFixed(1)}</span>
                  <span className="text-[#434653]/60 ml-0.5">({(course.reviewsCount / 1000).toFixed(1)}k)</span>
                </div>
              </div>

              <h3
                id={`course-title-${course.id}`}
                className="font-display font-bold text-lg text-[#1b1b1c] mb-2 group-hover:text-[#003c90] transition-colors leading-snug"
              >
                {course.title}
              </h3>

              <p id={`course-desc-${course.id}`} className="font-sans text-xs md:text-sm text-[#434653] line-clamp-2 mb-6">
                {course.description}
              </p>

              {/* Lecture/Hours Information Bar */}
              <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-[#c3c6d5]/50 text-xs text-[#434653]/80 font-medium" id={`course-stats-${course.id}`}>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#003c90]" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1 justify-end">
                  <Users size={13} className="text-[#006d43]" />
                  {course.lectures} Lectures
                </span>
              </div>

              {/* Action Bar */}
              <div className="mt-auto flex justify-between items-center" id={`course-action-${course.id}`}>
                <div className="flex flex-col" id={`course-price-wrapper-${course.id}`}>
                  <span className="text-[10px] font-bold text-[#434653]/60 uppercase tracking-wide leading-none">Course Price</span>
                  <span className="font-display font-extrabold text-xl text-[#003c90]" id={`course-price-${course.id}`}>
                    ${course.price}
                  </span>
                </div>
                
                <button
                  id={`add-to-cart-btn-${course.id}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid opening modal on button click
                    addToCart(course);
                  }}
                  className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
                    inCart
                      ? 'bg-[#75f8b3] text-[#002111]'
                      : 'bg-[#f0eded] text-[#1b1b1c] hover:bg-[#003c90] hover:text-white'
                  }`}
                  aria-label={inCart ? 'Added to Cart' : 'Add to Cart'}
                >
                  {inCart ? <Check size={18} /> : <ShoppingCart size={18} />}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
