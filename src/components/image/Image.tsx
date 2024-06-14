import React from "react";

/**
 * Image component to display an image with a fallback
 * @param {ImageProps} props
 */

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  const defaultImageUrl = "/images/default.jpg";

  return (
    <img
      src={src || defaultImageUrl}
      alt={alt}
      className={className ?? "custom-image"}
    />
  );
};

export default Image;
