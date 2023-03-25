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

export default function PackageCard(props: IPackageCard) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {props.objPackage.name}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">&#8377;</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {props.objPackage.price}
        </span>
        {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span> */}
      </div>

      <ul role="list" className="space-y-5 my-7">
        {props.objPackage.lstFeatures.map((item) => (
          <PackageListItem key={item.id} objPackageListItem={item} />
        ))}
      </ul>
      <button
        type="button"
        className="text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
}
