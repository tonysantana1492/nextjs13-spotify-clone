import React from "react";

import { twMerge } from "tailwind-merge";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IProps> = ({ className, type, disabled, ...props }) => {
  return (
    <input
      type={type}
      className={twMerge(
        `
        flex 
        w-full 
        rounded-md 
        bg-neutral-700
        border
        border-transparent
        px-3 
        py-3 
        text-sm 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
      `,
        disabled && "opacity-75",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
