import StoryRow from "@/components/about/StoryRow";
import FounderRow from "@/components/about/founderRow/FounderRow";
import TeamRow from "@/components/about/teamRow/TeamRow";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import Error from "@/components/common/Error";
import Hero from "@/components/common/Hero";
import LinkBtn from "@/components/common/LinkBtn";
import FiguresRow from "@/components/home/figuresRow/FiguresRow";
import FiguresRowSkeleton from "@/components/skeletons/FiguresRowSkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import OurTeamRowSkeleton from "@/components/skeletons/OurTeamRowSkeleton";
import Layout from "@/layout/Layout";
import { getFigures, getHero, getTeamMembers } from "@/services/apiServices";
import Head from "next/head";
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
          <RenderAppropriateComponent
            queryResult={hero}
            loadingComponent={<HeroSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[70vh] bg-gray-200 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load image :("
              />
            }
          >
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
          </RenderAppropriateComponent>
          <StoryRow />
          <FounderRow />
          <RenderAppropriateComponent
            queryResult={figures}
            loadingComponent={<FiguresRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[300px] w-full overflow-hidden flex justify-center items-center"
                text="Failed to load figures :("
              />
            }
          >
            <FiguresRow figures={figures} />
          </RenderAppropriateComponent>
          <RenderAppropriateComponent
            queryResult={teamMembers}
            loadingComponent={<OurTeamRowSkeleton />}
            errorComponent={
              <Error
                containerClassName="h-[300px] bg-gray-50 w-full overflow-hidden flex justify-center items-center"
                text="Failed to load team members :("
              />
            }
          >
            <TeamRow teamMembers={teamMembers} />
          </RenderAppropriateComponent>
        </main>
      </Layout>
    </>
  );
}
