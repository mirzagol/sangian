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
  name: string;
  icon: string;
}

const Categories = () => {
  const data: category[] = [
    { id: 1, name: "مبل راحتی", icon: couch },
    { id: 2, name: "مبل سلطنتی", icon: classic },
    { id: 3, name: "مبل تخت خواب شو", icon: sofaBed },
    { id: 4, name: "مبل ال", icon: lShape },
    { id: 5, name: "عذاخوری", icon: diningTable },
    { id: 6, name: "سرویس خواب", icon: bed },
    { id: 7, name: "جلو مبلی و عسلی", icon: table },
    { id: 8, name: "سایر", icon: other },
  ];

  // Dynamically set background color based on theme
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <List.Root gap={4}>
      {data.map((category) => (
        <ListItem
          key={category.id}
          listStyleType={"none"}
          paddingY="5px"
          borderRadius="md"
          backgroundColor={bgColor} // Use dynamic background color
        >
          <HStack>
            <Image
              src={category.icon}
              alt={category.name}
              boxSize="30px"
              padding="5px" // Add padding to create a gap between the image and its box
            />
            <Text paddingX={3}>{category.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default Categories;
