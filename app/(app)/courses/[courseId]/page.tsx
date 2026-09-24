import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { CourseSummary } from "@/components/courses/course-summary";
import { PlaylistCard } from "@/components/courses/playlist-card";
import { courses } from "@/lib/mock-data";

type CourseDetailPageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = await params;
  const course = courses.find((item) => item.id === courseId);

  if (!course) notFound();

  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-8 p-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/courses" className="hover:text-zinc-200">Courses</Link>
        <ChevronRight className="size-4" aria-hidden="true" />
        <span className="text-zinc-200">{course.name}</span>
      </nav>
      <div className="border-b border-white/10 pb-6">
        <p className="text-sm text-emerald-400">Course overview</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{course.name}</h2>
        <p className="mt-2 text-zinc-400">{course.description}</p>
        <div className="mt-5 flex items-center gap-6 text-sm text-zinc-500">
          <span>{course.progress}% complete</span>
          <span>{course.studyTime} studied</span>
          <span>Last studied {course.lastStudied.toLowerCase()}</span>
        </div>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-8">
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Playlists</h2>
            <p className="mt-1 text-sm text-zinc-500">Learning content in this course</p>
          </div>
          <div className="space-y-3">
            {course.playlists.map((playlist) => <PlaylistCard key={playlist.id} playlist={playlist} />)}
          </div>
        </section>
        <CourseSummary course={course} />
      </div>
    </section>
  );
}
