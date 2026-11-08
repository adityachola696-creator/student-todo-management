import { CheckSquare } from "lucide-react";

// Simple top navigation bar with the app name.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-brand">
          <span className="navbar-logo">
            <CheckSquare size={20} />
          </span>
          My To-Do Manager
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#tasks">My Tasks</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
