/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/common/Logo";
import { lstNavBarMenu } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import NavbarMenuItem from "./NavBarMenuItem";
import { checkIsActive } from "./navBarHelper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="bg-white border-gray-200 px-4 py-2.5 shadow-md sticky top-0 left-0 right-0 z-[1000]">
        <div className="container grid grid-cols-[1fr_auto] items-center mx-auto">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {lstNavBarMenu.map((item) => (
                <NavbarMenuItem
                  key={item.id}
                  objMenuItem={item}
                  isActive={checkIsActive(item.path, router.pathname)}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsOpen((open) => !open)}
            title="menu"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <NavDrawer
        setIsOpen={setIsOpen}
        routerPathName={router.pathname}
        isOpen={isOpen}
      />
    </>
  );
}
