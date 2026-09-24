import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Course } from "@/lib/mock-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-xl border border-white/10 bg-zinc-900/70 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/5">
          <BookOpen className="size-5 text-zinc-300" aria-hidden="true" />
        </div>
        <span className="text-2xl font-semibold text-white">{course.progress}%</span>
      </div>
      <h2 className="mt-5 text-lg font-semibold text-white">{course.name}</h2>
      <p className="mt-1 min-h-10 text-sm text-zinc-400">{course.description}</p>
      <div className="mt-5 h-2 rounded-full bg-white/10">
        <div className={`h-full rounded-full ${course.tone}`} style={{ width: `${course.progress}%` }} />
      </div>
      <div className="mt-4 flex gap-4 text-xs text-zinc-500">
        <span>{course.playlists.length} Playlists</span>
        <span>{course.videos} Videos</span>
        <span>{course.topics} Topics</span>
      </div>
      <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-sm font-medium text-zinc-200">{course.studyTime} studied</p>
          <p className="mt-1 text-xs text-zinc-500">Last studied {course.lastStudied.toLowerCase()}</p>
        </div>
        <Link href={`/courses/${course.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300">
          Open Course <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
