import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { courses } from "@/lib/mock-data";

type VideoPlaceholderProps = {
  params: Promise<{ courseId: string; playlistId: string; videoId: string }>;
};

export default async function VideoPlaceholderPage({ params }: VideoPlaceholderProps) {
  const { courseId, playlistId, videoId } = await params;
  const course = courses.find((item) => item.id === courseId);
  const playlist = course?.playlists.find((item) => item.id === playlistId);
  const video = playlist?.videos.find((item) => item.id === videoId);

  if (!course || !playlist || !video) notFound();

  return (
    <section className="mx-auto w-full max-w-[1000px] p-8">
      <Link href={`/courses/${course.id}/playlists/${playlist.id}`} className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to playlist
      </Link>
      <div className="mt-8 rounded-xl border border-white/10 bg-zinc-900/70 p-10 text-center">
        <PlayCircle className="mx-auto size-12 text-emerald-400" aria-hidden="true" />
        <p className="mt-5 text-sm text-emerald-400">Study screen placeholder</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{video.title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-400">The video player and topic study experience will be implemented in a later phase.</p>
      </div>
    </section>
  );
}
