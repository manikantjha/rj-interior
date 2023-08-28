import { ReactNode } from "react";

interface IFormSectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function FormSectionContainer(
  props: IFormSectionContainerProps
) {
  return (
    <div className={`p-4 border border-gray-200 rounded-md ${props.className}`}>
      <>{props.children}</>
    </div>
  );
}
