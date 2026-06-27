import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskSummary() {
  const { state } = useContext(TaskContext);

  const total = state.tasks.length;

  const completed =
    state.tasks.filter(
      (task) => task.completed
    ).length;

  return (
    <div>
      <h3>Total Tasks: {total}</h3>
      <h3>Completed Tasks: {completed}</h3>
    </div>
  );
}

export default TaskSummary;
