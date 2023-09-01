/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import Layout from "@/layout/Layout";

export default function ServerError() {
  return (
    <Layout>
      <ContainerWrapper>
        <div className="max-w-lg mx-auto text-center grid grid-rows-[auto_1fr_auto] md:gap-6 gap-12">
          <div className="grid grid-rows-[auto_auto] gap-6">
            <p className="text-4xl font-semibold">Opps!</p>
            <p className="text-xl">Something went wrong!</p>
          </div>
          <div>
            <img
              src="/assets/404.svg"
              className="h-[200px] lg:h-[400px] w-auto"
              alt="404"
            />
          </div>
          <div>
            <LinkBtn text="Back to Home" href="/" />
          </div>
        </div>
      </ContainerWrapper>
    </Layout>
  );
}
