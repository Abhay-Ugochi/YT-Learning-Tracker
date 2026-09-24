export type ContinueLearningItem = {
  course: string;
  title: string;
  progress: number;
  completed: string;
  total: string;
  remaining: string;
  tone: string;
};

export type Course = {
  id: string;
  name: string;
  description: string;
  playlists: Playlist[];
  videos: number;
  topics: number;
  progress: number;
  studyTime: string;
  lastStudied: string;
  tone: string;
};

export type Playlist = {
  id: string;
  title: string;
  videoCount: number;
  topicCount: number;
  progress: number;
  contentDuration: string;
  studyTime: string;
};

export type StudyDay = {
  day: string;
  hours: number;
};

export type Activity = {
  type: "Completed" | "Study session" | "Note added";
  title: string;
  course: string;
  time: string;
  detail?: string;
};

export const continueLearning: ContinueLearningItem[] = [
  {
    course: "DSA",
    title: "Binary Search — Complete Understanding",
    progress: 67,
    completed: "18m",
    total: "27m",
    remaining: "9m",
    tone: "from-emerald-500/40 to-zinc-800",
  },
  {
    course: "Java",
    title: "Object Oriented Programming",
    progress: 42,
    completed: "31m",
    total: "74m",
    remaining: "43m",
    tone: "from-sky-500/40 to-zinc-800",
  },
  {
    course: "React",
    title: "React Hooks Deep Dive",
    progress: 31,
    completed: "22m",
    total: "71m",
    remaining: "49m",
    tone: "from-violet-500/40 to-zinc-800",
  },
];

export const courses: Course[] = [
  {
    id: "dsa",
    name: "DSA",
    description: "Data Structures and Algorithms",
    playlists: [
      { id: "striver-a2z", title: "Striver A2Z DSA Course", videoCount: 48, topicCount: 205, progress: 62, contentDuration: "68h 01m", studyTime: "18h 32m" },
      { id: "data-structures-fundamentals", title: "Data Structures Fundamentals", videoCount: 24, topicCount: 96, progress: 34, contentDuration: "31h 40m", studyTime: "7h 18m" },
    ],
    videos: 48,
    topics: 205,
    progress: 62,
    studyTime: "18h 32m",
    lastStudied: "Today",
    tone: "bg-emerald-400",
  },
  {
    id: "java",
    name: "Java",
    description: "Core Java and Object-Oriented Programming",
    playlists: [
      { id: "core-java", title: "Core Java and OOP", videoCount: 36, topicCount: 142, progress: 47, contentDuration: "52h 24m", studyTime: "11h 14m" },
    ],
    videos: 36,
    topics: 142,
    progress: 47,
    studyTime: "11h 14m",
    lastStudied: "Today",
    tone: "bg-sky-400",
  },
  {
    id: "cpp",
    name: "C++",
    description: "C++ fundamentals and STL",
    playlists: [
      { id: "cpp-fundamentals", title: "C++ Fundamentals and STL", videoCount: 28, topicCount: 117, progress: 31, contentDuration: "38h 16m", studyTime: "7h 42m" },
    ],
    videos: 28,
    topics: 117,
    progress: 31,
    studyTime: "7h 42m",
    lastStudied: "Yesterday",
    tone: "bg-amber-400",
  },
  {
    id: "react",
    name: "React",
    description: "React fundamentals and modern frontend development",
    playlists: [
      { id: "react-fundamentals", title: "React Fundamentals", videoCount: 14, topicCount: 54, progress: 22, contentDuration: "21h 08m", studyTime: "3h 06m" },
      { id: "modern-react", title: "Modern React Patterns", videoCount: 8, topicCount: 35, progress: 12, contentDuration: "14h 10m", studyTime: "1h 19m" },
    ],
    videos: 22,
    topics: 89,
    progress: 18,
    studyTime: "4h 25m",
    lastStudied: "3 days ago",
    tone: "bg-violet-400",
  },
  {
    id: "python",
    name: "Python",
    description: "Python programming and practical development",
    playlists: [
      { id: "python-practical", title: "Python Practical Development", videoCount: 31, topicCount: 126, progress: 8, contentDuration: "44h 35m", studyTime: "2h 10m" },
    ],
    videos: 31,
    topics: 126,
    progress: 8,
    studyTime: "2h 10m",
    lastStudied: "5 days ago",
    tone: "bg-yellow-400",
  },
];

export const weeklyStudyActivity: StudyDay[] = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.1 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 3.4 },
  { day: "Sun", hours: 1.5 },
];

export const recentActivity: Activity[] = [
  { type: "Completed", title: "Binary Search Basics", course: "DSA", time: "Today, 10:42 AM" },
  { type: "Completed", title: "Java Classes and Objects", course: "Java", time: "Today, 8:15 AM" },
  { type: "Study session", title: "React Hooks Deep Dive", course: "React", time: "Yesterday, 9:20 PM", detail: "Studied for 48 minutes" },
  { type: "Note added", title: "Sliding Window", course: "DSA", time: "Yesterday, 7:34 PM" },
];
