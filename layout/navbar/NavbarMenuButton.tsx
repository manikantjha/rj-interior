import CommonButton from "@/components/admin/common/CommonButton";
import { GetIcon } from "@/components/common/icons/icons";

interface INavbarMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function NavbarMenuButton({ isOpen, onClick }: INavbarMenuButtonProps) {
  return (
    <>
      {isOpen ? (
        <CommonButton
          icon={<GetIcon name="close" />}
          onClick={onClick}
          className="block md:hidden"
          variant="text"
        />
      ) : (
        <CommonButton
          icon={<GetIcon name="menu" />}
          onClick={onClick}
          className="block md:hidden"
          variant="text"
        />
      )}
    </>
  );
}

export default NavbarMenuButton;
