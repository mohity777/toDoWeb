import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

interface TaskListProps {
  searchTerm: string;
}

const TaskList: React.FC<TaskListProps> = ({ searchTerm }) => {
  const taskContext = useContext(TaskContext);

  const filteredTasks = taskContext?.filteredTasks(searchTerm);

  return (
    <div className="taskList">
      {filteredTasks?.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
