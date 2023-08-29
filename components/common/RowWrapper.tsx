import { IRowTheme } from "@/types/row";
import { ReactNode } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Title, { ITitle } from "./Title";

interface IRowWrapperProps extends ITitle, IRowTheme {
  children: ReactNode;
  containerWrapperClassName?: string;
}

export default function RowWrapper({
  children,
  containerWrapperClassName = "",
  ...rest
}: IRowWrapperProps) {
  return (
    <ContainerWrapper
      containerClassName={`${
        rest.theme === "dark" ? "bg-gray-50" : "bg-white"
      } ${containerWrapperClassName}`}
    >
      {rest.title && (
        <Title
          title={rest.title}
          description={rest.description || ""}
          titleClassName={`${
            rest.theme === "dark" ? "text-black" : "text-black"
          }`}
          descriptionClassName={`${
            rest.theme === "dark" ? "text-black" : "text-black"
          }`}
          titleContainerClassName={rest.titleContainerClassName}
        />
      )}
      <>{children}</>
    </ContainerWrapper>
  );
}
