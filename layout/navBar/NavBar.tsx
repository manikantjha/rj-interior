/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/common/Logo";
import { lstNavBarMenu } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { checkIsActive } from "./navbarHelper";
import NavBarMenuItem from "./NavBarMenuItem";
import NavDrawer from "./NavDrawer";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md sticky top-0 left-0 right-0 z-[1000]">
        <div className="container grid grid-cols-[1fr_auto] items-center mx-auto">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {lstNavBarMenu.map((item) => (
                <NavBarMenuItem
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
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsOpen((open) => !open)}
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
      {isOpen && (
        <NavDrawer setIsOpen={setIsOpen} routerPathName={router.pathname} />
      )}
    </>
  );
}
