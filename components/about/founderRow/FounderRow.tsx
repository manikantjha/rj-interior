/* eslint-disable @next/next/no-img-element */
import { IFounder } from "@/types/founder";
import { IRowTheme } from "@/types/row";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import FounderCard from "./FounderCard";

interface IFounderRowProps extends IRowTheme {
  founders: IFounder[];
}

export default function FounderRow(props: IFounderRowProps) {
  const data = props.founders || [];

  if (data.length === 0) {
    return null;
  }

  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Founders" />
      <div className="flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-x-4 lg:space-y-0 items-center justify-center h-full">
        {data?.map((founder, index) => (
          <FounderCard
            key={index}
            imgSrc={founder.image.medium.url}
            name={founder.name}
            description={founder.description}
            designation={founder.designation}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}
