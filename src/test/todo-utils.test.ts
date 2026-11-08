import { describe, expect, it } from "vitest";
import { filterTasks, getStats, validateTask } from "@/todo-app/todoUtils.js";

const tasks = [
  { id: "1", title: "A", completed: true, createdAt: "2026-01-01T00:00:00.000Z" },
  { id: "2", title: "B", completed: false, createdAt: "2026-01-01T00:00:00.000Z" },
  { id: "3", title: "C", completed: false, createdAt: "2026-01-01T00:00:00.000Z" },
];

describe("todo rules", () => {
  it("rejects empty or blank tasks", () => {
    expect(validateTask("")).not.toBe("");
    expect(validateTask("    ")).not.toBe("");
    expect(validateTask("Study for exam")).toBe("");
  });

  it("computes total, completed, pending and percentage from real tasks", () => {
    expect(getStats(tasks)).toEqual({ total: 3, completed: 1, pending: 2, percentage: 33 });
    expect(getStats([])).toEqual({ total: 0, completed: 0, pending: 0, percentage: 0 });
  });

  it("filters tasks by status", () => {
    expect(filterTasks(tasks, "all")).toHaveLength(3);
    expect(filterTasks(tasks, "pending").map((t) => t.id)).toEqual(["2", "3"]);
    expect(filterTasks(tasks, "completed").map((t) => t.id)).toEqual(["1"]);
  });
});
