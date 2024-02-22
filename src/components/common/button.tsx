import React from "react";

interface IButtonProps {
  children: React.ReactNode; // Changed to React.ReactNode
  className?: string;
  onClick?: () => any;
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} rounded text-center font-semibol shadow-sm flex-1  px-2 py-3 text-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
