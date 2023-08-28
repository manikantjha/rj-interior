import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { UseQueryResult } from "react-query";
import FigureCard from "./FigureCard";
import { checkForData } from "@/utils/utils";

interface IFiguresRowProps {
  figures: UseQueryResult<any, unknown>;
}

export default function FiguresRow(props: IFiguresRowProps) {
  const data = checkForData("figures", props.figures);
  if (!data) return null;

  return (
    <ContainerWrapper>
      <Title title="Let our numbers do the talking!" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item: any) => (
          <FigureCard key={item.id} objFigrue={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
