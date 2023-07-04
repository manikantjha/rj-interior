import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstTeamMembers } from "@/data/data";
import TeamMemberCard from "./TeamMemberCard";
import { UseQueryResult } from "react-query";

interface IFeaturesRowProps {
  teamMembers: UseQueryResult<any, unknown>;
}

export default function TeamRow(props: IFeaturesRowProps) {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Team" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {props.teamMembers?.data?.teamMembers &&
          props.teamMembers?.data?.teamMembers[0]?.teamMembers?.map(
            (item: any) => <TeamMemberCard key={item.id} objTeamMember={item} />
          )}
      </div>
    </ContainerWrapper>
  );
}
