import CountUp from "react-countup";

interface IFigrueCard {
  objFigrue: {
    figure: string;
    description: string;
  };
}

export default function FigureCard(props: IFigrueCard) {
  return (
    <div className="text-center">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm-light hover:bg-gray-100">
        <p className="mb-2 text-3xl lg:text-4xl font-bold text-primary">
          <CountUp end={parseInt(props.objFigrue.figure)} scrollSpyOnce />
        </p>
        <p className="font-normal text-gray-700">
          {props.objFigrue.description}
        </p>
      </div>
    </div>
  );
}
