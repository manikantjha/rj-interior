import FormSectionContainer from "@/components/admin/common/FormSectionContainer";
import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import FeaturesForm from "@/components/admin/figuresFeatures/FeaturesForm";
import FiguresForm from "@/components/admin/figuresFeatures/FiguresForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getFeatures, getFigures } from "@/services/apiServices";
import React from "react";
import { useQuery } from "react-query";

export default function FiguresFeatures() {
  const figures = useQuery("figures", () => getFigures());
  const features = useQuery("features", () => getFeatures());
  return (
    <AdminLayout>
      <FiguresForm figures={figures} />
      <FeaturesForm features={features} />
    </AdminLayout>
  );
}
