/* eslint-disable @next/next/no-img-element */

import Image, { StaticImageData } from "next/image";

interface ITeamMemberCard {
  objTeamMember: {
    imageURL: string;
    name: string;
    description: string;
  };
}

export default function TeamMemberCard(props: ITeamMemberCard) {
  return (
    <div className="shadow-sm-light rounded-lg overflow-hidden flex flex-col items-center p-8 border bg-white">
      <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] overflow-hidden rounded-full">
        <img
          src={props.objTeamMember.imageURL}
          alt={props.objTeamMember.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-xl mt-4 mb-3 font-semibold">
          {props.objTeamMember.name}
        </p>
        <p className="text-base text-gray-500">
          {props.objTeamMember.description}
        </p>
      </div>
    </div>
  );
}
