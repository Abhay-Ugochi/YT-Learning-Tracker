import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import type { Playlist, Video } from "@/lib/mock-data";

export function ContinueLearning({ playlist, video }: { playlist: Playlist; video: Video }) {
  return (
    <section className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">Continue Learning</p>
      <div className="mt-4 flex items-center gap-5">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15">
          <Play className="size-6 text-emerald-400" fill="currentColor" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-zinc-500">{video.title}</p>
          <h3 className="mt-1 font-medium text-white">Lower Bound Implementation</h3>
          <p className="mt-1 text-xs text-zinc-500">Topic 6 / 9 <span className="mx-1 text-zinc-700">•</span> 12m remaining <span className="mx-1 text-zinc-700">•</span> 1h 14m study time</p>
        </div>
        <Link href={`/courses/${playlist.courseId}/playlists/${playlist.id}/videos/${video.id}`} className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-400 px-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300">
          Continue <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
