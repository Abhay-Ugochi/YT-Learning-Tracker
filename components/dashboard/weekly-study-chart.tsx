"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { weeklyStudyActivity } from "@/lib/mock-data";
import { SectionHeading } from "./section-heading";

export function WeeklyStudyChart() {
  return (
    <section className="rounded-xl border border-white/10 bg-zinc-900/70 p-6">
      <SectionHeading title="Weekly Study Activity" description="Actual study time, in hours" />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyStudyActivity} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} tickFormatter={(value) => `${value}h`} />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{ backgroundColor: "#18181b", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", color: "#fff" }}
              formatter={(value) => [`${value} hours`, "Study time"]}
            />
            <Bar dataKey="hours" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
