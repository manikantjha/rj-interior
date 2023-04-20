import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import ContactRow from "@/components/home/contactRow/ContactRow";
import FeaturesRow from "@/components/home/featuresRow/FeaturesRow";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import RecentWorkRow from "@/components/home/recentWorkRow/RecentWorkRow";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import TestimonialsRow from "@/components/home/testimonialsRow/TestimonialsRow";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import heroImage from "../public/assets/hero/home.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>RJ Interior</title>
        <meta name="description" content="RJ Inerior Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main>
          <Hero
            imgSrc={heroImage}
            imgAlt="home hero"
            hasContent
            title="RJ Interior"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nihil!"
            renderButton={() => (
              <div className="mt-12">
                <LinkBtn href="/contact" text="Get In Touch" />
              </div>
            )}
          />
          <ScrollAnimation animateIn="fadeIn" initiallyVisible>
            <FeaturesRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <FiguresRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <TestimonialsRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <ServicesRow containerClassName="bg-white" showButton />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <RecentWorkRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <ContactRow />
          </ScrollAnimation>
        </main>
      </MainLayout>
    </>
  );
}
