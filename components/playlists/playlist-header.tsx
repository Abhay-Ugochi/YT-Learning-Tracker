import { BookOpen, Clock3, ListChecks, PlayCircle } from "lucide-react";
import type { Playlist } from "@/lib/mock-data";

export function PlaylistHeader({ playlist }: { playlist: Playlist }) {
  return (
    <div className="border-b border-white/10 pb-7">
      <p className="text-sm text-emerald-400">Playlist overview</p>
      <div className="mt-2 flex items-start justify-between gap-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">{playlist.title}</h2>
          <p className="mt-2 text-zinc-400">{playlist.description}</p>
        </div>
        <span className="text-3xl font-semibold text-emerald-400">{playlist.progress}%</span>
      </div>
      <div className="mt-6 h-2.5 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-emerald-400" style={{ width: `${playlist.progress}%` }} />
      </div>
      <div className="mt-5 grid grid-cols-5 gap-6">
        {[
          { label: "Videos", value: `${playlist.videoCount}`, icon: PlayCircle },
          { label: "Topics", value: `${playlist.topicCount}`, icon: ListChecks },
          { label: "Content", value: playlist.contentDuration, icon: Clock3 },
          { label: "Study time", value: playlist.studyTime, icon: BookOpen },
          { label: "Completed", value: playlist.completedDuration, icon: ListChecks },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="border-l border-white/10 pl-4">
            <Icon className="mb-3 size-4 text-emerald-400" aria-hidden="true" />
            <p className="text-sm font-medium text-zinc-200">{value}</p>
            <p className="mt-1 text-xs text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
