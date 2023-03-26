import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstPackages } from "@/data/data";
import PackageCard from "./PackageCard";

export default function PackagesRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Our Packages" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {lstPackages.map((item, index) => (
          <PackageCard key={index} objPackage={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
