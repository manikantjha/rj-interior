import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import FAQsForm from "@/components/admin/faqs/FAQsForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getFAQs } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function FAQs() {
  const faqs = useQuery("homeHero", () => getFAQs());
  return (
    <AdminLayout>
      <FormSectionTitle title="FAQs" />
      <FAQsForm faqs={faqs} />
    </AdminLayout>
  );
}
