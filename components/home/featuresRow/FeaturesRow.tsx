import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstFeatures } from "@/data/data";
import FeatureCard from "./FeatureCard";

export default function FeaturesRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title
        title="Features"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error?"
      />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstFeatures.map((item) => (
          <FeatureCard key={item.id} objFeature={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
