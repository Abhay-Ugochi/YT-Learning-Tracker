import { CheckCircle2, Clock3, Timer, Video } from "lucide-react";
import type { Playlist } from "@/lib/mock-data";

export function PlaylistSummary({ playlist }: { playlist: Playlist }) {
  return (
    <aside className="rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <h2 className="font-semibold text-white">Playlist Summary</h2>
      <dl className="mt-5 space-y-4 text-sm">
        {[
          { label: "Total duration", value: playlist.contentDuration, icon: Clock3 },
          { label: "Completed content", value: playlist.completedDuration, icon: CheckCircle2 },
          { label: "Remaining content", value: playlist.remainingDuration, icon: Clock3 },
          { label: "Actual study time", value: playlist.studyTime, icon: Timer },
          { label: "Topics", value: `${playlist.completedTopics} / ${playlist.topicCount}`, icon: CheckCircle2 },
          { label: "Videos", value: `${playlist.completedVideos} / ${playlist.videoCount}`, icon: Video },
          { label: "Study per completed hour", value: "26m", icon: Timer },
        ].map(({ label, value, icon: Icon }) => <div key={label} className="flex items-center justify-between gap-4"><span className="flex items-center gap-2 text-zinc-500"><Icon className="size-4 text-emerald-400" aria-hidden="true" />{label}</span><span className="text-right text-zinc-200">{value}</span></div>)}
      </dl>
    </aside>
  );
}
