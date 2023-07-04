import Link from "next/link";

interface INavbarMenuItem {
  objMenuItem: {
    name: string;
    path: string;
  };
  isActive?: boolean;
  onClick: () => void;
}

export default function NavbarMenuItem(props: INavbarMenuItem) {
  return (
    <li onClick={props.onClick}>
      <Link
        href={props.objMenuItem.path}
        className={`block py-2 pl-3 pr-4 rounded md:bg-transparen md:p-0 ${
          props.isActive ? "text-primary" : "text-black"
        } md:hover:text-primary`}
        aria-current="page"
      >
        {props.objMenuItem.name}
      </Link>
    </li>
  );
}
