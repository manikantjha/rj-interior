/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import logo from "../../public/assets/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center w-full">
      <Image
        src={logo}
        className="md:h-12 mr-3 h-10 w-fit"
        alt="RJ Interior Logo"
      />
      <h1 className="text-xl font-bold mt-2 flex-shrink-0">RJ Interior</h1>
    </div>
  );
}
