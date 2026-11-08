import { useState } from "react";
import { Plus } from "lucide-react";
import { MAX_TASK_LENGTH, validateTask } from "./todoUtils.js";

// Form to type a new task and add it to the list.
function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const message = validateTask(text);
    if (message) {
      setError(message);
      setSuccess("");
      return;
    }
    onAdd(text);
    setText("");
    setError("");
    setSuccess("Task added successfully!");
    setTimeout(() => setSuccess(""), 2000);
  }

  function handleChange(event) {
    setText(event.target.value);
    if (error) setError("");
  }

  return (
    <section className="add-todo">
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="e.g. Finish DBMS assignment"
          className={error ? "add-todo-input has-error" : "add-todo-input"}
          aria-label="New task"
          maxLength={MAX_TASK_LENGTH + 20}
        />
        <button type="submit" className="btn btn-primary">
          <Plus size={18} /> Add Task
        </button>
      </form>
      <div className="add-todo-meta">
        {error && <p className="msg msg-error">{error}</p>}
        {success && <p className="msg msg-success">{success}</p>}
        <span className="char-count">
          {text.trim().length}/{MAX_TASK_LENGTH}
        </span>
      </div>
    </section>
  );
}

export default AddTodo;
