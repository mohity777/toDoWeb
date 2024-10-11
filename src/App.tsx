import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { TaskProvider } from "./context/TaskContext";
import { useDebounce } from "./hooks/useDebounce";
import "./styles.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <TaskProvider>
      <div className="container">
        <div className="heading">
          <h1>Today</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TaskFilter />
        </div>

        <TaskList searchTerm={debouncedSearchTerm} />
        <AddTask />
      </div>
    </TaskProvider>
  );
};

export default App;
