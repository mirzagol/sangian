import { Sofa } from "../hooks/useSofas";
import { Card, List, ListItem } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  sofa: Sofa;
}

const ItemCard = ({ sofa }: Props) => {
  return (
    <Card.Root borderRadius="md" overflow="hidden" gap={2}>
      <ImageWithFallback
        src={sofa.coverImage}
        alt={sofa.name}
        width="100%" // Make the image span the full width of the card
        height="200px" // Set a fixed height for the image
        objectFit="cover" // Ensure the image covers the area while maintaining aspect ratio
      />
      <Card.Body gap={10} padding="10px">
        <Card.Title fontSize="3xl" fontWeight="black" textAlign="center">
          {sofa.name}
        </Card.Title>
      </Card.Body>
      <Card.Footer padding="10px">
        <List.Root gap={2} dir="rtl" textAlign="right">
          {sofa.types.map((type, index) => (
            <ListItem key={index} fontSize="sm" fontWeight="thin">
              {type}
            </ListItem>
          ))}
        </List.Root>
      </Card.Footer>
    </Card.Root>
  );
};

export default ItemCard;
