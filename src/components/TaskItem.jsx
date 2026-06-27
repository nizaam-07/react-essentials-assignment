import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const editTask = () => {
    const newText = prompt("Edit Task", task.text);

    if (newText) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id: task.id,
          text: newText,
        },
      });
    }
  };

  return (
    <li>
      <span
  className={
    task.completed ? "completed" : ""
  }
>
        {task.text}
      </span>

      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_TASK",
            payload: task.id,
          })
        }
      >
        Complete
      </button>

      <button onClick={editTask}>
        Edit
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TASK",
            payload: task.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;