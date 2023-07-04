import FAQsRow from "@/components/faqs/FAQsRow";
import Layout from "@/layout/Layout";
import { getFAQs } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function FAQs() {
  const faqs = useQuery("faqs", () => getFAQs());
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services RJ Inerior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <FAQsRow faqs={faqs} />
        </main>
      </Layout>
    </>
  );
}
