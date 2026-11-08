import { CalendarClock, Trash2 } from "lucide-react";
import { formatDate } from "./todoUtils.js";

// One row in the task list: checkbox, title, created date and delete button.
function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "todo-item done" : "todo-item"}>
      <label className="todo-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={task.completed ? "Mark as pending" : "Mark as completed"}
        />
        <span className="checkmark" />
      </label>

      <div className="todo-content">
        <p className="todo-title">{task.title}</p>
        <p className="todo-date">
          <CalendarClock size={14} /> {formatDate(task.createdAt)}
          <span className={task.completed ? "badge badge-done" : "badge badge-pending"}>
            {task.completed ? "Completed" : "Pending"}
          </span>
        </p>
      </div>

      <button
        type="button"
        className="icon-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task ${task.title}`}
        title="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}

export default TodoItem;
