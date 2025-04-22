import { Box } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import ImageWithFallback from "./ImageWithFallback";

interface SliderImageProps {
  src: string;
  alt: string;
  transition?: string;
  transform?: string;
  loading?: boolean;
}

const SliderImage = ({
  src,
  alt,
  transition,
  transform,
  loading,
}: SliderImageProps) => (
  <Box
    width="100%"
    aspectRatio="16/9"
    style={{
      transition,
      transform,
      position: "absolute",
      top: 0,
      left: 0,
    }}
  >
    {loading ? (
      <Skeleton width="100%" height="100%" style={{ aspectRatio: "16/9" }} />
    ) : (
      <ImageWithFallback
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        objectFit="cover"
        aspectRatio="16/9"
        display="block"
      />
    )}
  </Box>
);

export default SliderImage;
