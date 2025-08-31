import React from "react";
import "../styles/AddTask.css";
import Button from "./Button";

interface InputText {
  label?: string;
  handleTaskAddition: (taskTitle: string) => void;
}

const AddTask: React.FC<InputText> = ({ label, handleTaskAddition }) => {
  const [inputData, setInputData] = React.useState("");

  // Reconhece o valor digitado no input
  const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  // Envia o valor digitado no input anteriormente
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputData}
        value={inputData}
        className="add-task-input"
        type="text"
        placeholder={label}
        required
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} children="Adicionar" />
      </div>
    </div>
  );
};

export default AddTask;
