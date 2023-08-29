/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuButton from "./NavbarMenuButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 px-4 py-3 bg-white shadow-md z-[1000]">
        <div className="container mx-auto grid grid-cols-[1fr_auto] items-center">
          <Link href="/">
            <Logo />
          </Link>
          <NavbarMenu
            containerClassName="hidden md:block"
            listClassName="flex space-x-8"
            onClick={toggleOpen}
          />
          <NavbarMenuButton isOpen={isOpen} onClick={toggleOpen} />
        </div>
      </nav>
      <NavDrawer isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
}
