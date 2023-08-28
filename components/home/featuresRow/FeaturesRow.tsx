import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { checkForData } from "@/utils/utils";
import { UseQueryResult } from "react-query";
import FeatureCard from "./FeatureCard";

interface IFeaturesRowProps {
  features: UseQueryResult<any, unknown>;
}

export default function FeaturesRow(props: IFeaturesRowProps) {
  const data = checkForData("features", props.features);
  if (!data) return null;

  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title
        title="Features"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error?"
      />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item: any) => (
          <FeatureCard key={item.id} objFeature={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
