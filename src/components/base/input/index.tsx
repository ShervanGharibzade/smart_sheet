import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "default" | "primary" | "secondary";
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = "default",
  className,
  ...props
}) => {
  const baseStyles =
    "w-full p-2 border border-zinc-800 rounded-md focus:outline-none bg-zinc-900 text-white";

  const variantStyles = {
    default:
      "border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
    primary:
      "border-blue-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-700",
    secondary:
      "border-zinc-500 focus:border-zinc-700 focus:ring-2 focus:ring-zinc-700",
  };

  const inputClass = twMerge(
    clsx(baseStyles, variantStyles[variant], className)
  );
  const errorClass = "text-red-500 text-sm mt-1";

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-200 my-2">
          {label}
        </label>
      )}
      <input className={inputClass} {...props} />
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
};

export default Input;
