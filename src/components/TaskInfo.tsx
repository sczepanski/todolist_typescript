import React from "react";
import type { Task } from "../types/Tasks";
import "../styles/Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom"; // antes era useHistory

type TaskProps = {
  task: Task; // Aqui chama aquele task minúsculo...
  handleTaskClick: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
};

const TaskInfo: React.FC<TaskProps> = ({
  task,
  handleTaskClick,
  handleDeleteTask,
}) => {
  const navigate = useNavigate(); // agora funciona desta forma a questão de rotas

  const handleTaskDetailsClick = (taskTitle: string) => {
    navigate(`/${taskTitle}`); // bem mais simples
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid #51a2ff" } : {}} // se task.completed for true, ele vai ter uma borda azul
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        <h1>{task.title}</h1>
      </div>

      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={() => handleTaskDetailsClick(task.title)}
        >
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleDeleteTask(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default TaskInfo;
