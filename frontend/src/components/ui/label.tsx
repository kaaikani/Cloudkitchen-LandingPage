import { LabelHTMLAttributes } from "react";

export const Label = ({
  className = "",
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />
  );
};