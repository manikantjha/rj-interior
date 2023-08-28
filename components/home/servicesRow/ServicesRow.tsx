import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import Title from "@/components/common/Title";
import { checkForData } from "@/utils/utils";
import { UseQueryResult } from "react-query";
import ServiceCard from "./ServiceCard";

interface IServicesRowProps {
  containerClassName?: string;
  showButton?: boolean;
  services?: UseQueryResult<any, unknown>;
}

export default function ServicesRow(props: IServicesRowProps) {
  const data = checkForData("services", props.services);
  if (!data) return null;
  return (
    <ContainerWrapper
      containerClassName={`${
        props.containerClassName ? props.containerClassName : "bg-gray-50"
      }`}
    >
      <Title title="Our Services" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item: any) => (
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
