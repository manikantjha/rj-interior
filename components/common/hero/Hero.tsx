/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

interface IHero {
  imgSrc: string;
  imgAlt: string;
  hasContent?: boolean;
  title?: string;
  description?: string;
  renderButton?: ReactNode;
  renderContent?: () => ReactNode;
}

export default function Hero(props: IHero) {
  return (
    <div className="h-[70vh] w-full overflow-hidden relative block">
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        sizes="100vw"
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
      {props.hasContent &&
        (props.renderContent ? (
          <>{props.renderContent()}</>
        ) : (
          <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-center w-full">
              <h2 className="text-6xl md:text-6xl text-accentLight mb-4 font-display font-bold uppercase text-white">
                {props.title}
              </h2>
              <p className="text-accentLighter text-xl md:text-2xl max-w-4xl mx-auto px-2 text-white">
                {props.description}
              </p>
              {props.renderButton && props.renderButton}
            </div>
          </>
        ))}
    </div>
  );
}
