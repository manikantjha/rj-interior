import Card from "@/components/common/Card";
import { IRowTheme } from "@/types/row";
import CardTitle from "./CardTitle";
import ServiceList from "./ServiceList";

interface IServiceCard extends IRowTheme {
  title: string;
  list: string[];
}

export default function ServiceCard({ title, list, theme }: IServiceCard) {
  return (
    <Card theme={theme} className="!p-0 !text-left rounded-lg">
      <CardTitle title={title} />
      <ServiceList list={list} />
    </Card>
  );
}
