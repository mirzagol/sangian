import { Sofa } from "../hooks/useSofas";
import { Card, Tag, TagLabel, HStack, Box } from "@chakra-ui/react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  sofa: Sofa;
}

const categories = [
  { name: "couch", persianName: "راحتی" },
  { name: "classic", persianName: "کلاسیک" },
  { name: "lShape", persianName: "ال" },
  // Add more categories here if needed
];

const ItemCard = ({ sofa }: Props) => {
  // Helper to get English name from Persian type
  const getEnglishName = (persianType: string) => {
    const found = categories.find((cat) => cat.persianName === persianType);
    return found ? found.name : persianType;
  };

  return (
    <Card.Root borderRadius="md" overflow="hidden" gap={2}>
      <ImageWithFallback
        src={sofa.coverImage}
        alt={sofa.name}
        width="100%" // Make the image span the full width of the card
        height="200px" // Set a fixed height for the image
        objectFit="cover" // Ensure the image covers the area while maintaining aspect ratio
      />
      <Card.Body gap={3} padding="10px">
        <Card.Title fontSize="2xl" fontWeight="normal " textAlign="right">
          {sofa.name}
        </Card.Title>
        <Box
          height="1px"
          width="100%"
          bg="gray.300"
          mx="auto"
          borderRadius="full"
        />
      </Card.Body>
      <Card.Footer paddingRight={2} paddingBottom={2}>
        <HStack
          flexWrap="wrap"
          justifyContent="flex-end"
          dir="rtl"
          textAlign="right"
        >
          {sofa.types.map((type, index) =>
            type !== "تخت‌خواب شو" ? (
              <a
                href={`/catalog?category=${encodeURIComponent(
                  getEnglishName(type)
                )}`}
                key={index}
                target="_self"
                rel="noopener noreferrer"
                tabIndex={0}
                style={{ textDecoration: "none" }}
                onClick={(e) => e.stopPropagation()} // Prevent card click event
              >
                <Tag.Root
                  size="xl"
                  variant="subtle"
                  colorScheme="gray"
                  fontWeight="normal"
                  cursor="pointer"
                  _hover={{ bg: "gray.200" }}
                >
                  <TagLabel>{type}</TagLabel>
                </Tag.Root>
              </a>
            ) : (
              <Tag.Root
                key={index}
                size="xl"
                variant="subtle"
                colorScheme="gray"
                fontWeight="normal"
                cursor="default"
                tabIndex={0}
              >
                <TagLabel>{type}</TagLabel>
              </Tag.Root>
            )
          )}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default ItemCard;
