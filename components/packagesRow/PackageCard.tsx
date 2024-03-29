import PackageListItem from "./PackageListItem";

interface IPackageCardProps {
  title: string;
  price: string;
  list: string[];
}

export default function PackageCard({ list, price, title }: IPackageCardProps) {
  return (
    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm-light overflow-hidden">
      <div className="bg-white text-center">
        <div className="p-4 lg:p-6 bg-gradient-to-tl from-primary-dark via-primary to-primary-light">
          <p className="text-2xl font-semibold text-white">{title}</p>
        </div>
        <hr />
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-baseline justify-center">
            <span className="text-3xl font-semibold">&#8377;</span>
            <span className="text-5xl font-semibold tracking-tight">
              {price}*
            </span>
          </div>
          <span className="text-base block mt-2">*Starting From</span>
        </div>
      </div>
      <hr />
      <div className="p-4 lg:p-6">
        <ul role="list" className="space-y-4">
          {list.map((item, index) => (
            <PackageListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
