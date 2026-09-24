import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ContinueLearning } from "@/components/playlists/continue-learning";
import { PlaylistHeader } from "@/components/playlists/playlist-header";
import { PlaylistNotes } from "@/components/playlists/playlist-notes";
import { PlaylistSummary } from "@/components/playlists/playlist-summary";
import { VideoList } from "@/components/playlists/video-list";
import { courses } from "@/lib/mock-data";

type PlaylistDetailPageProps = {
  params: Promise<{ courseId: string; playlistId: string }>;
};

export default async function PlaylistDetailPage({ params }: PlaylistDetailPageProps) {
  const { courseId, playlistId } = await params;
  const course = courses.find((item) => item.id === courseId);
  const playlist = course?.playlists.find((item) => item.id === playlistId);

  if (!course || !playlist) notFound();

  const continueVideo = playlist.videos.find((video) => video.recentlyStudied) ?? playlist.videos[0];

  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-8 p-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/courses" className="hover:text-zinc-200">Courses</Link>
        <ChevronRight className="size-4" aria-hidden="true" />
        <Link href={`/courses/${course.id}`} className="hover:text-zinc-200">{course.name}</Link>
        <ChevronRight className="size-4" aria-hidden="true" />
        <span className="text-zinc-200">{playlist.title}</span>
      </nav>
      <PlaylistHeader playlist={playlist} />
      {continueVideo ? <ContinueLearning playlist={playlist} video={continueVideo} /> : null}
      <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-8">
        <VideoList playlist={playlist} />
        <div className="space-y-6">
          <PlaylistSummary playlist={playlist} />
          <PlaylistNotes />
        </div>
      </div>
    </section>
  );
}
