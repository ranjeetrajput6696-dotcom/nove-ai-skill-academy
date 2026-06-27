export interface SyllabusItem {
  week: string;
  title: string;
  topics: string[];
}

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Analytics' | 'Development' | 'Mobile' | 'AI' | 'Marketing' | 'Design';
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  isTrending?: boolean;
  isBestseller?: boolean;
  duration: string;
  lectures: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  syllabus: SyllabusItem[];
  instructor: Instructor;
}

export interface CartItem {
  course: Course;
  quantity: number;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number; // 0 to 100
  completedLectures: string[]; // List of completed lecture titles
  enrolledAt: string;
  status: 'in-progress' | 'completed';
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: EnrolledCourse[];
}
