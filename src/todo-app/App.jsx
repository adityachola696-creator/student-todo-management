import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import TaskStats from "./TaskStats.jsx";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import { createTask, filterTasks, getStats, loadTasks, saveTasks } from "./todoUtils.js";

// Main component: holds all tasks and passes them down to child components.
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [greeting, setGreeting] = useState("Hello");

  // 1. When the app opens, read saved tasks from localStorage.
  useEffect(() => {
    setTasks(loadTasks());
    setIsLoaded(true);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // 2. Whenever tasks change, save them to localStorage.
  useEffect(() => {
    if (isLoaded) saveTasks(tasks);
  }, [tasks, isLoaded]);

  function addTask(text) {
    setTasks([createTask(text), ...tasks]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    const completedCount = tasks.filter((task) => task.completed).length;
    if (completedCount === 0) return;
    const ok = window.confirm(
      `Are you sure you want to delete ${completedCount} completed task(s)? This cannot be undone.`,
    );
    if (ok) setTasks(tasks.filter((task) => !task.completed));
  }

  const stats = getStats(tasks);
  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <section className="welcome">
          <h1>{greeting}, Student! 👋</h1>
          <p>
            {stats.pending === 0
              ? "You're all caught up. Add a new task to plan your day."
              : `You have ${stats.pending} pending task(s). Keep going!`}
          </p>
        </section>

        <TaskStats stats={stats} />

        <AddTodo onAdd={addTask} />

        <TodoList
          tasks={visibleTasks}
          totalCount={stats.total}
          completedCount={stats.completed}
          filter={filter}
          onFilterChange={setFilter}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onClearCompleted={clearCompleted}
        />
      </main>

      <footer className="app-footer">My To-Do Manager · Built with React &amp; Vite</footer>
    </div>
  );
}

export default App;
