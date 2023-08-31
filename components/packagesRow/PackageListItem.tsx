import { GetIcon } from "../common/icons/icons";

interface IPackageListItemProps {
  item: string;
}

export default function PackageListItem({ item }: IPackageListItemProps) {
  return (
    <li className="flex space-x-3">
      <GetIcon name="check-circle" className="fill-primary text-white" />
      <span className="text-base font-normal leading-tight text-gray-500">
        {item}
      </span>
    </li>
  );
}
