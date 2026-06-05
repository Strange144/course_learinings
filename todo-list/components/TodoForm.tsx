"use client";

import { useState } from "react";
import type { Priority } from "@/lib/types";

interface TodoFormProps {
  onAdd: (text: string, priority: Priority, dueDate?: string) => void;
}

const PRIORITIES: { value: Priority; label: string }[] = [
  { value: "high", label: "🔴 High" },
  { value: "medium", label: "🟡 Medium" },
  { value: "low", label: "🟢 Low" },
];

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority, dueDate || undefined);
    setText("");
    setDueDate("");
    setPriority("medium");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-3"
    >
      {/* Text input */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-base outline-none"
      />

      {/* Bottom row: priority + due date + submit */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Priority selector */}
        <div className="flex gap-1">
          {PRIORITIES.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPriority(p.value)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                priority === p.value
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Due date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 outline-none cursor-pointer"
        />

        {/* Submit */}
        <button
          type="submit"
          className="ml-auto text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
        >
          Add
        </button>
      </div>
    </form>
  );
}
