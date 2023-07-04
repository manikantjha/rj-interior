import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import ContactRow from "@/components/home/contactRow/ContactRow";
import FeaturesRow from "@/components/home/featuresRow/FeaturesRow";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import RecentWorkRow from "@/components/home/recentWorkRow/RecentWorkRow";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import TestimonialsRow from "@/components/home/testimonialsRow/TestimonialsRow";
import Layout from "@/layout/Layout";
import {
  getFeatures,
  getFigures,
  getHero,
  getServices,
} from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function Home() {
  const hero = useQuery("homeHero", () => getHero("home"));
  const features = useQuery("features", () => getFeatures());
  const figures = useQuery("figures", () => getFigures());
  const services = useQuery("services", () => getServices());

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
          <FeaturesRow features={features} />
          <FiguresRow figures={figures} />
          <TestimonialsRow />
          <ServicesRow
            containerClassName="bg-white"
            showButton
            services={services}
          />
          <RecentWorkRow />
          <ContactRow />
        </main>
      </Layout>
    </>
  );
}
