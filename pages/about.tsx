import FounderRow from "@/components/about/founderRow/FounderRow";
import StoryRow from "@/components/about/StoryRow";
import TeamRow from "@/components/about/teamRow/TeamRow";
import Hero from "@/components/common/Hero";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

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
            imgSrc="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            imgAlt="about image"
            title="About"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consectetur?"
            hasContent={true}
          />

          <StoryRow />
          <FounderRow />
          <FiguresRow />
          <TeamRow />
        </main>
      </MainLayout>
    </>
  );
}
