import PackageListItem from "./PackageListItem";

interface IPackageCard {
  objPackage: {
    name: string;
    price: string;
    lstFeatures: {
      id: number;
      isIncluded: boolean;
      feature: string;
    }[];
  };
}

// bg-gradient-to-b from-orange-700 to-orange-900

export default function PackageCard(props: IPackageCard) {
  return (
    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm-light overflow-hidden">
      <div className="bg-white text-center">
        <div className="p-4 lg:p-6 bg-gradient-to-tl from-orange-900 to-orange-700">
          <h5 className="text-2xl font-semibold text-white">
            {props.objPackage.name}
          </h5>
        </div>
        <hr />
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-baseline justify-center">
            <span className="text-3xl font-semibold">&#8377;</span>
            <span className="text-5xl font-semibold tracking-tight">
              {props.objPackage.price}*
            </span>
            {/* <span className="ml-1 text-xl font-normal text-gray-500">
          /month
        </span> */}
          </div>
          <span className="text-base block mt-2">*Starting From</span>
        </div>
      </div>
      <hr />
      <div className="p-4 lg:p-6">
        <ul role="list" className="space-y-4">
          {props.objPackage.lstFeatures.map((item) => (
            <PackageListItem key={item.id} objPackageListItem={item} />
          ))}
        </ul>
      </div>
      {/* <button
        type="button"
        className="text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button> */}
    </div>
  );
}
