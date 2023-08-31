import StoryRow from "@/components/about/StoryRow";
import FounderRow from "@/components/about/founderRow/FounderRow";
import TeamRow from "@/components/about/teamRow/TeamRow";
import Hero from "@/components/common/hero/Hero";
import HeroButton from "@/components/common/hero/HeroButton";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import Layout from "@/layout/Layout";
import { getAll, getHero, getSingle } from "@/lib/common";
import Figures from "@/models/figures";
import Founder from "@/models/founders";
import TeamMember from "@/models/teamMember";
import { IFigure } from "@/types/figures";
import { IFounder } from "@/types/founder";
import { IHero } from "@/types/hero";
import { ITeamMember } from "@/types/teamMember";
import Head from "next/head";

export async function getStaticProps() {
  const hero = JSON.parse(await getHero("about"));
  const figures = JSON.parse(await getSingle(Figures));
  const teamMembers = JSON.parse(await getAll(TeamMember));
  const founders = JSON.parse(await getAll(Founder));

  return {
    props: {
      hero: hero,
      figures: figures.figures,
      teamMembers: teamMembers,
      founders,
    },
  };
}

export default function AboutPage({
  hero,
  figures,
  teamMembers,
  founders,
}: {
  hero: IHero;
  figures: IFigure[];
  teamMembers: ITeamMember[];
  founders: IFounder[];
}) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Bigining about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          imgSrc={hero?.image?.original?.url}
          imgAlt="about hero image"
          title={hero?.title}
          description={hero?.description}
          hasContent={true}
          renderButton={<HeroButton hasContactButton={hero.hasContactButton} />}
        />
        <StoryRow />
        <FounderRow founders={founders} theme="dark" />
        <FiguresRow figures={figures} theme="light" />
        <TeamRow teamMembers={teamMembers} theme="dark" />
      </Layout>
    </>
  );
}
