import { useState } from 'react';
import { Award, BookOpen, Clock, CheckCircle2, ChevronRight, Sparkles, BookOpenCheck, ExternalLink } from 'lucide-react';
import { UserProfile, EnrolledCourse, Course } from '../types';
import { COURSES } from '../data';

interface StudentPortalProps {
  user: UserProfile;
  onBrowseCourses: () => void;
  onUpdateCourseProgress: (courseId: string, completedLectures: string[]) => void;
}

export default function StudentPortal({ user, onBrowseCourses, onUpdateCourseProgress }: StudentPortalProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(
    user.enrolledCourses.length > 0 ? user.enrolledCourses[0].courseId : null
  );

  const [certDownloaded, setCertDownloaded] = useState<string | null>(null);

  // Find course details
  const getCourseDetails = (courseId: string): Course | undefined => {
    return COURSES.find((c) => c.id === courseId);
  };

  const selectedEnrollment = user.enrolledCourses.find((e) => e.courseId === selectedCourseId);
  const selectedCourseDetails = selectedCourseId ? getCourseDetails(selectedCourseId) : null;

  const handleToggleLecture = (lectureTitle: string) => {
    if (!selectedCourseId || !selectedEnrollment) return;

    let updatedList = [...selectedEnrollment.completedLectures];
    if (updatedList.includes(lectureTitle)) {
      updatedList = updatedList.filter((item) => item !== lectureTitle);
    } else {
      updatedList.push(lectureTitle);
    }

    onUpdateCourseProgress(selectedCourseId, updatedList);
  };

  const handleMockDownloadCert = (courseTitle: string) => {
    setCertDownloaded(courseTitle);
    setTimeout(() => setCertDownloaded(null), 3000);
  };

  if (user.enrolledCourses.length === 0) {
    return (
      <section className="py-16 bg-[#fcf9f8] min-h-[60vh] flex items-center" id="empty-portal-section">
        <div className="max-w-md mx-auto text-center px-6 bg-white p-8 rounded-3xl border border-[#c3c6d5] premium-card-shadow" id="empty-portal-card">
          <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#1E3A8A] mx-auto mb-4 select-none animate-pulse">
            <BookOpenCheck size={28} />
          </div>
          <h2 className="font-display font-bold text-xl text-[#1b1b1c] mb-2">No Active Enrollments</h2>
          <p className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed mb-6">
            Welcome to NovaAI Academy student portal! You haven't enrolled in any learning pathways yet. Browse our professional syllabus, choose your track, and launch your career!
          </p>
          <button
            id="portal-browse-courses-btn"
            onClick={onBrowseCourses}
            className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Explore Courses Pathways
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-[#fcf9f8]" id="student-portal-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-8" id="portal-container">
        
        {/* Welcome Greeting Jumbotron Banner */}
        <div className="bg-[#1E3A8A] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md" id="portal-jumbotron">
          <div className="space-y-1" id="jumbotron-text-wrapper">
            <div className="flex items-center gap-1.5 select-none" id="portal-pill">
              <Sparkles size={14} className="text-[#06B6D4]" />
              <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider">Student Dashboard</span>
            </div>
            <h1 className="font-display font-extrabold text-2xl md:text-3xl" id="jumbotron-greeting">
              Welcome Back, {user.name}!
            </h1>
            <p className="font-sans text-xs md:text-sm text-[#bcceff]" id="jumbotron-tagline">
              Continue your classes, complete weekly syllabus tasks, and verify qualifications.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-2xl border border-white/15" id="jumbotron-stats">
            <div className="text-center" id="stat-jumbotron-enrolled">
              <span className="text-[10px] font-semibold uppercase tracking-wider block opacity-75">Enrolled</span>
              <span className="font-display font-bold text-lg">{user.enrolledCourses.length} Tracks</span>
            </div>
            <div className="w-px h-8 bg-white/25" />
            <div className="text-center" id="stat-jumbotron-completed">
              <span className="text-[10px] font-semibold uppercase tracking-wider block opacity-75">Certificates</span>
              <span className="font-display font-bold text-lg text-[#06B6D4]">
                {user.enrolledCourses.filter((e) => e.progress === 100).length}
              </span>
            </div>
          </div>
        </div>

        {/* Portal Dashboard Grid: Left list of courses, right active course viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="portal-dashboard-grid">
          
          {/* Left Column: Active courses tracking list */}
          <div className="space-y-4" id="portal-left-column">
            <h3 className="text-xs font-bold text-[#434653] uppercase tracking-wider mb-2 select-none">Your Curriculums</h3>
            {user.enrolledCourses.map((enrollment) => {
              const course = getCourseDetails(enrollment.courseId);
              if (!course) return null;
              const isSelected = enrollment.courseId === selectedCourseId;
              const completedPct = Math.round(enrollment.progress);

              return (
                <div
                  id={`portal-course-card-${enrollment.courseId}`}
                  key={enrollment.courseId}
                  onClick={() => setSelectedCourseId(enrollment.courseId)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex gap-4 items-center ${
                    isSelected
                      ? 'bg-white border-[#1E3A8A] ring-1 ring-[#1E3A8A] premium-card-shadow'
                      : 'bg-white border-[#c3c6d5] hover:border-[#1E3A8A]'
                  }`}
                >
                  <img
                    id={`portal-course-img-${enrollment.courseId}`}
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0" id={`portal-course-text-${enrollment.courseId}`}>
                    <h4 id={`portal-course-title-${enrollment.courseId}`} className="font-display font-bold text-sm text-[#1b1b1c] truncate">
                      {course.title}
                    </h4>
                    <p id={`portal-course-duration-${enrollment.courseId}`} className="font-sans text-[10px] text-[#434653] font-semibold mb-1.5 flex items-center gap-1">
                      <Clock size={11} className="text-[#1E3A8A]" />
                      {course.duration} track
                    </p>
                    
                    {/* Progress Bar indicator */}
                    <div className="space-y-1" id={`portal-course-bar-wrapper-${enrollment.courseId}`}>
                      <div className="flex justify-between items-baseline text-[9px] font-bold text-[#434653]/85">
                        <span>Progress</span>
                        <span className={completedPct === 100 ? 'text-[#06B6D4]' : ''}>{completedPct}%</span>
                      </div>
                      <div className="w-full bg-[#f0eded] h-1.5 rounded-full overflow-hidden">
                        <div
                          id={`portal-course-bar-fill-${enrollment.courseId}`}
                          className={`h-full transition-all duration-500 ${
                            completedPct === 100 ? 'bg-[#06B6D4]' : 'bg-[#1E3A8A]'
                          }`}
                          style={{ width: `${completedPct}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className={`text-[#434653]/60 flex-shrink-0 ${isSelected ? 'text-[#1E3A8A]' : ''}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Interactive Learning Dashboard Viewer */}
          <div className="lg:col-span-2 space-y-6" id="portal-right-column">
            {selectedCourseDetails && selectedEnrollment ? (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#c3c6d5] premium-card-shadow space-y-8" id="active-viewer-card">
                
                {/* Heading details */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-[#f0eded]" id="viewer-header">
                  <div className="space-y-1" id="viewer-header-left">
                    <span id="viewer-header-cat" className="text-[10px] font-bold text-[#1E3A8A] bg-[#EFF6FF] px-2 py-0.5 rounded uppercase">
                      Active: {selectedCourseDetails.category} Syllabus
                    </span>
                    <h2 id="viewer-header-title" className="font-display font-extrabold text-xl md:text-2xl text-[#1b1b1c]">
                      {selectedCourseDetails.title}
                    </h2>
                    <p id="viewer-header-instructor" className="font-sans text-xs text-[#434653] font-semibold">
                      Class led by <span className="text-[#1E3A8A]">{selectedCourseDetails.instructor.name}</span>
                    </p>
                  </div>

                  {/* Certificate generator trigger if progress is 100% */}
                  {selectedEnrollment.progress === 100 && (
                    <div id="cert-achievement-badge" className="bg-[#EFF6FF]/80 border-2 border-[#1E3A8A] px-4 py-3 rounded-2xl flex flex-col items-center gap-1.5 animate-bounce-slow">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A]">
                        <Award size={18} />
                        <span>QUALIFICATION EARNED</span>
                      </div>
                      <button
                        id="download-cert-btn"
                        onClick={() => handleMockDownloadCert(selectedCourseDetails.title)}
                        className="text-[10px] font-sans font-extrabold bg-[#1E3A8A] text-white hover:bg-[#1D4ED8] px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                      >
                        Verify Certificate
                        <ExternalLink size={10} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Simulated Certificate success overlay dialog */}
                {certDownloaded && (
                  <div className="bg-white border-2 border-[#1E3A8A] rounded-2xl p-6 text-center shadow-lg relative animate-scale-up space-y-4" id="simulated-cert-modal">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#1E3A8A] mx-auto select-none">
                      <Award size={26} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-extrabold text-[#1b1b1c]">NovaAI Academy Verified Certificate</h4>
                      <p className="text-xs text-[#434653] font-semibold">Verification Code: NOVA-8392-VERIFIED</p>
                    </div>
                    <div className="border border-dashed border-[#1E3A8A]/50 p-4 rounded-xl max-w-sm mx-auto bg-[#EFF6FF]/30 text-xs text-[#1E3A8A] font-semibold italic">
                      "This certifies that {user.name} has successfully completed all academic requirements of the {certDownloaded} program and is hereby awarded this qualification."
                    </div>
                    <p className="text-[10px] text-[#1E3A8A] font-bold">✓ Certificate details downloaded successfully as PDF mock</p>
                  </div>
                )}

                {/* Checklist learning planner */}
                <div id="syllabus-checklist-section">
                  <h3 className="font-display font-bold text-base text-[#1b1b1c] mb-1 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#1E3A8A]" />
                    Interactive Syllabus Log & Attendance
                  </h3>
                  <p className="font-sans text-xs text-[#434653] mb-6">
                    Check off topics as you attend classes and finish assignments. Completing tasks will dynamically update your progress certificate!
                  </p>

                  <div className="space-y-6" id="checklist-weeks-group">
                    {selectedCourseDetails.syllabus.map((week) => (
                      <div key={week.week} className="space-y-3" id={`checklist-week-${week.week.replace(/\s+/g, '-')}`}>
                        <div className="flex items-center gap-2 select-none">
                          <span className="bg-[#f0eded] border border-[#c3c6d5] px-2 py-0.5 rounded text-[10px] font-bold text-[#434653] uppercase">
                            {week.week}
                          </span>
                          <span className="text-xs font-bold text-[#1b1b1c]">{week.title}</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3" id={`checklist-week-grid-${week.week.replace(/\s+/g, '-')}`}>
                          {week.topics.map((topic) => {
                            const isFinished = selectedEnrollment.completedLectures.includes(topic);
                            return (
                              <button
                                id={`checklist-item-${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                key={topic}
                                type="button"
                                onClick={() => handleToggleLecture(topic)}
                                className={`p-3 rounded-xl border text-left flex gap-3 items-start transition-all cursor-pointer ${
                                  isFinished
                                    ? 'bg-[#06B6D4]/15 border-[#06B6D4]/40 hover:bg-[#06B6D4]/25'
                                    : 'bg-white border-[#c3c6d5]/70 hover:border-[#1E3A8A]'
                                }`}
                              >
                                <span
                                  className={`w-4 h-4 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                                    isFinished
                                      ? 'bg-[#06B6D4] border-[#06B6D4] text-white'
                                      : 'border-[#c3c6d5]'
                                  }`}
                                >
                                  {isFinished && '✓'}
                                </span>
                                <span className={`text-xs ${isFinished ? 'text-[#1E3A8A] font-semibold line-through opacity-75' : 'text-[#434653] font-medium'}`}>
                                  {topic}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 border border-[#c3c6d5] text-center" id="no-active-curriculum-selection">
                <BookOpen size={24} className="mx-auto text-[#1E3A8A] mb-2" />
                <p className="font-sans text-sm text-[#434653]">Select a curriculum track from the left sidebar to view schedule and log attendance.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
