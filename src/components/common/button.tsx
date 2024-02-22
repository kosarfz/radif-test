import React from "react";

interface IButtonProps {
  children: React.ReactNode; // Changed to React.ReactNode
  className?: string;
  onClick?: () => any;
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} rounded-md text-center font-semibold text-white shadow-sm  px-2 py-1 text-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
