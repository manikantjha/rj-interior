/* eslint-disable @next/next/no-img-element */

import Image, { StaticImageData } from "next/image";

interface IFounderCard {
  imgSrc: StaticImageData;
  name: string;
  description: string;
  designation: string;
}

export default function FounderCard(props: IFounderCard) {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 border rounded-lg shadow-sm-light bg-white p-8 max-w-md justify-items-center">
      <div className="rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] overflow-hidden">
        <Image
          src={props.imgSrc}
          alt="founder"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{props.name}</h3>
        <p className="text-base mt-1 mb-4">{props.designation}</p>
        <p className="text-small text-gray-500">{props.description}</p>
      </div>
    </div>
  );
}
