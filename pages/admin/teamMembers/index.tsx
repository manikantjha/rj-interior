import TeamMembersList from "@/components/admin/teamMembers/TeamMembersList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function TeamMembersListAdminPage() {
  return (
    <>
      <Head>
        <title>Team Members</title>
        <meta
          name="description"
          content="RJ Interior Admin Team Members Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <TeamMembersList />
      </AdminLayout>
    </>
  );
}
