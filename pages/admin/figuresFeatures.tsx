import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import FeaturesForm from "@/components/admin/figuresFeatures/FeaturesForm";
import FiguresForm from "@/components/admin/figuresFeatures/FiguresForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getFeatures, getFigures } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function FiguresFeatures() {
  const figures = useQuery("figures", () => getFigures());
  const features = useQuery("features", () => getFeatures());

  return (
    <AdminLayout>
      <FormSectionTitle title="Figures" />
      <RenderAppropriateComponent
        queryResult={figures}
        loaderHeight="h-[400px]"
      >
        <FiguresForm figures={figures} />
      </RenderAppropriateComponent>
      <FormSectionTitle title="Features" />
      <RenderAppropriateComponent
        queryResult={features}
        loaderHeight="h-[400px]"
      >
        <FeaturesForm features={features} />
      </RenderAppropriateComponent>
    </AdminLayout>
  );
}
