import PackagesList from "@/components/admin/packages/list/PackagesList";
import AdminLayout from "@/layout/admin/AdminLayout";

export default function PackagesListAdminPage() {
  return (
    <AdminLayout>
      <PackagesList />
    </AdminLayout>
  );
}
