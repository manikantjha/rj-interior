interface ICardTitleProps {
  title: string;
}

function CardTitle({ title }: ICardTitleProps) {
  return (
    <div
      className={`flex items-center space-x-4 px-5 py-4 md:px-6 md:py-6 bg-gradient-to-br from-primary-dark via-primary to-primary-light`}
    >
      <h2 className="text-2xl text-left font-semibold text-textLight text-white">
        {title}
      </h2>
    </div>
  );
}

export default CardTitle;
