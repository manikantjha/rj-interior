import PackageListItem from "./PackageListItem";

interface IPackageCard {
  objPackage: {
    title: string;
    price: string;
    list: string[];
  };
}

export default function PackageCard(props: IPackageCard) {
  return (
    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm-light overflow-hidden">
      <div className="bg-white text-center">
        <div className="p-4 lg:p-6 bg-gradient-to-tl from-orange-900 to-orange-700">
          <p className="text-2xl font-semibold text-white">
            {props.objPackage.title}
          </p>
        </div>
        <hr />
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-baseline justify-center">
            <span className="text-3xl font-semibold">&#8377;</span>
            <span className="text-5xl font-semibold tracking-tight">
              {props.objPackage.price}*
            </span>
          </div>
          <span className="text-base block mt-2">*Starting From</span>
        </div>
      </div>
      <hr />
      <div className="p-4 lg:p-6">
        <ul role="list" className="space-y-4">
          {props.objPackage.list.map((item, index) => (
            <PackageListItem key={index} objPackageListItem={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
