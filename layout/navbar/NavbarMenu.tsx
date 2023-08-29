import { lstNavBarMenu } from "@/data/data";
import { useRouter } from "next/router";
import NavbarMenuItem from "./NavbarMenuItem";

interface INavbarMenuProps {
  containerClassName?: string;
  listClassName?: string;
  onClick: () => void;
}

function checkIsActive(pathName: string, routerPathName: string) {
  if (pathName === routerPathName) {
    return true;
  }

  return false;
}

function NavbarMenu({
  containerClassName = "",
  listClassName = "",
  onClick,
}: INavbarMenuProps) {
  const router = useRouter();

  return (
    <div className={`w-full mx-auto ${containerClassName}`}>
      <ul className={`font-medium ${listClassName}`}>
        {lstNavBarMenu.map((item) => (
          <NavbarMenuItem
            key={item.id}
            name={item.name}
            path={item.path}
            isActive={checkIsActive(item.path, router.asPath)}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavbarMenu;
