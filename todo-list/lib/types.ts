export type Priority = "high" | "medium" | "low";
export type Status = "all" | "active" | "completed";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
  dueDate?: string; // ISO date string YYYY-MM-DD
}
