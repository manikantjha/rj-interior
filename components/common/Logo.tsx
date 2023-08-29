/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import logoWhite from "../../public/assets/logo_white.svg";
import { companyName } from "@/data/data";

interface ILogoProps {
  isVertical?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  hideText?: boolean;
  isWhite?: boolean;
}

export default function Logo(props: ILogoProps) {
  return (
    <div
      className={`flex ${
        props?.isVertical ? "flex-col" : "flex-row"
      } items-center w-full ${props.containerClassName || ""}`}
    >
      <Image
        src={props.isWhite ? logoWhite : logo}
        className={`md:h-12 mr-3 h-10 w-fit ${props.imageClassName || ""}`}
        alt="RJ Interior Logo"
      />
      {!props.hideText && (
        <h1
          className={`text-2xl font-semibold ${
            props.isWhite ? "text-white" : "text-black"
          }`}
        >
          {companyName}
        </h1>
      )}
    </div>
  );
}
