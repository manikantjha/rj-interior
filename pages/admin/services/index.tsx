import ServicesList from "@/components/admin/services/list/ServicesList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function ServicesListAdminPage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="RJ Interior Admin Services Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <ServicesList />
      </AdminLayout>
    </>
  );
}
