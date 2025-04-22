import { Box } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface SliderImageProps {
  src: string;
  alt: string;
  transition?: string;
  transform?: string;
}

const SliderImage = ({ src, alt, transition, transform }: SliderImageProps) => (
  <Box
    width="100%"
    height="100%"
    style={{
      transition,
      transform,
      position: "absolute",
      top: 0,
      left: 0,
    }}
  >
    <ImageWithFallback
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      objectFit="cover"
      aspectRatio="16/9"
      display="block"
    />
  </Box>
);

export default SliderImage;
