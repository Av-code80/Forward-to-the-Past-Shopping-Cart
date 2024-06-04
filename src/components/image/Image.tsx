import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt}) => {
  const defaultImageUrl = "/images/default.jpg";

  return (
    <img
      src={src || defaultImageUrl}
      alt={alt}
      className={"custom-image"}
    />
  );
};

export default Image;
