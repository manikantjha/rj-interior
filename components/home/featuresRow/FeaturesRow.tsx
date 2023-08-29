import RowWrapper from "@/components/common/RowWrapper";
import { GetIcon } from "@/components/common/icons/icons";
import { IFeature } from "@/types/features";
import { IRowTheme } from "@/types/row";
import FeatureCard from "./FeatureCard";

interface IFeaturesRowProps extends IRowTheme {
  features: IFeature[];
}

export default function FeaturesRow(props: IFeaturesRowProps) {
  const data = props.features || [];
  const icons = [
    <GetIcon
      name="puzzle"
      key="puzzle"
      className="text-primary mb-4"
      size="w-14 h-14"
    />,
    <GetIcon
      name="team"
      key="team"
      className="text-primary mb-4"
      size="w-14 h-14"
    />,
    <GetIcon
      name="sheild"
      key="sheild"
      className="text-primary mb-4"
      size="w-14 h-14"
    />,
    <GetIcon
      name="smile"
      key="smile"
      className="text-primary mb-4"
      size="w-14 h-14"
    />,
  ];
  return (
    <RowWrapper title="Features" theme={props.theme}>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            description={item.description}
            icon={icons[index]}
            title={item.title}
            theme={props.theme}
          />
        ))}
      </div>
    </RowWrapper>
  );
}
