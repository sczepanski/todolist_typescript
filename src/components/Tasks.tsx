import React from "react";
import TaskInfo from "./TaskInfo";
import type { Task } from "../types/Tasks";

type TaskProps = {
  tasks: Task[];
  handleTaskClick: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
};

const Tasks: React.FC<TaskProps> = ({
  tasks,
  handleTaskClick,
  handleDeleteTask,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskInfo
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeleteTask={handleDeleteTask}
        /> // esse "task" minúsculo, é como vai ser chamado dentro do componente TaskInfo
      ))}
    </>
  );
};

export default Tasks;
