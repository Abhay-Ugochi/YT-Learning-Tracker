"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "./navigation";

type MobileNavProps = {
  pathname: string;
};

export function MobileNav({ pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <aside className="relative flex h-full w-[min(18rem,85vw)] flex-col border-r border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-400 text-zinc-950">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold tracking-tight text-white">StudyTrack</span>
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav className="space-y-1 px-3 py-6" aria-label="Mobile primary navigation">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium ${
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
          </aside>
        </div>
      ) : null}
    </>
  );
}
