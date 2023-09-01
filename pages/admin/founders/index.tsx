import FoundersList from "@/components/admin/founders/FoundersList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function TeamMembersListAdminPage() {
  return (
    <>
      <Head>
        <title>Founders</title>
        <meta name="description" content="RJ Interior Admin Founders Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <FoundersList />
      </AdminLayout>
    </>
  );
}
