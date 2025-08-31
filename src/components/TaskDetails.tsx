import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/TaskDetails.css";

const TaskDetails = () => {
  const params = useParams(); // pega os parâmetros da URL
  const navigate = useNavigate(); // navega entre as rotas

  const handleBackButtonClick = () => {
    navigate(-1); // navega para a rota anterior
  };

  return (
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          magni cum autem impedit velit dolores.
        </p>
      </div>
      <div className="back-button-container">
        <Button children="Voltar" onClick={handleBackButtonClick} />
      </div>
    </>
  );
};

export default TaskDetails;
