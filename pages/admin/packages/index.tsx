import PackagesList from "@/components/admin/packages/list/PackagesList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function PackagesListAdminPage() {
  return (
    <>
      <Head>
        <title>Packages</title>
        <meta name="description" content="RJ Interior Admin Packages Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <PackagesList />
      </AdminLayout>
    </>
  );
}
