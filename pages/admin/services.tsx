import ServicesForm from "@/components/admin/services/ServicesForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getServices } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function Services() {
  const services = useQuery("services", () => getServices());
  return (
    <AdminLayout>
      <ServicesForm services={services} />
    </AdminLayout>
  );
}
