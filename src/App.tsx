import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks";
import "./styles/App.css";
import type { Task } from "./types/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);
  // tasks estão setadas aqui, para que os componentes filhos possam ter acesso as informações, isso é chamado de prop drilling

  // Altera o status da task clicada
  const handleTaskClick = (taskId: string) => {
    const newTasks: Task[] = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Remove a task clicada
  const handleDeleteTask = (taskId: string) => {
    const newTasks: Task[] = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Recebe o inputData informado através do "AddTask", e salva.
  const handleTaskAddition = (taskTitle: string) => {
    const newTasks: Task[] = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  // o useEffect não funciona como um função assíncrona, ele vai ser executado assim que o componente for renderizado
  useEffect(() => {
    // porém, se você define uma varíavel assíncrona, então ele funcionará como tal
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask
                  label="Informe sua tarefa."
                  handleTaskAddition={handleTaskAddition}
                />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleDeleteTask={handleDeleteTask}
                />
              </>
            }
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
