import { twMerge } from "tailwind-merge";
import { FC, ReactNode, ElementType } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: string;
  href?: string;
  as?: ElementType;
};

const Button: FC<ButtonProps> = ({
  children = "Button",
  onClick = () => {},
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  href,
  type,
  as: Component = "button",
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2";

  const variantStyles: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500", // Outline variant
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Component
      onClick={onClick}
      type={type}
      disabled={Component === "button" ? disabled : undefined}
      href={href}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
