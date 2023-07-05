import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstPackages } from "@/data/data";
import PackageCard from "./PackageCard";
import { UseQueryResult } from "react-query";

interface IPackagesRow {
  packages?: UseQueryResult<any, unknown>;
}

export default function PackagesRow(props: IPackagesRow) {
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
