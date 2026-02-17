import { ReactNode } from "react";

export const RadioGroup = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
};

export const RadioGroupItem = ({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-sm cursor-pointer"
    >
      <input
        type="radio"
        id={id}
        name="radio-group"
        value={value}
        className="accent-green-600"
      />
      {label}
    </label>
  );
};
