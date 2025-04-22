import { Box } from "@chakra-ui/react";

interface Props {
  images: string[];
  name: string;
}

const SofaImageSlider = ({ images, name }: Props) => (
  <Box
    borderRadius="xl"
    overflow="hidden"
    boxShadow="md"
    bg="gray.50"
    display="flex"
    alignItems="center"
    justifyContent="center"
    aspectRatio="16 / 9"
    width="100%"
    maxW="100%"
  >
    <img
      src={images[0] || "/placeholder.jpg"}
      alt={name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        aspectRatio: "16/9",
        display: "block",
      }}
    />
  </Box>
);

export default SofaImageSlider;
