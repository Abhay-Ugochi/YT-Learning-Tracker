import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import type { ReactNode } from "react";

export default function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="min-w-0 flex-1 bg-zinc-900/40">{children}</main>
      </div>
    </div>
  );
}
