import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  filteredTasks: (searchTerm: string) => Task[];
  addTask: (task: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText: string) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = (searchTerm: string): Task[] => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return tasks.filter((task) => {
      const matchesSearch = task.text.toLowerCase().includes(lowerCaseSearch);
      if (filter === "completed") return task.completed && matchesSearch;
      if (filter === "incomplete") return !task.completed && matchesSearch;
      return matchesSearch;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filteredTasks,
        addTask,
        toggleTask,
        deleteTask,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
