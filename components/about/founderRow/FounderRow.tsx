/* eslint-disable @next/next/no-img-element */
import { objFounderInfo } from "@/data/data";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import FounderCard from "./FounderCard";

export default function FounderRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Founders" />
      <div className="flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-x-4 lg:space-y-0 items-center justify-center">
        <FounderCard
          imgSrc={objFounderInfo.raja.imgSrc}
          name={objFounderInfo.raja.name}
          description={objFounderInfo.raja.description}
          designation={objFounderInfo.raja.designation}
        />
        <FounderCard
          imgSrc={objFounderInfo.ghanshyam.imgSrc}
          name={objFounderInfo.ghanshyam.name}
          description={objFounderInfo.ghanshyam.description}
          designation={objFounderInfo.ghanshyam.designation}
        />
      </div>
    </ContainerWrapper>
  );
}
