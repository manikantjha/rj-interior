/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <MainLayout>
      <ContainerWrapper>
        <div className="max-w-lg mx-auto text-center grid grid-rows-[auto_1fr_auto] md:gap-6 gap-12">
          <div className="grid grid-rows-[auto_auto] gap-6">
            <p className="text-4xl font-semibold">Opps!</p>
            <p className="text-xl">
              Looks like what you are looking for cannot be found.
            </p>
          </div>
          <div>
            <img
              src="/assets/404.svg"
              className="h-[200px] lg:h-[400px] w-auto"
              alt="404"
            />
          </div>
          <div>
            {/* <Link
              href="/"
              className="bg-primary p-3 text-white rounded-full h-full"
            >
              Back to Home
            </Link> */}
            <LinkBtn text="Back to Home" href="/" />
          </div>
        </div>
      </ContainerWrapper>
    </MainLayout>
  );
}
