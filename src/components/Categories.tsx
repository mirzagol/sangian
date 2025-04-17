import { Image, List, ListItem, HStack, Text } from "@chakra-ui/react";

import { useColorModeValue } from "../components/ui/color-mode";
import bed from "../assets/icons/bed.png";
import classic from "../assets/icons/classic.png";
import couch from "../assets/icons/couch.png";
import diningTable from "../assets/icons/diningTable.png";
import lShape from "../assets/icons/l-shape.png";
import other from "../assets/icons/other.png";
import sofaBed from "../assets/icons/sofaBed.png";
import table from "../assets/icons/table.png";

interface category {
  id: number;
  name: string; // English name for the icon
  persianName: string; // Persian name to display
  icon: string; // Icon path
}

interface CategoriesProps {
  onSelectCategory: (category: string | null) => void; // Prop to handle category selection
}

const Categories = ({ onSelectCategory }: CategoriesProps) => {
  const data: category[] = [
    { id: 1, name: "couch", persianName: "مبل راحتی", icon: couch },
    { id: 2, name: "classic", persianName: "مبل سلطنتی", icon: classic },
    { id: 3, name: "sofaBed", persianName: "مبل تخت خواب شو", icon: sofaBed },
    { id: 4, name: "lShape", persianName: "مبل ال", icon: lShape },
    { id: 5, name: "diningTable", persianName: "عذاخوری", icon: diningTable },
    { id: 6, name: "bed", persianName: "سرویس خواب", icon: bed },
    { id: 7, name: "table", persianName: "جلو مبلی و عسلی", icon: table },
    { id: 8, name: "other", persianName: "سایر", icon: other },
  ];

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <List.Root gap={4}>
      {data.map((category) => (
        <ListItem
          key={category.id}
          listStyleType={"none"}
          paddingY="5px"
          borderRadius="md"
          backgroundColor={bgColor}
          _hover={{
            backgroundColor: useColorModeValue("gray.200", "gray.600"),
          }}
          cursor={"pointer"}
          onClick={() => {
            if (category.id <= 4) {
              if (category.id === 1) {
                onSelectCategory("راحتی"); // Handle category 4 separately
              }
              if (category.id === 2) {
                onSelectCategory("سلطنتی");
              }
              if (category.id === 3) {
                onSelectCategory("تخت خواب شو");
              }
              if (category.id === 4) {
                onSelectCategory("ال");
              }
            } else {
              onSelectCategory(null); // Handle categories 5-8 later
            }
          }}
        >
          <HStack>
            <Image
              src={category.icon}
              alt={category.name}
              boxSize="30px"
              padding="5px"
            />
            <Text paddingX={3}>{category.persianName}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default Categories;
