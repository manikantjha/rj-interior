import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import Error from "@/components/common/Error";
import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import ContactMain from "@/components/contact/ContactMain";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import PackagesRow from "@/components/services/packagesRow/PackagesRow";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import PackagesRowSkeleton from "@/components/skeletons/PackagesRowSkeleton";
import ServicesRowSkeleton from "@/components/skeletons/ServicesRowSkeleton";
import Layout from "@/layout/Layout";
import { getHero, getPackages, getServices } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function Services() {
  const services = useQuery("services", () => getServices());
  const packages = useQuery("packages", () => getPackages());
  const hero = useQuery("serviceHero", () => getHero("service"));

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <RenderAppropriateComponent
            queryResult={hero}
            loadingComponent={<HeroSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[70vh] bg-gray-200 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load image :("
              />
            }
          >
            <Hero
              imgSrc={hero?.data?.hero?.imageURL}
              imgAlt="service image"
              title={hero?.data?.hero?.title}
              description={hero?.data?.hero?.description}
              hasContent={true}
              renderButton={() =>
                hero?.data?.hero?.hasContactButton ? (
                  <div className="mt-12">
                    <LinkBtn href="/contact" text="Get In Touch" />
                  </div>
                ) : null
              }
            />
          </RenderAppropriateComponent>
          <RenderAppropriateComponent
            queryResult={services}
            loadingComponent={<ServicesRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[500px] bg-gray-50 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load services :("
              />
            }
          >
            <ServicesRow services={services} />
          </RenderAppropriateComponent>
          <RenderAppropriateComponent
            queryResult={packages}
            loadingComponent={<PackagesRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[500px] w-full overflow-hidden flex justify-center items-center"
                text="Failed to load packages :("
              />
            }
          >
            <PackagesRow packages={packages} />
          </RenderAppropriateComponent>
          <ContactMain containerClassName="bg-gray-50" />
        </main>
      </Layout>
    </>
  );
}
