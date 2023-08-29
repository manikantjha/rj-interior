import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import PackagesForm from "@/components/admin/packages/PackagesForm";
import useEntityData from "@/customHooks/useEntityData";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getPackage } from "@/services/apiServices";

export default function Packages() {
  const { data, caseOfAdd } = useEntityData("package", getPackage);
  return (
    <AdminLayout>
      <FormSectionTitle
        title={caseOfAdd ? "Add Package" : "Edit Package"}
        hasBackButton
      />
      <RenderAppropriateComponent queryResult={data}>
        <PackagesForm packages={data} caseOfAdd={caseOfAdd} />
      </RenderAppropriateComponent>
    </AdminLayout>
  );
}
