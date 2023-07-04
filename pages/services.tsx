import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import ContactMain from "@/components/contact/ContactMain";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import PackagesRow from "@/components/services/packagesRow/PackagesRow";
import Layout from "@/layout/Layout";
import { getHero, getServices } from "@/services/apiServices";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import { useQuery } from "react-query";

export default function Services() {
  const services = useQuery("services", () => getServices());
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
          <ScrollAnimation animateIn="fadeIn">
            <ServicesRow services={services} />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <PackagesRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <ContactMain containerClassName="bg-gray-50" />
          </ScrollAnimation>
        </main>
      </Layout>
    </>
  );
}
