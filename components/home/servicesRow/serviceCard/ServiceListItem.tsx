import { GetIcon } from "@/components/common/icons/icons";

interface IServiceListItemProps {
  listItem: string;
}

export default function ServiceListItem({ listItem }: IServiceListItemProps) {
  if (!listItem) return null;
  return (
    <li className="flex space-x-2 items-center">
      <GetIcon
        name="check-circle"
        className="fill-primary text-white flex-shrink-0"
      />
      <span className="text-base text-black">{listItem}</span>
    </li>
  );
}
