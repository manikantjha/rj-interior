/* eslint-disable @next/next/no-img-element */
import { objFounderInfo } from "@/data/data";

export default function FounderCard() {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 border rounded-lg shadow-sm bg-white p-8 md:w-[50%] xs:w-full justify-items-center items-center">
      <div className="rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] overflow-hidden">
        <img
          src={objFounderInfo.imgSrc}
          alt="founder"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4">{objFounderInfo.name}</h3>
        <p>{objFounderInfo.description}</p>
      </div>
    </div>
  );
}
