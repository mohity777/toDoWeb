import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed }) => {
  const taskContext = useContext(TaskContext);

  return (
    <div
      className="taskItem"
      style={{
        backgroundColor: completed ? "#e9f3e3" : "white",
        borderColor: completed ? "#83c36f" : "#e0e0e0",
      }}
    >
      <div className="taskItemDiv">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => taskContext?.toggleTask(id)}
          className="checkbox"
        />
        <span className="taskText">{text}</span>
      </div>
      <span className="deleteBtn" onClick={() => taskContext?.deleteTask(id)}>
        ❌
      </span>
    </div>
  );
};

export default TaskItem;
