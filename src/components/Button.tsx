import React, { type ReactNode } from "react";
import "../styles/Button.css";

interface SubmitButton {
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<SubmitButton> = ({ onClick, children }) => {
  return (
    <button className="add-task-button" type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
