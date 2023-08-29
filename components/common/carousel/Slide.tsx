/* eslint-disable @next/next/no-img-element */
import { Key } from "react";

interface ISlideProps {
  key: Key | null | undefined;
  containerClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  imageURL: string;
}

function Slide({
  key,
  imageURL,
  containerClassName = "",
  imageContainerClassName = "",
  imageClassName = "",
}: ISlideProps) {
  return (
    <div key={key} className={`px-2 ${containerClassName}`}>
      <div
        className={`w-full h-[400px] overflow-hidden border border-gray-100 rounded-lg shadow-sm shadow-gray-100 ${imageContainerClassName}`}
      >
        <img
          className={`h-full w-full object-cover ${imageClassName}`}
          src={imageURL}
          alt="work image"
        />
      </div>
    </div>
  );
}

export default Slide;
