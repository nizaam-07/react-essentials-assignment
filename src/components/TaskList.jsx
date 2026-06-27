import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { state } = useContext(TaskContext);

  return (
    <ul>
      {state.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
}

export default TaskList;