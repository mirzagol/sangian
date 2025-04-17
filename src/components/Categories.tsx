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
  name: string; // English name for the icon
  persianName: string; // Persian name to display
  icon: string; // Icon path
}

interface CategoriesProps {
  onSelectCategory: (category: string | null) => void; // Prop to handle category selection
}

const Categories = ({ onSelectCategory }: CategoriesProps) => {
  const data: category[] = [
    { name: "couch", persianName: "مبل راحتی", icon: couch },
    { name: "classic", persianName: "مبل سلطنتی", icon: classic },
    { name: "sofaBed", persianName: "مبل تخت خواب شو", icon: sofaBed },
    { name: "lShape", persianName: "مبل ال", icon: lShape },
    { name: "diningTable", persianName: "عذاخوری", icon: diningTable },
    { name: "bed", persianName: "سرویس خواب", icon: bed },
    { name: "table", persianName: "جلو مبلی و عسلی", icon: table },
    { name: "other", persianName: "سایر", icon: other },
  ];

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <List.Root gap={4}>
      {data.map((category) => (
        <ListItem
          key={category.name}
          listStyleType={"none"}
          paddingY="5px"
          borderRadius="md"
          backgroundColor={bgColor}
          _hover={{
            backgroundColor: useColorModeValue("gray.200", "gray.600"),
          }}
          cursor={"pointer"}
          onClick={() => {
            if (category.name === "diningTable") {
              onSelectCategory("diningTable");
            } else if (category.name === "bed") {
              onSelectCategory("bed");
            } else if (category.name === "couch") {
              onSelectCategory("راحتی");
            } else if (category.name === "classic") {
              onSelectCategory("سلطنتی");
            } else if (category.name === "sofaBed") {
              onSelectCategory("تخت خواب شو");
            } else if (category.name === "lShape") {
              onSelectCategory("ال");
            } else {
              onSelectCategory(null);
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
