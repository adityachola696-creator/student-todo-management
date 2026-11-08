// Small helper functions used by the To-Do app.
// Keeping them here makes the components easier to read and easy to test.

export const STORAGE_KEY = "my-todo-manager-tasks";
export const MAX_TASK_LENGTH = 100;

// Check the text typed by the user. Returns an error message, or "" when valid.
export function validateTask(text) {
  const title = text.trim();
  if (title === "") return "Please enter a task before clicking Add Task.";
  if (title.length < 2) return "Task is too short. Use at least 2 characters.";
  if (title.length > MAX_TASK_LENGTH)
    return `Task is too long. Keep it under ${MAX_TASK_LENGTH} characters.`;
  return "";
}

// Create a new task object.
export function createTask(text) {
  return {
    id: Date.now().toString() + Math.floor(Math.random() * 1000),
    title: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// Count total, completed and pending tasks and the completion percentage.
export function getStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, pending, percentage };
}

// Return only the tasks that belong to the selected filter.
export function filterTasks(tasks, filter) {
  if (filter === "pending") return tasks.filter((task) => !task.completed);
  if (filter === "completed") return tasks.filter((task) => task.completed);
  return tasks;
}

// Read tasks from localStorage. Returns [] if nothing is saved or data is broken.
export function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Save tasks to localStorage.
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Turn an ISO date string into a friendly date and time.
export function formatDate(isoString) {
  return new Date(isoString).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
