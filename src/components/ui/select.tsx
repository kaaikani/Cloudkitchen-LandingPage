import { ReactNode } from "react";

export const Select = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export const SelectTrigger = ({ children }: { children: ReactNode }) => {
  return (
    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
      {children}
    </select>
  );
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return (
    <option value="" disabled selected>
      {placeholder || "Select an option"}
    </option>
  );
};

export const SelectContent = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const SelectItem = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return <option value={value}>{children}</option>;
};
