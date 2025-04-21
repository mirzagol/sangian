import { Cushion } from "../hooks/useCushions";
import { Card, Image, Text, Box } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  cushion: Cushion;
}

const CushionCard = ({ cushion }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <ImageWithFallback
        src={cushion.image_path}
        alt={cushion.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {cushion.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default CushionCard;
