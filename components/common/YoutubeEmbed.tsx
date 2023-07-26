import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div
    className="rounded-xl"
    style={{
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
      height: 0,
    }}
  >
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
