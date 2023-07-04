import StoryRow from "@/components/about/StoryRow";
import FounderRow from "@/components/about/founderRow/FounderRow";
import TeamRow from "@/components/about/teamRow/TeamRow";
import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import Layout from "@/layout/Layout";
import { getFigures, getHero, getTeamMembers } from "@/services/apiServices";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import { useQuery } from "react-query";

export default function About() {
  const hero = useQuery("aboutHero", () => getHero("about"));
  const figures = useQuery("figures", () => getFigures());
  const teamMembers = useQuery("teamMembers", () => getTeamMembers());

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero
            imgSrc={hero?.data?.hero?.imageURL}
            imgAlt="about image"
            title={hero?.data?.hero?.title}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consectetur?"
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
            <StoryRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <FounderRow />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <FiguresRow figures={figures} />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <TeamRow teamMembers={teamMembers} />
          </ScrollAnimation>
        </main>
      </Layout>
    </>
  );
}
