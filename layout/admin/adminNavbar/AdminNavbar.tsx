import Logo from "@/components/common/Logo";
import Link from "next/link";
import { useState } from "react";
import SidebarMenu from "../adminSidebar/SidebarMenu";

export default function AdminNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <nav className="bg-primary border-gray-200 dark:bg-gray-900 sticky top-0 z-[100]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto p-4 ">
        <Link href="/admin" className="flex items-center">
          <Logo isWhite />
        </Link>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg sm:hidden hover:bg-orange-200 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleToggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <SidebarMenu isSidebarOpen={isSidebarOpen} />
    </nav>
  );
}
