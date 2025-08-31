import React, { type ReactNode } from "react";
import "../styles/Button.css";

interface SubmitButton {
  onClick?: () => void; // função que será executada quando o botão for clicado - "?" marca como opcional
  children: ReactNode; // ReactNode é um tipo genérico que pode ser qualquer coisa
}

const Button: React.FC<SubmitButton> = ({ onClick, children }) => {
  return (
    <button className="add-task-button" type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
