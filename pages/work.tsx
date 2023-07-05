import WorkGallery from "@/components/work/WorkGallery";
import Layout from "@/layout/Layout";
import { getWorks } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function Work() {
  const works = useQuery("works", () => getWorks());
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Work RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <WorkGallery works={works} />
        </main>
      </Layout>
    </>
  );
}
