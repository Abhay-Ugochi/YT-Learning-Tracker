import { BookPlus, ListPlus, PlayCircle } from "lucide-react";
import { SectionHeading } from "./section-heading";

const actions = [
  { label: "Import YouTube Playlist", icon: ListPlus },
  { label: "Add Course", icon: BookPlus },
  { label: "Start Study Session", icon: PlayCircle },
];

export function QuickActions() {
  return (
    <section>
      <SectionHeading title="Quick Actions" />
      <div className="space-y-2">
        {actions.map(({ label, icon: Icon }) => (
          <button key={label} type="button" className="flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/70 px-4 text-left text-sm text-zinc-300 hover:border-emerald-400/40 hover:text-white">
            <Icon className="size-4 text-emerald-400" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
