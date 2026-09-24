"use client";

import { useMemo, useState } from "react";
import type { Playlist } from "@/lib/mock-data";
import { PlaylistControls, type VideoFilter, type VideoSort } from "./playlist-controls";
import { VideoRow } from "./video-row";

function durationInSeconds(duration: string) {
  return duration.split(":").reduce((total, part) => total * 60 + Number(part), 0);
}

export function VideoList({ playlist }: { playlist: Playlist }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<VideoFilter>("All");
  const [sort, setSort] = useState<VideoSort>("Playlist order");
  const videos = useMemo(() => {
    const filtered = playlist.videos.filter((video) =>
      (filter === "All" || video.status === filter) &&
      video.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
    return [...filtered].sort((first, second) => {
      if (sort === "Progress") return second.progress - first.progress;
      if (sort === "Duration") return durationInSeconds(second.duration) - durationInSeconds(first.duration);
      if (sort === "Recently studied") return Number(second.recentlyStudied) - Number(first.recentlyStudied);
      if (sort === "Completion") return Number(second.status === "Completed") - Number(first.status === "Completed");
      return first.position - second.position;
    });
  }, [filter, playlist.videos, query, sort]);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Videos</h2>
          <p className="mt-1 text-sm text-zinc-500">{videos.length} videos in this view</p>
        </div>
        <PlaylistControls query={query} filter={filter} sort={sort} onQueryChange={setQuery} onFilterChange={setFilter} onSortChange={setSort} />
      </div>
      <div className="space-y-3">
        {videos.length > 0 ? videos.map((video) => <VideoRow key={video.id} courseId={playlist.courseId} playlistId={playlist.id} video={video} />) : <div className="rounded-xl border border-dashed border-white/15 p-10 text-center text-sm text-zinc-500">No videos match the current search and filter.</div>}
      </div>
    </section>
  );
}
