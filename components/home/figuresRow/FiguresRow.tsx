import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { UseQueryResult } from "react-query";
import FigureCard from "./FigureCard";

interface IFiguresRowProps {
  figures: UseQueryResult<any, unknown>;
}

export default function FiguresRow(props: IFiguresRowProps) {
  return (
    <ContainerWrapper>
      <Title title="Let our numbers do the talking!" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props?.figures?.data?.figures
          ? props?.figures?.data?.figures[0]?.figures?.map((item: any) => (
              <FigureCard key={item.id} objFigrue={item} />
            ))
          : null}
      </div>
    </ContainerWrapper>
  );
}
