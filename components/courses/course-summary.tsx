import { CheckCircle2, Clock3, PlayCircle, Target } from "lucide-react";
import type { Course } from "@/lib/mock-data";

export function CourseSummary({ course }: { course: Course }) {
  return (
    <aside className="rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <h2 className="font-semibold text-white">Course Progress</h2>
      <p className="mt-4 text-3xl font-semibold text-emerald-400">{course.progress}%</p>
      <div className="mt-4 h-2 rounded-full bg-white/10">
        <div className={`h-full rounded-full ${course.tone}`} style={{ width: `${course.progress}%` }} />
      </div>
      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <Clock3 className="mt-0.5 size-4 text-emerald-400" aria-hidden="true" />
          <div><dt className="text-zinc-500">Content</dt><dd className="mt-1 text-zinc-200">42h 18m completed <span className="text-zinc-500">/ 25h 43m remaining</span></dd></div>
        </div>
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 size-4 text-emerald-400" aria-hidden="true" />
          <div><dt className="text-zinc-500">Topics</dt><dd className="mt-1 text-zinc-200">{Math.round(course.topics * course.progress / 100)} / {course.topics}</dd></div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-4 text-emerald-400" aria-hidden="true" />
          <div><dt className="text-zinc-500">Videos</dt><dd className="mt-1 text-zinc-200">{Math.round(course.videos * course.progress / 100)} / {course.videos}</dd></div>
        </div>
        <div className="flex items-start gap-3">
          <PlayCircle className="mt-0.5 size-4 text-emerald-400" aria-hidden="true" />
          <div><dt className="text-zinc-500">Study time</dt><dd className="mt-1 text-zinc-200">{course.studyTime}</dd></div>
        </div>
      </dl>
    </aside>
  );
}
