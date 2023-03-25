import WorkGallery from "@/components/work/WorkGallery";
import MainLayout from "@/layout/MainLayout";
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
      <MainLayout>
        <main>
          <WorkGallery />
        </main>
      </MainLayout>
    </>
  );
}
