import FounderRow from "@/components/about/founderRow/FounderRow";
import StoryRow from "@/components/about/StoryRow";
import TeamRow from "@/components/about/teamRow/TeamRow";
import Hero from "@/components/common/Hero";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main>
          <Hero
            imgSrc="/assets/hero/about.jpg"
            imgAlt="about image"
            title="About"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consectetur?"
            hasContent={true}
          />
          <ScrollAnimation animateIn="fadeIn">
            <StoryRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <FounderRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <FiguresRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <TeamRow />
          </ScrollAnimation>
        </main>
      </MainLayout>
    </>
  );
}
