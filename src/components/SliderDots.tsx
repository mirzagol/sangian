import { Box, Flex } from "@chakra-ui/react";

interface SliderDotsProps {
  images: string[];
  current: number;
  isAnimating: boolean;
  setCurrent: (idx: number) => void;
}

const SliderDots = ({
  images,
  current,
  isAnimating,
  setCurrent,
}: SliderDotsProps) => (
  <Flex
    position="absolute"
    bottom="10px"
    left="0"
    right="0"
    justify="center"
    gap={2}
    zIndex={2}
    direction="row-reverse" // RTL: first dot on the right
  >
    {images.map((_, idx) => (
      <Box
        key={idx}
        w="8px"
        h="8px"
        borderRadius="full"
        bg={idx === current ? "blue.500" : "gray.300"}
        border="1px solid white"
        cursor={isAnimating ? "not-allowed" : "pointer"}
        onClick={() => !isAnimating && setCurrent(idx)}
      />
    ))}
  </Flex>
);

export default SliderDots;
