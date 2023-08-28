import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { UseQueryResult } from "react-query";
import PackageCard from "./PackageCard";

interface IPackagesRowProps {
  packages?: UseQueryResult<any, unknown>;
}

export default function PackagesRow(props: IPackagesRowProps) {
  return (
    <ContainerWrapper>
      <Title title="Our Packages" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {props?.packages?.data?.packages &&
          props?.packages?.data?.packages[0]?.packages?.map(
            (item: any, index: number) => (
              <PackageCard key={index} objPackage={item} />
            )
          )}
      </div>
    </ContainerWrapper>
  );
}
