import { BookCheck, Flame, PlaySquare, Timer } from "lucide-react";

const icons = {
  study: Timer,
  topics: BookCheck,
  videos: PlaySquare,
  streak: Flame,
};

type StatCardProps = {
  label: string;
  value: string;
  icon: keyof typeof icons;
  accent: string;
};

export function StatCard({ label, value, icon, accent }: StatCardProps) {
  const Icon = icons[icon];

  return (
    <article className="rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <div className={`mb-6 flex size-9 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="size-4 text-white" aria-hidden="true" />
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </article>
  );
}
