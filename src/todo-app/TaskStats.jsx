import { CheckCircle2, Clock, ListTodo, TrendingUp } from "lucide-react";

// Dashboard cards. The numbers come from the real task list (props), never hard-coded.
function TaskStats({ stats }) {
  const cards = [
    { label: "Total Tasks", value: stats.total, icon: ListTodo, type: "total" },
    { label: "Completed", value: stats.completed, icon: CheckCircle2, type: "completed" },
    { label: "Pending", value: stats.pending, icon: Clock, type: "pending" },
    { label: "Completion", value: `${stats.percentage}%`, icon: TrendingUp, type: "percent" },
  ];

  return (
    <section id="dashboard" className="stats">
      <div className="stats-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className={`stat-card stat-${card.type}`}>
              <div className="stat-icon">
                <Icon size={22} />
              </div>
              <div>
                <p className="stat-value">{card.value}</p>
                <p className="stat-label">{card.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="progress">
        <div className="progress-header">
          <span>Overall progress</span>
          <span>{stats.percentage}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: `${stats.percentage}%` }} />
        </div>
      </div>
    </section>
  );
}

export default TaskStats;
