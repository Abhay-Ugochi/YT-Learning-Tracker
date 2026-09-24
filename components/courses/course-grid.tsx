"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { courses } from "@/lib/mock-data";
import { CourseCard } from "./course-card";

type SortOption = "recent" | "progress" | "name" | "study";

function studyTimeInMinutes(studyTime: string) {
  const hours = Number(studyTime.match(/(\d+)h/)?.[1] ?? 0);
  const minutes = Number(studyTime.match(/(\d+)m/)?.[1] ?? 0);
  return hours * 60 + minutes;
}

export function CourseGrid() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("recent");
  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = courses.filter((course) =>
      `${course.name} ${course.description}`.toLowerCase().includes(normalizedQuery),
    );

    return [...result].sort((first, second) => {
      if (sort === "name") return first.name.localeCompare(second.name);
      if (sort === "progress") return second.progress - first.progress;
      if (sort === "study") return studyTimeInMinutes(second.studyTime) - studyTimeInMinutes(first.studyTime);
      return courses.indexOf(first) - courses.indexOf(second);
    });
  }, [query, sort]);

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <label className="relative w-96">
          <span className="sr-only">Search courses</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses..."
            className="h-10 w-full rounded-lg border border-white/10 bg-zinc-900/70 pl-9 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/60"
          />
        </label>
        <div className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
          <label className="sr-only" htmlFor="course-sort">Sort courses</label>
          <select
            id="course-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="h-10 appearance-none rounded-lg border border-white/10 bg-zinc-900/70 pl-9 pr-8 text-sm text-zinc-300 outline-none focus:border-emerald-400/60"
          >
            <option value="recent">Recently studied</option>
            <option value="progress">Progress</option>
            <option value="name">Name</option>
            <option value="study">Study time</option>
          </select>
        </div>
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-white/15 bg-zinc-900/40 p-12 text-center">
          <p className="font-medium text-white">No courses found</p>
          <p className="mt-2 text-sm text-zinc-500">Try a different search term.</p>
        </div>
      )}
    </>
  );
}
