/* eslint-disable @next/next/no-img-element */

interface ITestimonialCard {
  objTestimonial: {
    client: {
      name: string;
      designation: string;
      imgSrc: string;
    };
    title: string;
    testimonial: string;
  };
}

export default function TestimonialCard(props: ITestimonialCard) {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 overflow-hidden">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {props.objTestimonial.title}
          </h3>
          <p className="my-4 font-light">{props.objTestimonial.testimonial}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src={props.objTestimonial.client.imgSrc}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{props.objTestimonial.client.name}</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              {props.objTestimonial.client.designation}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
