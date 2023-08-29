import NavbarMenu from "./NavbarMenu";

interface INavDrawerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function NavDrawer({ isOpen, onClick }: INavDrawerProps) {
  return (
    <div
      className={`h-[calc(100vh_-_64px)] w-full overflow-y-auto p-4 fixed top-[60] ${
        isOpen ? "left-0" : "left-[-100vw]"
      }  z-[1000] grid grid-rows-[1fr] gap-4 bg-white shadow-lg transition-all md:hidden`}
    >
      <NavbarMenu
        containerClassName="block md:hidden border border-gray-200 rounded-lg"
        listClassName="space-y-3 p-3"
        onClick={onClick}
      />
    </div>
  );
}
