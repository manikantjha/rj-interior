import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

interface IContactMain {
  containerClassName?: string;
}

export default function ContactMain(props: IContactMain) {
  return (
    <ContainerWrapper
      containerClassName={`${
        props.containerClassName ? props.containerClassName : "bg-gray-50"
      }`}
    >
      <div className="bg-white shadow p-4 lg:p-8 max-w-7xl rounded-lg grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 mx-auto">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
