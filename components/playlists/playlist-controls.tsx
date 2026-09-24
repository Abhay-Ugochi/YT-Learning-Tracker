"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export type VideoFilter = "All" | "Not Started" | "In Progress" | "Completed";
export type VideoSort = "Playlist order" | "Progress" | "Duration" | "Recently studied" | "Completion";

type PlaylistControlsProps = {
  query: string;
  filter: VideoFilter;
  sort: VideoSort;
  onQueryChange: (query: string) => void;
  onFilterChange: (filter: VideoFilter) => void;
  onSortChange: (sort: VideoSort) => void;
};

export function PlaylistControls({ query, filter, sort, onQueryChange, onFilterChange, onSortChange }: PlaylistControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="relative w-80">
        <span className="sr-only">Search videos</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search videos..." className="h-10 w-full rounded-lg border border-white/10 bg-zinc-900/70 pl-9 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/60" />
      </label>
      <SlidersHorizontal className="ml-2 size-4 text-zinc-500" aria-hidden="true" />
      <label className="sr-only" htmlFor="playlist-sort">Sort videos</label>
      <select id="playlist-sort" value={sort} onChange={(event) => onSortChange(event.target.value as VideoSort)} className="h-10 rounded-lg border border-white/10 bg-zinc-900/70 px-3 text-sm text-zinc-300 outline-none focus:border-emerald-400/60">
        {["Playlist order", "Progress", "Duration", "Recently studied", "Completion"].map((option) => <option key={option}>{option}</option>)}
      </select>
      <label className="sr-only" htmlFor="playlist-filter">Filter videos</label>
      <select id="playlist-filter" value={filter} onChange={(event) => onFilterChange(event.target.value as VideoFilter)} className="h-10 rounded-lg border border-white/10 bg-zinc-900/70 px-3 text-sm text-zinc-300 outline-none focus:border-emerald-400/60">
        {["All", "Not Started", "In Progress", "Completed"].map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}
