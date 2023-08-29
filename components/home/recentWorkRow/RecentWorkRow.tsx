/* eslint-disable @next/next/no-img-element */
import CommonLinkButton from "@/components/admin/common/CommonLinkButton";
import RowWrapper from "@/components/common/RowWrapper";
import { IImageSize } from "@/types/image";
import { IRowTheme } from "@/types/row";
import { IWork } from "@/types/work";
import Carousel from "../../common/carousel/Carousel";

interface IWorkGalleryProps extends IRowTheme {
  works: IWork[];
}

export default function RecentWorkRow(props: IWorkGalleryProps) {
  const works: IWork[] = props.works || [];

  if (!works.length) return null;

  const workImages = works.map((work) => {
    if (work.images && Array.isArray(work.images) && work.images[0]) {
      return work.images[0].original;
    }
  });

  if (!workImages || !workImages.length) return null;

  return (
    <RowWrapper
      title="Recent Work"
      containerWrapperClassName="!overflow-x-hidden"
      theme={props.theme}
    >
      <Carousel workImages={workImages as IImageSize[]} />
      <CommonLinkButton
        href="/works/1"
        className="mt-12 w-fit font-bold mx-auto px-8 py-3"
      >
        See All Work
      </CommonLinkButton>
    </RowWrapper>
  );
}
