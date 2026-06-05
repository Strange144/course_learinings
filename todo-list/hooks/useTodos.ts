"use client";

import { useState, useEffect, useCallback } from "react";
import type { Todo, Priority, Status } from "@/lib/types";

const STORAGE_KEY = "advanced-todos";

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function loadFromStorage(): Todo[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : [];
  } catch {
    return [];
  }
}

function saveToStorage(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Status>("all");
  const [priorityFilter, setPriorityFilter] = useState<Priority | "all">("all");
  const [search, setSearch] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    setTodos(loadFromStorage());
  }, []);

  // Persist whenever todos change
  useEffect(() => {
    saveToStorage(todos);
  }, [todos]);

  const addTodo = useCallback(
    (text: string, priority: Priority, dueDate?: string) => {
      if (!text.trim()) return;
      setTodos((prev) => [
        {
          id: generateId(),
          text: text.trim(),
          completed: false,
          priority,
          createdAt: Date.now(),
          dueDate: dueDate || undefined,
        },
        ...prev,
      ]);
    },
    []
  );

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTodo = useCallback(
    (id: string, text: string, priority: Priority, dueDate?: string) => {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === id
            ? { ...t, text: text.trim(), priority, dueDate: dueDate || undefined }
            : t
        )
      );
    },
    []
  );

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, []);

  const filteredTodos = todos.filter((t) => {
    const matchesStatus =
      filter === "all"
        ? true
        : filter === "active"
        ? !t.completed
        : t.completed;
    const matchesPriority =
      priorityFilter === "all" ? true : t.priority === priorityFilter;
    const matchesSearch = t.text
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return {
    todos: filteredTodos,
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
  };
}
