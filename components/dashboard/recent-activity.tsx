import { CircleCheck, FileText, Timer } from "lucide-react";
import { recentActivity } from "@/lib/mock-data";
import { SectionHeading } from "./section-heading";

const activityIcons = {
  Completed: CircleCheck,
  "Study session": Timer,
  "Note added": FileText,
};

export function RecentActivity() {
  return (
    <section>
      <SectionHeading title="Recent Activity" description="Your latest learning milestones" />
      <div className="rounded-xl border border-white/10 bg-zinc-900/70">
        {recentActivity.map((activity, index) => {
          const Icon = activityIcons[activity.type];
          return (
            <div key={`${activity.title}-${activity.time}`} className={`flex items-center gap-4 px-5 py-4 ${index ? "border-t border-white/10" : ""}`}>
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10">
                <Icon className="size-4 text-emerald-400" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{activity.title}</p>
                <p className="mt-1 text-xs text-zinc-500">{activity.type} <span className="mx-1 text-zinc-700">•</span> {activity.course}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500">{activity.time}</p>
                {activity.detail ? <p className="mt-1 text-xs text-zinc-400">{activity.detail}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
