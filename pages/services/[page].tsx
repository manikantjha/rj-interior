import Hero from "@/components/common/hero/Hero";
import HeroButton from "@/components/common/hero/HeroButton";
import Loading from "@/components/common/Loading";
import PaginationNew from "@/components/common/PaginationNew";
import RowWrapper from "@/components/common/RowWrapper";
import ContactMain from "@/components/contact/ContactMain";
import ServicesRow from "@/components/home/servicesRow/ServicesRow";
import PackagesRow from "@/components/packagesRow/PackagesRow";
import Layout from "@/layout/Layout";
import {
  getAll,
  getEntityStaticPaths,
  getHero,
  getPaginated,
} from "@/lib/common";
import Package from "@/models/package";
import Service from "@/models/service";
import { IPaginatedApiResult } from "@/types/api";
import { IHero } from "@/types/hero";
import { IPackage } from "@/types/package";
import { IService } from "@/types/service";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const limit = 10;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { page = 1 } = params as ParsedUrlQuery;
  const parsedPage = parseInt(page as string);
  const hero = JSON.parse(await getHero("service"));

  const packages = JSON.parse(await getAll(Package));
  const services = JSON.parse(await getPaginated(parsedPage, limit, Service));

  return {
    props: {
      hero,
      services,
      packages,
    },
  };
}

export async function getStaticPaths() {
  const paths = JSON.parse(await getEntityStaticPaths(limit, Service));
  return {
    // Opt-in to on-demand generation for non-existent pages
    fallback: true,
    paths,
  };
}

export default function ServicesPage({
  hero,
  services,
  packages,
}: {
  hero: IHero;
  packages: IPackage[];
  services: IPaginatedApiResult<IService>;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Services</title>
          <meta name="description" content="Bigining services page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Loading color="text-orange-500" containerClassName="bg-bgLight" />
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Bigining services page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero
            imgSrc={hero?.image?.original.url}
            imgAlt="service image"
            title={hero?.title}
            description={hero?.description}
            hasContent={true}
            renderButton={
              <HeroButton hasContactButton={hero.hasContactButton} />
            }
          />
          <RowWrapper title="Our Services" theme="dark">
            <ServicesRow services={services?.items} theme="dark" />
            <PaginationNew
              currentPage={services?.currentPage}
              totalItems={services?.totalItems}
              itemsPerPage={limit}
              containerClassName="mt-[80px]"
              baseHref="/services"
              scroll={false}
            />
          </RowWrapper>
          <PackagesRow packages={packages} />
          <ContactMain theme="dark" />
        </main>
      </Layout>
    </>
  );
}
