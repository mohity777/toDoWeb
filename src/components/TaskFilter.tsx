import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const filters = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "completed",
    label: "Completed",
  },
  {
    id: "incomplete",
    label: "Incomplete",
  },
];
const TaskFilter = () => {
  const context = useContext(TaskContext);
  const { setFilter, filter } = context || {}

  return (
    <div>
      {filters.map((item) => (
        <button
          key={item.id}
          style={{
            backgroundColor: filter === item.id ? "#54ac34" : "#aaaaaa",
          }}
          className="filterBtn"
          onClick={() => setFilter?.(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
