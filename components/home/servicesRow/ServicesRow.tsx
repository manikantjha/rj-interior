import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstServices } from "@/data/data";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import LinkBtn from "@/components/common/LinkBtn";

interface IServicesRow {
  containerClassName?: string;
  showButton?: boolean;
}

export default function ServicesRow(props: IServicesRow) {
  return (
    <ContainerWrapper
      containerClassName={`${
        props.containerClassName ? props.containerClassName : "bg-gray-50"
      }`}
    >
      <Title title="Our Services" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lstServices.map((item) => (
          <ServiceCard key={item.id} objService={item} />
        ))}
      </div>
      {props.showButton && (
        <div className="mt-16">
          <LinkBtn text="See All Services" href="/services" />
        </div>
      )}
    </ContainerWrapper>
  );
}
