import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";
import noImage from "../assets/noImagePlaceholder.jpg";

interface Props extends ImageProps {
  src: string;
  alt: string;
}

const ImageWithFallback = ({ src, alt, ...rest }: Props) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(noImage)}
      {...rest}
    />
  );
};

export default ImageWithFallback;
