import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstFigures } from "@/data/data";
import FigureCard from "./FigureCard";

export default function FiguresRow() {
  return (
    <ContainerWrapper>
      <Title title="Let our numbers do the talking!" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstFigures.map((item) => (
          <FigureCard key={item.id} objFigrue={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
