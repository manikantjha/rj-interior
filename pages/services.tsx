import Hero from "@/components/common/Hero";
import ContactMain from "@/components/contact/ContactMain";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import PackagesRow from "@/components/services/packagesRow/PackagesRow";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main>
          <Hero
            imgSrc="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            imgAlt="about image"
            title="Services"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure?"
            hasContent={true}
          />
          <ScrollAnimation animateIn="fadeIn">
            <ServicesRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <PackagesRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <ContactMain containerClassName="bg-gray-50" />
          </ScrollAnimation>
        </main>
      </MainLayout>
    </>
  );
}
