import { BedSet } from "../hooks/useBedSets";
import { Card } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  bedSet: BedSet;
}

const BedSetCard = ({ bedSet }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden">
      <ImageWithFallback
        src={bedSet.image_path}
        alt={bedSet.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {bedSet.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default BedSetCard;
