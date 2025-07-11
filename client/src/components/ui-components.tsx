import { ThemeToggle } from "./ThemeToggle";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        bg-sunset-500 hover:bg-sunset-100 active:bg-sunset-300
        text-white font-medium
        px-4 py-2 rounded-md
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-sunset-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        bg-gray-200 hover:bg-gray-300 text-gray-800
        text-black-500 font-medium
        border border-white-300 hover:border-white-200
        px-4 py-2 rounded-md
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-200 focus-visible:ring-offset-2
        transform hover:scale-105 active:scale-95
        dark:bg-black-300 dark:hover:bg-black-200 dark:active:bg-black-100
        dark:text-white-500 dark:border-black-200 dark:hover:border-black-100
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border border-border shadow-sm p-6 transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 border border-input
          bg-background text-muted-foreground rounded-md
          transition-colors focus:outline-none
          focus:ring-1
          focus:ring-ring
          focus:border-transparent
          placeholder:text-muted-foreground ${className}`}
      {...props}
    />
  );
}

export function Navigation() {
  return (
    <nav className="">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-black-100">
              Ambassador Tool
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
