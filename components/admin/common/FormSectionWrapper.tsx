import { ReactNode } from "react";

interface IFormSectionWrapperProps {
  children: ReactNode;
}

export default function FormSectionWrapper(props: IFormSectionWrapperProps) {
  return (
    <div className="mb-8">
      <>{props.children}</>
    </div>
  );
}
