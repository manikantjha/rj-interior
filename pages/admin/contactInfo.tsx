import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import ContactInfoForm from "@/components/admin/contactInfo/ContactInfoForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getContactInfos } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function ContactInfo() {
  const contactInfos = useQuery("contactInfos", () => getContactInfos());
  return (
    <AdminLayout>
      <div className="mb-8">
        <FormSectionTitle title="Contact Info" />
        <ContactInfoForm contactInfos={contactInfos} />
      </div>
    </AdminLayout>
  );
}
