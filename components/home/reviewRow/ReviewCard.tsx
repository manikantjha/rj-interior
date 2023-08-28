import Card from "@/components/common/Card";
import { IRowTheme } from "@/types/row";

interface Review {
  name: string;
  email: string;
  rating: number;
  message: string;
}

interface IReviewCardProps extends IRowTheme {
  review: Review;
}

const ReviewCard = ({ review, ...other }: IReviewCardProps) => {
  return (
    <Card
      className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm-light text-center"
      theme={other.theme}
    >
      <img src={`./assets/avatar_male.svg`} alt="" className="h-16 mx-auto" />
      <div className="grid grid-rows-[auto_auto_auto] gap-0.5">
        <h2 className="text-lg font-semibold">{review.name}</h2>
        <div className="flex text-2xl justify-center">
          <span className="text-orange-700">{"★".repeat(review.rating)}</span>
          <span className="text-black">{"★".repeat(5 - review.rating)}</span>
        </div>
        <p className="text-black">{review.message}</p>
      </div>
    </Card>
  );
};

export default ReviewCard;
