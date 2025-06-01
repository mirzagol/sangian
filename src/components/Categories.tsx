import { Image, List, ListItem, HStack, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import classic from "../assets/icons/classic.png";
import couch from "../assets/icons/couch.png";
import diningTable from "../assets/icons/diningTable.png";
import lShape from "../assets/icons/l-shape.png";
import table from "../assets/icons/table.png";
import cushion from "../assets/icons/cushion.png";
import contact from "../assets/icons/contact.png";
import contract from "../assets/icons/contract.png";

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
  const navigate = useNavigate();
  const data: category[] = [
    { name: "couch", persianName: "مبل راحتی", icon: couch },
    { name: "classic", persianName: "مبل کلاسیک", icon: classic },
    { name: "lShape", persianName: "مبل ال", icon: lShape },
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
      {data.map((category) => {
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
      <Box height="1px" backgroundColor="gray.300" my={3} />
      <ListItem
        listStyleType={"none"}
        paddingY="5px"
        borderRadius="md"
        backgroundColor={bgColor}
        _hover={{ backgroundColor: hoverBg }}
        cursor={"pointer"}
        onClick={() => navigate("/contact")}
        color={textColor}
      >
        <HStack dir="rtl">
          <Image src={contact} alt="contact" boxSize="30px" padding="5px" />
          <Text paddingX={3}>تماس با ما</Text>
        </HStack>
      </ListItem>
      <ListItem
        listStyleType={"none"}
        paddingY="5px"
        borderRadius="md"
        backgroundColor={bgColor}
        _hover={{ backgroundColor: hoverBg }}
        cursor={"pointer"}
        onClick={() => navigate("/contract")}
        color={textColor}
      >
        <HStack dir="rtl">
          <Image src={contract} alt="contract" boxSize="30px" padding="5px" />
          <Text paddingX={3}>طرفین قرارداد</Text>
        </HStack>
      </ListItem>
    </List.Root>
  );
};

export default Categories;
