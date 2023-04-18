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
            imgSrc="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
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
