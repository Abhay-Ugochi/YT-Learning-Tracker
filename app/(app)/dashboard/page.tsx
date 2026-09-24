import { Upload } from "lucide-react";
import { CourseCard } from "@/components/dashboard/course-card";
import { ContinueLearning } from "@/components/dashboard/continue-learning";
import { OverallProgress } from "@/components/dashboard/overall-progress";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatCard } from "@/components/dashboard/stat-card";
import { WeeklyStudyChart } from "@/components/dashboard/weekly-study-chart";
import { courses } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-8 p-8">
      <div className="flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <p className="text-sm text-zinc-400">Welcome back</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Your learning dashboard</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">Track your progress, study time, and learning activity.</p>
        </div>
        <button type="button" className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-400 px-4 text-sm font-medium text-zinc-950 hover:bg-emerald-300">
          <Upload className="size-4" aria-hidden="true" />
          Import Playlist
        </button>
      </div>
      <OverallProgress />
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Study Time This Week" value="18h 32m" icon="study" accent="bg-emerald-400/15" />
        <StatCard label="Topics Completed" value="27" icon="topics" accent="bg-sky-400/15" />
        <StatCard label="Videos Completed" value="8" icon="videos" accent="bg-violet-400/15" />
        <StatCard label="Current Streak" value="7 days" icon="streak" accent="bg-amber-400/15" />
      </div>
      <ContinueLearning />
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">My Courses</h2>
          <p className="mt-1 text-sm text-zinc-500">Your learning paths at a glance</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((course) => <CourseCard key={course.name} course={course} />)}
        </div>
      </section>
      <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)] gap-6">
        <WeeklyStudyChart />
        <div className="space-y-8">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </section>
  );
}
