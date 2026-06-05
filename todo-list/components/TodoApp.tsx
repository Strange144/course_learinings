"use client";

import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";
import type { Priority } from "@/lib/types";

export default function TodoApp() {
  const {
    todos,
    filter,
    setFilter,
    priorityFilter,
    setPriorityFilter,
    search,
    setSearch,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    counts,
  } = useTodos();

  const [editingId, setEditingId] = useState<string | null>(null);

  function handleEdit(
    id: string,
    text: string,
    priority: Priority,
    dueDate?: string
  ) {
    editTodo(id, text, priority, dueDate);
    setEditingId(null);
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-zinc-100 dark:bg-zinc-950">
      {/* Header */}
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          My Todos
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">
          {counts.active} task{counts.active !== 1 ? "s" : ""} remaining
        </p>
      </div>

      {/* Add form */}
      <div className="w-full max-w-2xl mb-6">
        <TodoForm onAdd={addTodo} />
      </div>

      {/* Filters + Search */}
      <div className="w-full max-w-2xl mb-4">
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          search={search}
          setSearch={setSearch}
          counts={counts}
          onClearCompleted={clearCompleted}
        />
      </div>

      {/* Todo list */}
      <div className="w-full max-w-2xl flex flex-col gap-2">
        {todos.length === 0 ? (
          <div className="text-center py-16 text-zinc-400 dark:text-zinc-600">
            <p className="text-4xl mb-3">✓</p>
            <p className="text-sm font-medium">Nothing here — you&apos;re all clear!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onStartEdit={() => setEditingId(todo.id)}
              onCancelEdit={() => setEditingId(null)}
              onSaveEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}
