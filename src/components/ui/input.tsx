import { InputHTMLAttributes } from "react";

export const Input = ({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      {...props}
    />
  );
};