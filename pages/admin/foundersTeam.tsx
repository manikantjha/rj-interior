import TeamMembersForm from "@/components/admin/teamMembers/TeamMembersForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getTeamMembers } from "@/services/apiServices";
import React from "react";
import { useQuery } from "react-query";

export default function FoundersTeam() {
  const teamMembers = useQuery("teamMembers", () => getTeamMembers());
  return (
    <AdminLayout>
      <TeamMembersForm teamMembers={teamMembers} />
    </AdminLayout>
  );
}
