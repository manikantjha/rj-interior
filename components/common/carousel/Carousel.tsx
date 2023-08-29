import { IImageSize } from "@/types/image";
import Slider from "react-slick";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Slide from "./Slide";

interface ICarouselProps {
  workImages: IImageSize[];
}

function slidesToShow(totalSlides: number, slidesToShow: number) {
  return totalSlides > slidesToShow ? slidesToShow : totalSlides;
}

function slidesToScroll(totalSlides: number, slidesToScroll: number) {
  return totalSlides > slidesToScroll ? slidesToScroll : totalSlides;
}

function carouselSettings(totalSlides: number) {
  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow(totalSlides, 4),
    slidesToScroll: slidesToScroll(totalSlides, 4),
    initialSlide: 0,
    autoplay: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow(totalSlides, 3),
          slidesToScroll: slidesToScroll(totalSlides, 3),
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow(totalSlides, 2),
          slidesToScroll: slidesToScroll(totalSlides, 2),
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
}

function Carousel({ workImages = [] }: ICarouselProps) {
  return (
    <Slider {...carouselSettings(workImages.length)}>
      {workImages.map((item, index: number) => (
        <Slide imageURL={item.url} key={index} />
      ))}
    </Slider>
  );
}

export default Carousel;
