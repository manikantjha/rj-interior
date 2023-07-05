import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import Error from "@/components/common/Error";
import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import ContactRow from "@/components/home/contactRow/ContactRow";
import FeaturesRow from "@/components/home/featuresRow/FeaturesRow";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import RecentWorkRow from "@/components/home/recentWorkRow/RecentWorkRow";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import TestimonialsRow from "@/components/home/testimonialsRow/TestimonialsRow";
import FeaturesRowSkeleton from "@/components/skeletons/FeaturesRowSkeleton";
import FiguresRowSkeleton from "@/components/skeletons/FiguresRowSkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import RecentWorkRowSkeleton from "@/components/skeletons/RecentWorkRowSkeleton";
import ServicesRowSkeleton from "@/components/skeletons/ServicesRowSkeleton";
import Layout from "@/layout/Layout";
import {
  getFeatures,
  getFigures,
  getHero,
  getServices,
  getWorks,
} from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function Home() {
  const hero = useQuery("homeHero", () => getHero("home"));
  const features = useQuery("features", () => getFeatures());
  const figures = useQuery("figures", () => getFigures());
  const services = useQuery("services", () => getServices());
  const works = useQuery("recentWorks", () => getWorks());

  return (
    <>
      <Head>
        <title>RJ Interior</title>
        <meta name="description" content="RJ Inerior Home" />
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
              imgAlt="home hero"
              hasContent
              title={hero?.data?.hero?.title}
              description={hero?.data?.hero?.description}
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
            queryResult={features}
            loadingComponent={<FeaturesRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[500px] bg-gray-50 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load features :("
              />
            }
          >
            <FeaturesRow features={features} />
          </RenderAppropriateComponent>
          <RenderAppropriateComponent
            queryResult={figures}
            loadingComponent={<FiguresRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[300px] w-full overflow-hidden flex justify-center items-center"
                text="Failed to load figures :("
              />
            }
          >
            <FiguresRow figures={figures} />
          </RenderAppropriateComponent>
          <TestimonialsRow />
          <RenderAppropriateComponent
            queryResult={services}
            loadingComponent={<ServicesRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[500px] w-full overflow-hidden flex justify-center items-center"
                text="Failed to load services :("
              />
            }
          >
            <ServicesRow
              containerClassName="bg-white"
              showButton
              services={services}
            />
          </RenderAppropriateComponent>
          <RenderAppropriateComponent
            queryResult={works}
            loadingComponent={<RecentWorkRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[500px] bg-gray-100 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load works :("
              />
            }
          >
            <RecentWorkRow works={works} />
          </RenderAppropriateComponent>
          <ContactRow />
        </main>
      </Layout>
    </>
  );
}
