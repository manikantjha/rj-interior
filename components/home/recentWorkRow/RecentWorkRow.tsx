/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import Title from "@/components/common/Title";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import img01 from "../../../public/assets/interior/01.jpg";
import img02 from "../../../public/assets/interior/02.jpg";
import img03 from "../../../public/assets/interior/03.jpg";
import img04 from "../../../public/assets/interior/04.jpg";
import img05 from "../../../public/assets/interior/05.jpg";
import img06 from "../../../public/assets/interior/06.jpg";
import img07 from "../../../public/assets/interior/07.jpg";
import img08 from "../../../public/assets/interior/08.jpg";
import img09 from "../../../public/assets/interior/09.jpg";

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-[50%] right-[-10px] translate-y-[-50%] cursor-pointer bg-black/50 rounded-full p-2 text-white z-10"
      title="next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-[50%] left-[-10px] cursor-pointer bg-black/50 rounded-full p-2 text-white z-10"
      title="previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function RecentWorkRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-100 overflow-x-hidden">
      <Title title="Recent Work" />
      <div>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="px-2">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={item}
                alt="interior image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-12">
        <LinkBtn href="/work" text="Sell All Work" />
      </div>
    </ContainerWrapper>
  );
}
