/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import FounderCard from "./FounderCard";

export default function FounderRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Founder" />
      <div className="flex items-center justify-center">
        <FounderCard />
      </div>
    </ContainerWrapper>
  );
}
