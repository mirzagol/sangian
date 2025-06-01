import { Image, List, ListItem, HStack, Text } from "@chakra-ui/react";
import classic from "../assets/icons/classic.png";
import couch from "../assets/icons/couch.png";
import diningTable from "../assets/icons/diningTable.png";
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
    { name: "classic", persianName: "مبل کلاسیک", icon: classic },
    { name: "sofaBed", persianName: "مبل تخت خواب شو", icon: sofaBed },
    { name: "diningTable", persianName: "غذاخوری", icon: diningTable },
    { name: "table", persianName: "جلو مبلی و عسلی", icon: table },
    { name: "cushion", persianName: "کوسن", icon: cushion },
  ];

  // Map English name to the value you use in onSelectCategory
  const categoryValueMap: Record<string, string> = {
    diningTable: "diningTable",
    table: "table",
    cushion: "cushion",
    couch: "راحتی",
    classic: "کلاسیک",
    lShape: "ال",
  };

  const bgColor = "gray.200";
  const selectedBg = "blue.200";
  const hoverBg = "white";
  const textColor = "gray.800";

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
              backgroundColor: isSelected ? selectedBg : hoverBg,
            }}
            cursor={"pointer"}
            onClick={() => onSelectCategory(value)}
            color={textColor}
          >
            <HStack dir="rtl">
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
