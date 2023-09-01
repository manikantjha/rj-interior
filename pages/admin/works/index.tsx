import WorksList from "@/components/admin/works/WorksList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function WorksListAdminPage() {
  return (
    <>
      <Head>
        <title>Works</title>
        <meta name="description" content="RJ Interior Admin Works Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <WorksList />
      </AdminLayout>
    </>
  );
}
