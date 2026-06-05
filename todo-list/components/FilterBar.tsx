"use client";

import type { Status, Priority } from "@/lib/types";

interface FilterBarProps {
  filter: Status;
  setFilter: (f: Status) => void;
  priorityFilter: Priority | "all";
  setPriorityFilter: (p: Priority | "all") => void;
  search: string;
  setSearch: (s: string) => void;
  counts: { all: number; active: number; completed: number };
  onClearCompleted: () => void;
}

const STATUS_TABS: { value: Status; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Done" },
];

const PRIORITY_FILTERS: { value: Priority | "all"; label: string }[] = [
  { value: "all", label: "Any" },
  { value: "high", label: "🔴 High" },
  { value: "medium", label: "🟡 Medium" },
  { value: "low", label: "🟢 Low" },
];

export default function FilterBar({
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
  search,
  setSearch,
  counts,
  onClearCompleted,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos..."
        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Status tabs */}
        <div className="flex gap-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-1">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                filter === tab.value
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
              <span className="ml-1 opacity-60">
                ({counts[tab.value]})
              </span>
            </button>
          ))}
        </div>

        {/* Priority filter */}
        <div className="flex gap-1">
          {PRIORITY_FILTERS.map((p) => (
            <button
              key={p.value}
              onClick={() => setPriorityFilter(p.value)}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors ${
                priorityFilter === p.value
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Clear completed */}
        {counts.completed > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
          >
            Clear done ({counts.completed})
          </button>
        )}
      </div>
    </div>
  );
}
