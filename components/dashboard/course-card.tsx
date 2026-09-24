import { BookOpen } from "lucide-react";
import type { Course } from "@/lib/mock-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <div className="flex items-start justify-between">
        <div className="flex size-9 items-center justify-center rounded-lg bg-white/5">
          <BookOpen className="size-4 text-zinc-300" aria-hidden="true" />
        </div>
        <span className="text-xl font-semibold text-white">{course.progress}%</span>
      </div>
      <h3 className="mt-5 font-semibold text-white">{course.name}</h3>
      <p className="mt-1 text-xs text-zinc-500">{course.videos} videos <span className="mx-1 text-zinc-700">•</span> {course.topics} topics</p>
      <div className="mt-5 h-1.5 rounded-full bg-white/10">
        <div className={`h-full rounded-full ${course.tone}`} style={{ width: `${course.progress}%` }} />
      </div>
      <p className="mt-3 text-xs text-zinc-500">{course.studyTime} studied</p>
    </article>
  );
}
