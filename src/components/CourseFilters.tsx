import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

interface CourseFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function CourseFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: CourseFiltersProps) {
  const categories = ['All Categories', 'Analytics', 'Development', 'Mobile', 'AI', 'Marketing', 'Design'];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#c3c6d5] premium-card-shadow space-y-6" id="course-filters">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center" id="search-sort-row">
        {/* Search Input */}
        <div className="relative flex-1" id="search-input-wrapper">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#434653]" id="search-icon-span">
            <Search size={18} />
          </span>
          <input
            id="course-search-field"
            type="text"
            placeholder="Search courses by keyword, tool, or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#fcf9f8] rounded-xl border border-[#c3c6d5] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-sm text-[#1b1b1c] font-medium placeholder-[#434653]/60 transition-all"
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3" id="sort-dropdown-wrapper">
          <label htmlFor="course-sort-select" className="text-xs font-semibold text-[#434653] uppercase tracking-wider flex items-center gap-1 select-none">
            <SlidersHorizontal size={14} />
            Sort By
          </label>
          <select
            id="course-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#fcf9f8] border border-[#c3c6d5] rounded-xl text-xs font-semibold text-[#1b1b1c] py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Chips */}
      <div className="border-t border-[#c3c6d5]/60 pt-4" id="category-chips-wrapper">
        <p className="text-xs font-bold text-[#434653] uppercase tracking-wider mb-3 flex items-center gap-1.5 select-none" id="category-chips-label">
          <BookOpen size={14} className="text-[#1E3A8A]" />
          Learning Pathways
        </p>
        <div className="flex flex-wrap gap-2" id="category-chips-list">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                id={`cat-chip-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans font-semibold text-xs tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-sm'
                    : 'bg-[#fcf9f8] border border-[#c3c6d5] text-[#434653] hover:border-[#1E3A8A] hover:text-[#1E3A8A]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
