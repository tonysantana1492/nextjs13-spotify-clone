import React from "react";

import { twMerge } from "tailwind-merge";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({
  className,
  children,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
          w-full 
          rounded-full 
          bg-green-500
          border
          border-transparent
          px-3 
          py-3 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-black
          font-bold
          hover:opacity-75  
          transition
        `,
        disabled && "opacity-75 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
