import { FileText, Plus } from "lucide-react";

export function PlaylistNotes() {
  return (
    <section className="rounded-xl border border-white/10 bg-zinc-900/70 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="size-4 text-emerald-400" aria-hidden="true" />
          <h2 className="font-semibold text-white">Playlist Notes</h2>
        </div>
        <button type="button" className="inline-flex h-8 items-center gap-1 rounded-lg border border-white/10 px-2.5 text-xs text-zinc-300 hover:text-white"><Plus className="size-3.5" aria-hidden="true" /> Add Note</button>
      </div>
      <p className="mt-4 text-sm text-zinc-500">Add notes about this playlist...</p>
    </section>
  );
}
