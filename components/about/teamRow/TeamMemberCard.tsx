/* eslint-disable @next/next/no-img-element */

interface ITeamMemberCard {
  objTeamMember: {
    imgSrc: string;
    name: string;
    description: string;
  };
}

export default function TeamMemberCard(props: ITeamMemberCard) {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden flex flex-col items-center p-8 border bg-white">
      <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] overflow-hidden rounded-full">
        <img
          src={props.objTeamMember.imgSrc}
          alt={props.objTeamMember.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-xl mt-4 mb-3 font-medium">
          {props.objTeamMember.name}
        </p>
        <p>{props.objTeamMember.description}</p>
      </div>
    </div>
  );
}
