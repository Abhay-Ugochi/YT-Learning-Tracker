import { ListPlus, Plus } from "lucide-react";
import { CourseGrid } from "@/components/courses/course-grid";

export default function CoursesPage() {
  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-8 p-8">
      <div className="flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <p className="text-sm text-zinc-400">Library</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Courses</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">Organize your learning and track progress across your courses.</p>
        </div>
        <div className="flex gap-3">
          <button type="button" className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white">
            <ListPlus className="size-4" aria-hidden="true" />
            Import YouTube Playlist
          </button>
          <button type="button" className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-400 px-4 text-sm font-medium text-zinc-950 hover:bg-emerald-300">
            <Plus className="size-4" aria-hidden="true" />
            Add Course
          </button>
        </div>
      </div>
      <CourseGrid />
    </section>
  );
}
