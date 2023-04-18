import Hero from "@/components/common/Hero";
import ContactRow from "@/components/home/contactRow/ContactRow";
import FeaturesRow from "@/components/home/featuresRow/FeaturesRow";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import TestimonialsRow from "@/components/home/testimonialsRow/TestimonialsRow";
import MainLayout from "@/layout/MainLayout";
import "animate.css/animate.min.css";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

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
            imgSrc="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
            imgAlt="home hero"
            hasContent
            title="RJ Interior"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nihil!"
          />
          <ScrollAnimation animateIn="fadeIn">
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
            <ContactRow />
          </ScrollAnimation>
        </main>
      </MainLayout>
    </>
  );
}
