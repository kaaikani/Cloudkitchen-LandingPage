import { ButtonHTMLAttributes, ReactNode, cloneElement, isValidElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "icon" | "lg";
  asChild?: boolean;
  children?: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "default",
  className = "",
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const base = "rounded-md font-medium transition inline-flex items-center justify-center";

  const sizeStyles =
    size === "icon" ? "h-10 w-10 p-0" : size === "lg" ? "px-5 py-3" : "px-4 py-2";

  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
      : variant === "ghost"
      ? "text-gray-700 hover:bg-gray-100"
      : "bg-green-600 text-white hover:bg-green-700";

  const finalClassName = `${base} ${sizeStyles} ${styles} ${className}`;

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...(children.props as object),
      className: `${finalClassName} ${(children.props as { className?: string }).className ?? ""}`.trim()
    });
  }

  return (
    <button
      className={finalClassName}
      {...props}
    >
      {children}
    </button>
  );
};
