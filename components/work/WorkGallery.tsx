/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from "react";
import { UseQueryResult } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageViewer from "react-simple-image-viewer";
import YoutubeEmbed from "../common/YoutubeEmbed";

interface IWorkGalleryProps {
  works?: UseQueryResult<any, unknown>;
}

export default function WorkGallery(props: IWorkGalleryProps) {
  const works =
    (props?.works?.data?.works &&
      props?.works?.data?.works[0] &&
      props?.works?.data?.works[0]?.works) ||
    [];
  console.log("works", works);
  const worksImages = works.map((work: any) => {
    return {
      imageURL: work.imageURL,
      isVideo: work.isVideo,
      embedId: work.embedId,
    };
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="p-1 lg:p-2">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry>
          {worksImages.map(
            (
              objImage: { isVideo: boolean; imageURL: string; embedId: string },
              index: number
            ) => {
              if (objImage.isVideo && objImage.embedId) {
                return (
                  <div
                    key={index}
                    className="cursor-pointer overflow-hidden rounded"
                  >
                    <div className="cursor-pointer w-full h-auto overflow-hidden p-1 md:p-2 rounded">
                      <YoutubeEmbed embedId={`${objImage.embedId}`} />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="cursor-pointer overflow-hidden">
                    <div className="cursor-pointer w-full h-auto overflow-hidden p-1 md:p-2">
                      <img
                        src={objImage.imageURL}
                        className="w-full h-full rounded lg:rounded-xl"
                        alt=""
                        onClick={() => openImageViewer(index)}
                      />
                    </div>
                  </div>
                );
              }
            }
          )}
        </Masonry>
      </ResponsiveMasonry>
      {isViewerOpen && (
        <ImageViewer
          src={worksImages}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1000,
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
