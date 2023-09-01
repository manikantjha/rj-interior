import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import ContactInfoForm from "@/components/admin/contactInfo/ContactInfoForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getContactInfo } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function ContactInfoAdminPage() {
  const contactInfos = useQuery({
    queryKey: "contactInfo",
    queryFn: () => getContactInfo(),
  });

  return (
    <>
      <Head>
        <title>Contact Info</title>
        <meta
          name="description"
          content="RJ Interior Admin Contact Info Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="mb-8">
          <FormSectionTitle title="Contact Info" />
          <RenderAppropriateComponent
            queryResult={contactInfos}
            containerSize="h-[400px] w-full"
          >
            <ContactInfoForm contactInfos={contactInfos} />
          </RenderAppropriateComponent>
        </div>
      </AdminLayout>
    </>
  );
}
