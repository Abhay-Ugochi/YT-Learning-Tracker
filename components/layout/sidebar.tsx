"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "./navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 border-r border-white/10 bg-zinc-950 flex-col">
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <Link href="/dashboard" className="flex items-center gap-3" aria-label="StudyTrack dashboard">
          <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-400 text-zinc-950">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">StudyTrack</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-6" aria-label="Primary navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
              }`}
            >
              <Icon className="size-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-xs text-zinc-500">Your focused learning space</p>
      </div>
    </aside>
  );
}
