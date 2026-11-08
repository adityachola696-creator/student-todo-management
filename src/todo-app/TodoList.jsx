import { ClipboardList, Trash2 } from "lucide-react";
import TodoItem from "./TodoItem.jsx";

const FILTERS = [
  { value: "all", label: "All Tasks" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

// Shows the filter buttons and the list of tasks.
function TodoList({
  tasks,
  totalCount,
  completedCount,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
  onClearCompleted,
}) {
  function emptyMessage() {
    if (totalCount === 0) return "No tasks yet. Add your first task above!";
    if (filter === "pending") return "No pending tasks. Great job! 🎉";
    if (filter === "completed") return "No completed tasks yet. You can do it!";
    return "No tasks to show.";
  }

  return (
    <section id="tasks" className="todo-list">
      <div className="todo-list-header">
        <h2>My Tasks</h2>
        <div className="filters">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={filter === item.value ? "filter-btn active" : "filter-btn"}
              onClick={() => onFilterChange(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <ClipboardList size={44} />
          <p>{emptyMessage()}</p>
        </div>
      ) : (
        <ul className="todo-items">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      )}

      <div className="todo-list-footer">
        <span>
          Showing {tasks.length} of {totalCount} task(s)
        </span>
        <button
          type="button"
          className="btn btn-danger-outline"
          onClick={onClearCompleted}
          disabled={completedCount === 0}
        >
          <Trash2 size={16} /> Clear completed ({completedCount})
        </button>
      </div>
    </section>
  );
}

export default TodoList;
