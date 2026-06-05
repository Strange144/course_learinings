"use client";

import { useState } from "react";
import type { Todo, Priority } from "@/lib/types";

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onSaveEdit: (id: string, text: string, priority: Priority, dueDate?: string) => void;
}

const PRIORITY_COLORS: Record<Priority, string> = {
  high: "text-red-500",
  medium: "text-yellow-500",
  low: "text-green-500",
};

const PRIORITY_BG: Record<Priority, string> = {
  high: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900",
  medium: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900",
  low: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900",
};

const PRIORITY_LABELS: Record<Priority, string> = {
  high: "🔴",
  medium: "🟡",
  low: "🟢",
};

const PRIORITIES: Priority[] = ["high", "medium", "low"];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function isOverdue(dueDate: string): boolean {
  const today = new Date().toISOString().split("T")[0];
  return dueDate < today;
}

export default function TodoItem({
  todo,
  isEditing,
  onToggle,
  onDelete,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
}: TodoItemProps) {
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);
  const [editDue, setEditDue] = useState(todo.dueDate ?? "");

  function handleSave() {
    if (!editText.trim()) return;
    onSaveEdit(todo.id, editText, editPriority, editDue || undefined);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") onCancelEdit();
  }

  if (isEditing) {
    return (
      <div className={`rounded-2xl border p-4 flex flex-col gap-3 ${PRIORITY_BG[editPriority]}`}>
        <input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-zinc-900 dark:text-white text-sm outline-none font-medium"
        />
        <div className="flex flex-wrap items-center gap-2">
          {/* Priority */}
          <div className="flex gap-1">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setEditPriority(p)}
                className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${
                  editPriority === p
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-white/60 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {PRIORITY_LABELS[p]} {p}
              </button>
            ))}
          </div>
          {/* Due date */}
          <input
            type="date"
            value={editDue}
            onChange={(e) => setEditDue(e.target.value)}
            className="text-xs px-2.5 py-1 rounded-full bg-white/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 outline-none"
          />
          <div className="ml-auto flex gap-2">
            <button
              onClick={onCancelEdit}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  const overdue = !todo.completed && todo.dueDate && isOverdue(todo.dueDate);

  return (
    <div
      className={`group rounded-2xl border p-4 flex items-start gap-3 transition-opacity ${
        todo.completed ? "opacity-50" : ""
      } bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          todo.completed
            ? "border-zinc-900 bg-zinc-900 dark:border-white dark:bg-white"
            : "border-zinc-300 dark:border-zinc-600 hover:border-zinc-500"
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium break-words ${
            todo.completed
              ? "line-through text-zinc-400 dark:text-zinc-600"
              : "text-zinc-900 dark:text-white"
          }`}
        >
          {todo.text}
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          {/* Priority badge */}
          <span className={`text-xs font-semibold ${PRIORITY_COLORS[todo.priority]}`}>
            {PRIORITY_LABELS[todo.priority]} {todo.priority}
          </span>
          {/* Due date */}
          {todo.dueDate && (
            <span
              className={`text-xs font-medium ${
                overdue
                  ? "text-red-500"
                  : "text-zinc-400 dark:text-zinc-500"
              }`}
            >
              📅 {formatDate(todo.dueDate)}
              {overdue && " · Overdue"}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onStartEdit}
          aria-label="Edit"
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          aria-label="Delete"
          className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
