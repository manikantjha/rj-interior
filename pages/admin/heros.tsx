import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import FormSectionWrapper from "@/components/admin/common/FormSectionWrapper";
import AboutHeroForm from "@/components/admin/heros/AboutHeroForm";
import HomeHeroForm from "@/components/admin/heros/HomeHeroForm";
import ServiceHeroForm from "@/components/admin/heros/ServiceHeroForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getHero } from "@/services/apiServices";
import { useQuery } from "react-query";

export default function Heroes() {
  const homeHero = useQuery("homeHero", () => getHero("home"));
  const aboutHero = useQuery("aboutHero", () => getHero("about"));
  const serviceHero = useQuery("serviceHero", () => getHero("service"));

  return (
    <AdminLayout>
      <FormSectionWrapper>
        <FormSectionTitle title="Home Page Hero" />
        <HomeHeroForm hero={homeHero} />
      </FormSectionWrapper>
      <FormSectionWrapper>
        <FormSectionTitle title="About Page Hero" />
        <AboutHeroForm hero={aboutHero} />
      </FormSectionWrapper>
      <FormSectionWrapper>
        <FormSectionTitle title="Service Page Hero" />
        <ServiceHeroForm hero={serviceHero} />
      </FormSectionWrapper>
    </AdminLayout>
  );
}
