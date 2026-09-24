import { CheckCircle2, Clock3, PlayCircle, Target } from "lucide-react";

function ProgressRing() {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * 0.38;

  return (
    <div className="relative size-32 shrink-0">
      <svg className="size-full -rotate-90" viewBox="0 0 120 120" aria-label="62% overall completion">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="9" className="text-white/10" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-emerald-400"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">62%</span>
    </div>
  );
}

const metrics = [
  { label: "Content completed", value: "42h 18m", icon: Clock3 },
  { label: "Content remaining", value: "25h 43m", icon: Target },
  { label: "Topics completed", value: "127 / 205", icon: CheckCircle2 },
  { label: "Videos completed", value: "31 / 48", icon: PlayCircle },
];

export function OverallProgress() {
  return (
    <section className="rounded-xl border border-white/10 bg-zinc-900/70 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">Overall Progress</h2>
        <p className="mt-1 text-sm text-zinc-500">Duration-weighted content completion</p>
      </div>
      <div className="flex items-center gap-10">
        <ProgressRing />
        <div className="grid flex-1 grid-cols-4 gap-6">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div key={label} className="border-l border-white/10 pl-5">
              <Icon className="mb-5 size-4 text-emerald-400" aria-hidden="true" />
              <p className="text-xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
