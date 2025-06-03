import { Image, List, ListItem, HStack, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import classic from "../assets/icons/classic.png";
import couch from "../assets/icons/couch.png";
import diningTable from "../assets/icons/diningTable.png";
import lShape from "../assets/icons/l-shape.png";
import table from "../assets/icons/table.png";
import cushion from "../assets/icons/cushion.png";

interface category {
  name: string;
  persianName: string;
  icon: string;
}

interface LandingCategoriesProps {
  onSelectCategory?: (category: string | null) => void;
  selectedCategory?: string | null;
}

const LandingCategories = ({
  onSelectCategory = () => {},
  selectedCategory = null,
}: LandingCategoriesProps) => {
  const navigate = useNavigate();

  // دسته‌بندی‌ها
  const sofaCategories: category[] = [
    { name: "all-sofas", persianName: "همه مبل‌ ها", icon: couch },
    { name: "couch", persianName: "مبل راحتی", icon: couch },
    { name: "classic", persianName: "مبل کلاسیک", icon: classic },
    { name: "lShape", persianName: "مبل ال", icon: lShape },
  ];
  const otherCategories: category[] = [
    { name: "diningTable", persianName: "غذاخوری", icon: diningTable },
    { name: "table", persianName: "جلو مبلی و عسلی", icon: table },
    { name: "cushion", persianName: "کوسن", icon: cushion },
  ];

  const bgColor = "gray.200";
  const selectedBg = "blue.200";
  const hoverBg = "white";
  const textColor = "gray.800";

  return (
    <List.Root gap={4}>
      {/* Sofa categories */}
      {/* Special button for "همه مبل‌ها" */}
      <ListItem
        key="all-sofas"
        listStyleType="none"
        py={3}
        borderRadius="md"
        backgroundColor={
          selectedCategory === "all-sofas" ? selectedBg : bgColor
        }
        _hover={{
          backgroundColor:
            selectedCategory === "all-sofas" ? selectedBg : hoverBg,
        }}
        cursor="pointer"
        onClick={() => {
          onSelectCategory("all-sofas");
          navigate("/catalog");
        }}
        color={textColor}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={2} // More gap from the others
      >
        <Text w="100%" textAlign="center" m={0}>
          همه مبل‌ ها
        </Text>
      </ListItem>

      {/* The rest of sofa categories */}
      {sofaCategories
        .filter((category) => category.name !== "all-sofas")
        .map((category) => {
          const isSelected = selectedCategory === category.name;
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
              onClick={() => {
                onSelectCategory(category.name);
                navigate(`/catalog?category=${category.name}`);
              }}
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

      {/* Themed divider */}
      <Box
        width="100%"
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="70%"
          height="4px"
          borderRadius="full"
          bgGradient="linear(to-l, teal.100, teal.300, teal.100)"
          opacity={0.5}
        />
      </Box>

      {/* Other categories */}
      {otherCategories.map((category) => {
        const isSelected = selectedCategory === category.name;
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
            onClick={() => {
              onSelectCategory(category.name);
              navigate(`/catalog?category=${category.name}`);
            }}
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

export default LandingCategories;
