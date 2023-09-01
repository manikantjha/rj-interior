import FAQsList from "@/components/admin/faqs/FaqsList";
import AdminLayout from "@/layout/admin/AdminLayout";
import Head from "next/head";

export default function FaqsListAdminPage() {
  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="RJ Interior Admin FAQs Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <FAQsList />
      </AdminLayout>
    </>
  );
}
