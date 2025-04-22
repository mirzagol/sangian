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
import cushion from "../assets/icons/cushion.png";

interface category {
  name: string;
  persianName: string;
  icon: string;
}

interface CategoriesProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const Categories = ({
  onSelectCategory,
  selectedCategory,
}: CategoriesProps) => {
  const data: category[] = [
    { name: "couch", persianName: "مبل راحتی", icon: couch },
    { name: "classic", persianName: "مبل سلطنتی", icon: classic },
    { name: "sofaBed", persianName: "مبل تخت خواب شو", icon: sofaBed },
    { name: "lShape", persianName: "مبل ال", icon: lShape },
    { name: "diningTable", persianName: "غذاخوری", icon: diningTable },
    { name: "bed", persianName: "سرویس خواب", icon: bed },
    { name: "table", persianName: "جلو مبلی و عسلی", icon: table },
    { name: "cushion", persianName: "کوسن", icon: cushion },
    { name: "other", persianName: "سایر", icon: other },
  ];

  // Map English name to the value you use in onSelectCategory
  const categoryValueMap: Record<string, string> = {
    diningTable: "diningTable",
    bed: "bed",
    table: "table",
    cushion: "cushion",
    other: "other",
    couch: "راحتی",
    classic: "سلطنتی",
    sofaBed: "تخت خواب شو",
    lShape: "ال",
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const selectedBg = useColorModeValue("blue.200", "blue.700");

  return (
    <List.Root gap={4}>
      {data.map((category) => {
        const value = categoryValueMap[category.name];
        const isSelected = selectedCategory === value;
        return (
          <ListItem
            key={category.name}
            listStyleType={"none"}
            paddingY="5px"
            borderRadius="md"
            backgroundColor={isSelected ? selectedBg : bgColor}
            _hover={{
              backgroundColor: isSelected
                ? selectedBg
                : useColorModeValue("gray.200", "gray.600"),
            }}
            cursor={"pointer"}
            onClick={() => onSelectCategory(value)}
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
        );
      })}
    </List.Root>
  );
};

export default Categories;
