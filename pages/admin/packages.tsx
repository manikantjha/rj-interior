import PackagesForm from "@/components/admin/packages/PackagesForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getPackages } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function Packages() {
  const packages = useQuery("packages", () => getPackages());
  return (
    <AdminLayout>
      <PackagesForm packages={packages} />
    </AdminLayout>
  );
}
