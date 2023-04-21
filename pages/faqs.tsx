import FAQsRow from "@/components/faqs/FAQsRow";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function faqs() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main>
          <FAQsRow />
        </main>
      </MainLayout>
    </>
  );
}
