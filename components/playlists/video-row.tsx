import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import type { Video } from "@/lib/mock-data";

const thumbnailTones: Record<string, string> = {
  emerald: "from-emerald-500/40 to-emerald-950",
  sky: "from-sky-500/40 to-sky-950",
  violet: "from-violet-500/40 to-violet-950",
  amber: "from-amber-500/40 to-amber-950",
  rose: "from-rose-500/40 to-rose-950",
  cyan: "from-cyan-500/40 to-cyan-950",
};

export function VideoRow({ courseId, playlistId, video }: { courseId: string; playlistId: string; video: Video }) {
  const isCompleted = video.status === "Completed";
  return (
    <article className={`flex items-center gap-5 rounded-xl border bg-zinc-900/70 p-4 ${isCompleted ? "border-emerald-400/20" : "border-white/10"}`}>
      <span className="w-7 text-center font-mono text-sm text-zinc-500">{String(video.position).padStart(2, "0")}</span>
      <div className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${thumbnailTones[video.thumbnail] ?? thumbnailTones.emerald}`}>
        <Play className="size-6 text-white/80" fill="currentColor" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-white">{video.title}</h3>
            <p className="mt-1 text-xs text-zinc-500">{video.duration} <span className="mx-1 text-zinc-700">•</span> {video.topicCount} topics <span className="mx-1 text-zinc-700">•</span> {video.completedTopicCount} / {video.topicCount} completed <span className="mx-1 text-zinc-700">•</span> {video.studyTime} studied</p>
          </div>
          <span className={`shrink-0 text-sm font-medium ${isCompleted ? "text-emerald-400" : "text-zinc-300"}`}>{isCompleted ? <CheckCircle2 className="inline size-4 mr-1" aria-hidden="true" /> : null}{video.progress}%</span>
        </div>
        <div className="mt-4 h-1.5 rounded-full bg-white/10">
          <div className={`h-full rounded-full ${isCompleted ? "bg-emerald-400" : "bg-emerald-400/80"}`} style={{ width: `${video.progress}%` }} />
        </div>
        <p className="mt-2 text-xs text-zinc-500">{video.status}</p>
      </div>
      <Link href={`/courses/${courseId}/playlists/${playlistId}/videos/${video.id}`} className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-zinc-300 hover:border-emerald-400/40 hover:text-white">
        {isCompleted ? "Open Video" : "Continue"} <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
