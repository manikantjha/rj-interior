import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import FoundersForm from "@/components/admin/founders/FoundersForm";
import useEntityData from "@/customHooks/useEntityData";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getFounder } from "@/services/apiServices";

export default function Founders() {
  const { data, caseOfAdd } = useEntityData("founder", getFounder);

  return (
    <AdminLayout>
      <FormSectionTitle title={caseOfAdd ? "Add Founder" : "Edit Founder"} />
      <RenderAppropriateComponent queryResult={data}>
        <FoundersForm founders={data} caseOfAdd={caseOfAdd} />
      </RenderAppropriateComponent>
    </AdminLayout>
  );
}
