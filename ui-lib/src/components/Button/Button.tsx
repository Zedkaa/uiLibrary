import React from "react";
import "./Button.css"; 

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  disabled,
  loading,
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {loading ? <span>loading...</span> : <>{children}</>}
    </button>
  );
};

export default Button;
