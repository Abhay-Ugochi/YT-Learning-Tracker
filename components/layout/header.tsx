"use client";

import { Bell, Search, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/courses": "Courses",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export function Header() {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] ?? (pathname.startsWith("/courses/") ? "Courses" : "Dashboard");

  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/95 px-8">
      <div className="flex min-w-0 items-center gap-3">
        <h1 className="truncate text-2xl font-semibold tracking-tight text-white">
          {pageTitle}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <label className="relative">
          <span className="sr-only">Search</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search"
            className="h-10 w-48 rounded-lg border border-white/10 bg-white/5 pl-9 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/60"
          />
        </label>
        <button
          type="button"
          aria-label="Notifications"
          className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
        >
          <Bell className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Open profile"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:text-white"
        >
          <UserRound className="size-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
