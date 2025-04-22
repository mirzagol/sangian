import { Other } from "../hooks/useOthers";
import { Card } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  other: Other;
}

const OtherCard = ({ other }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <ImageWithFallback
        src={other.image_path}
        alt={other.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {other.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default OtherCard;
