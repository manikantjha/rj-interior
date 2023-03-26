import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactMain() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
