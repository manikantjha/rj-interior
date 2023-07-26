/* eslint-disable @next/next/no-img-element */
import { UseQueryResult } from "react-query";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import FounderCard from "./FounderCard";

interface IFounderRowProps {
  founders: UseQueryResult<any, unknown>;
}

export default function FounderRow(props: IFounderRowProps) {
  console.log(props.founders?.data?.founders);
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Founders" />
      <div className="flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-x-4 lg:space-y-0 items-center justify-center">
        {props.founders?.data?.founders &&
          props.founders?.data?.founders[0]?.founders?.map(
            (founder: any, index: any) => (
              <FounderCard
                key={index}
                imgSrc={founder.imageURL}
                name={founder.name}
                description={founder.description}
                designation={founder.designation}
              />
            )
          )}
      </div>
    </ContainerWrapper>
  );
}
