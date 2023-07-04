import WorkGallery from "@/components/work/WorkGallery";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Work() {
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
          <WorkGallery />
        </main>
      </Layout>
    </>
  );
}
