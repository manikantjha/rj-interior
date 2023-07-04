import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import Title from "@/components/common/Title";
import { lstServices } from "@/data/data";
import ServiceCard from "./ServiceCard";
import { UseQueryResult } from "react-query";

interface IServicesRow {
  containerClassName?: string;
  showButton?: boolean;
  services?: UseQueryResult<any, unknown>;
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
        {props?.services?.data?.services &&
          props?.services?.data?.services[0]?.services?.map((item: any) => (
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
