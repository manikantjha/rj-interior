import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import FormSectionWrapper from "@/components/admin/common/FormSectionWrapper";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import CommonHeroForm from "@/components/admin/heros/CommonHeroForm";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getHero } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function HeroesAdminPage() {
  const homeHero = useQuery("homeHero", () => getHero("home"));
  const aboutHero = useQuery("aboutHero", () => getHero("about"));
  const serviceHero = useQuery("serviceHero", () => getHero("service"));

  return (
    <>
      <Head>
        <title>Heroes</title>
        <meta name="description" content="RJ Interior Admin Heroes Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <FormSectionWrapper>
          <FormSectionTitle title="Home Page Hero" />
          <RenderAppropriateComponent
            queryResult={homeHero}
            containerSize="h-[400px] w-full"
          >
            <CommonHeroForm hero={homeHero} pageId="home" />
          </RenderAppropriateComponent>
        </FormSectionWrapper>
        <FormSectionWrapper>
          <FormSectionTitle title="About Page Hero" />
          <RenderAppropriateComponent
            queryResult={aboutHero}
            containerSize="h-[400px] w-full"
          >
            <CommonHeroForm hero={aboutHero} pageId="about" />
          </RenderAppropriateComponent>
        </FormSectionWrapper>
        <FormSectionWrapper>
          <FormSectionTitle title="Service Page Hero" />
          <RenderAppropriateComponent
            queryResult={serviceHero}
            containerSize="h-[400px] w-full"
          >
            <CommonHeroForm hero={serviceHero} pageId="service" />
          </RenderAppropriateComponent>
        </FormSectionWrapper>
      </AdminLayout>
    </>
  );
}
