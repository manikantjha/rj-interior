import React from "react";

interface IPackageListItem {
  objPackageListItem: {
    isIncluded: boolean;
    feature: string;
  };
}

export default function PackageListItem(props: IPackageListItem) {
  if (props.objPackageListItem.isIncluded) {
    return (
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          {props.objPackageListItem.feature}
        </span>
      </li>
    );
  }
  return (
    <li className="flex space-x-3 line-through decoration-gray-500">
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-5 h-5 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Check icon</title>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="text-base font-normal leading-tight text-gray-500">
        {props.objPackageListItem.feature}
      </span>
    </li>
  );
}
