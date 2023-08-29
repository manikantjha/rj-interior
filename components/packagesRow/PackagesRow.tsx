import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { IPackage } from "@/types/package";
import PackageCard from "./PackageCard";

interface IPackagesRowProps {
  packages?: IPackage[];
}

export default function PackagesRow(props: IPackagesRowProps) {
  const packages: IPackage[] = props.packages || [];

  if (!packages.length) return null;

  return (
    <ContainerWrapper>
      <Title title="Our Packages" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {packages?.map((item, index: number) => (
          <PackageCard
            key={index}
            list={item.list || []}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}
