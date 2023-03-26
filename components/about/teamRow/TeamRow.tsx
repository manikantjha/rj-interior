import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstTeamMembers } from "@/data/data";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="Meet Our Team" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {lstTeamMembers.map((item) => (
          <TeamMemberCard key={item.id} objTeamMember={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
