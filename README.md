# My To-Do Manager

A Student To-Do Management System built with **React**, **Vite**, **JavaScript** and **CSS**.
Tasks are saved in the browser's **localStorage**, so no backend or paid API is needed.

## Features

- **Dashboard** with Total, Completed, Pending tasks and completion percentage (updates automatically)
- **Add tasks** with validation (empty / too short / too long input shows a message)
- Each task shows its **title, checkbox, created date & time, status badge and delete button**
- Mark tasks **completed** or back to **pending**
- **Filters**: All Tasks, Pending, Completed
- **Clear all completed** tasks (asks for confirmation first)
- Friendly message when there are no tasks
- **localStorage** persistence — tasks survive a page refresh
- Responsive layout for desktop and mobile

## How to run locally

1. Install [Node.js](https://nodejs.org) (version 18 or newer).
2. Clone this repository from GitHub and open the folder in a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the URL shown in the terminal (usually http://localhost:8080).

Run the tests with `npm test`.

## Folder structure

```text
src/
  todo-app/
    App.jsx          Main component: holds tasks, filter, localStorage logic
    Navbar.jsx       Top navigation bar
    TaskStats.jsx    Dashboard cards + progress bar
    AddTodo.jsx      Input + Add Task button + validation messages
    TodoList.jsx     Filter buttons, task list, empty message, clear completed
    TodoItem.jsx     One task row (checkbox, title, date, delete)
    todoUtils.js     Helper functions (validate, stats, filter, save/load)
    styles/          One CSS file per component
  routes/index.tsx   Opens the To-Do app on the home page
  styles.css         Colour theme (CSS variables) and imports the component CSS
```

## How it works (for the viva)

- `App.jsx` keeps the task list in `useState`.
- The first `useEffect` loads saved tasks from localStorage when the app opens.
- The second `useEffect` saves tasks to localStorage every time they change.
- Data flows down to child components through **props**; children call functions
  like `onAdd`, `onToggle` and `onDelete` to update the tasks in `App.jsx`.
- Dashboard numbers are calculated from the real task list with `getStats()`.
