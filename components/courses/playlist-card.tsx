import { ArrowRight, ListVideo } from "lucide-react";
import type { Playlist } from "@/lib/mock-data";

export function PlaylistCard({ playlist }: { playlist: Playlist }) {
  return (
    <article className="flex items-center gap-5 rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10">
        <ListVideo className="size-5 text-emerald-400" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-white">{playlist.title}</h3>
        <div className="mt-2 flex gap-4 text-xs text-zinc-500">
          <span>{playlist.videoCount} videos</span>
          <span>{playlist.topicCount} topics</span>
          <span>{playlist.contentDuration} content</span>
          <span>{playlist.studyTime} studied</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-1.5 flex-1 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-emerald-400" style={{ width: `${playlist.progress}%` }} />
          </div>
          <span className="text-sm font-medium text-zinc-300">{playlist.progress}%</span>
        </div>
      </div>
      <button type="button" disabled className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-zinc-500">
        Open Playlist <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </article>
  );
}
