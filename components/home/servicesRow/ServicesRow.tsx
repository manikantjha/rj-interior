import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstServices } from "@/data/data";
import ServiceCard from "./ServiceCard";

export default function ServicesRow() {
  return (
    <ContainerWrapper>
      <Title title="Our Services" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lstServices.map((item) => (
          <ServiceCard key={item.id} objService={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
