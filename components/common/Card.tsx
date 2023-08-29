import { IRowTheme } from "@/types/row";
import { ReactNode } from "react";

interface ICardProps extends IRowTheme {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "", theme }: ICardProps) {
  return (
    <div
      className={`block p-6 ${
        theme === "dark" ? "bg-white" : "bg-gray-100"
      } border border-gray-100 rounded-lg shadow-sm shadow-gray-100 text-center w-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
