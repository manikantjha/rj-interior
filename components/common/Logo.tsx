/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import logoWhite from "../../public/assets/logo_white.svg";

interface ILogoProps {
  isWhite?: boolean;
  isVertical?: boolean;
}

export default function Logo(props: ILogoProps) {
  return (
    <div
      className={`flex ${
        props?.isVertical ? "flex-col" : "flex-row"
      } items-center w-full`}
    >
      <Image
        src={props?.isWhite ? logoWhite : logo}
        className="md:h-12 mr-3 h-10 w-fit"
        alt="RJ Interior Logo"
      />
      <h1
        className={`${
          props?.isVertical ? "text-2xl" : "text-xl"
        } font-bold mt-2 flex-shrink-0 ${
          props.isWhite ? "text-white" : "text-black"
        }`}
      >
        RJ Interior
      </h1>
    </div>
  );
}
