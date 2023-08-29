import Link from "next/link";

interface INavbarMenuItemProps {
  name: string;
  path: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function NavbarMenuItem({
  name,
  isActive,
  onClick,
  path = "",
}: INavbarMenuItemProps) {
  return (
    <li onClick={onClick}>
      <Link
        href={path}
        className={`block py-2 pl-3 pr-4 rounded md:bg-transparen md:p-0 ${
          isActive ? "text-primary" : "text-black"
        } md:hover:text-primary`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
}
