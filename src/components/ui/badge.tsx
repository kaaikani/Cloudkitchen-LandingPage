import { HTMLAttributes } from "react";

export const Badge = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 ${className}`}
      {...props}
    />
  );
};