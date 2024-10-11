import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [taskText, setTaskText] = useState<string>("");
  const taskContext = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskContext) {
      taskContext.addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Type something"
        className="addInput"
      />
      <button type="submit" className="addBtn">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
