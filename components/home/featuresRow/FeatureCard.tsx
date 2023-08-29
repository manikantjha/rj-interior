import Card from "@/components/common/Card";
import { IRowTheme } from "@/types/row";
import Image from "next/image";
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
    <Card theme={theme}>
      <div className="mx-auto w-fit">{icon}</div>
      <p className="mb-2 text-2xl font-semibold text-gray-900">{title}</p>
      <p className="mb-3 font-normal text-black">{description}</p>
    </Card>
  );
}
