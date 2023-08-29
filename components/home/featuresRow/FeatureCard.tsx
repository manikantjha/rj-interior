import Card from "@/components/common/Card";
import { IRowTheme } from "@/types/row";
import { ReactNode } from "react";

interface IFeatureCard extends IRowTheme {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  theme,
}: IFeatureCard) {
  return (
    <Card theme={theme} className="grid grid-row-[1fr_auto_auto] gap-1">
      <div className="mx-auto w-fit mb-2">{icon}</div>
      <p className="text-2xl font-semibold text-gray-900">{title}</p>
      <p className="font-normal text-black">{description}</p>
    </Card>
  );
}
