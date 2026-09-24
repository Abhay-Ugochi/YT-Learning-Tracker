import { ArrowRight, Play } from "lucide-react";
import { continueLearning } from "@/lib/mock-data";
import { SectionHeading } from "./section-heading";

export function ContinueLearning() {
  return (
    <section>
      <SectionHeading title="Continue Learning" description="Pick up where you left off" />
      <div className="space-y-3">
        {continueLearning.map((item) => (
          <article key={item.title} className="flex items-center gap-5 rounded-xl border border-white/10 bg-zinc-900/70 p-4">
            <div className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.tone}`}>
              <Play className="size-6 text-white/80" fill="currentColor" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">{item.course}</p>
              <h3 className="mt-1 truncate font-medium text-white">{item.title}</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-1.5 flex-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: `${item.progress}%` }} />
                </div>
                <span className="text-sm font-medium text-zinc-300">{item.progress}%</span>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                {item.completed} completed <span className="mx-1 text-zinc-700">/</span> {item.total} total
              </p>
            </div>
            <div className="flex w-28 shrink-0 flex-col items-end gap-3">
              <span className="text-xs text-zinc-500">{item.remaining} remaining</span>
              <button type="button" className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-400 px-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300">
                Continue <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
