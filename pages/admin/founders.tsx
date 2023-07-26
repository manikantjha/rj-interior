import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import FoundersForm from "@/components/admin/founders/FoundersForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getFounders } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function Founders() {
  const founders = useQuery("founders", () => getFounders());

  return (
    <AdminLayout>
      <FormSectionTitle title="Founders" />
      <RenderAppropriateComponent
        queryResult={founders}
        loaderContainerHeightWidth="h-[400px] w-full"
      >
        <FoundersForm founders={founders} />
      </RenderAppropriateComponent>
    </AdminLayout>
  );
}
