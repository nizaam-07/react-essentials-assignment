import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./styles/TaskManager.css";

function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskInput />

      <div className="summary">
        <TaskSummary />
      </div>

      <TaskList />
    </div>
  );
}

export default App;